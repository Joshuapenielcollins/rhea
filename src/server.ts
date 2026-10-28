import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} - try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);

      // Handle Resend Contact Form API
      if (request.method === "POST" && url.pathname === "/api/contact") {
        try {
          const body = await request.json();
          const { sendContactEmail } = await import("./lib/email-service");
          await sendContactEmail(body);
          return new Response(JSON.stringify({ ok: true, message: "Message sent successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err: unknown) {
          console.error("Resend contact error:", err);
          return new Response(
            JSON.stringify({ ok: false, error: (err as Error)?.message || "Failed to send email" }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }
      }

      // Handle Resend Newsletter Form API
      if (request.method === "POST" && url.pathname === "/api/newsletter") {
        try {
          const body = await request.json();
          const { sendNewsletterEmail } = await import("./lib/email-service");
          await sendNewsletterEmail(body);
          return new Response(JSON.stringify({ ok: true, message: "Subscribed successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err: unknown) {
          console.error("Resend newsletter error:", err);
          return new Response(
            JSON.stringify({ ok: false, error: (err as Error)?.message || "Failed to subscribe" }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }
      }

      const handler = await getServerEntry();
      const rawResponse = await handler.fetch(request, env, ctx);
      const response = await normalizeCatastrophicSsrResponse(rawResponse);

      // Edge and Browser Caching Optimization for GET requests to eliminate latency
      if (request.method === "GET" && response.status === 200) {
        const url = new URL(request.url);
        const isStaticAsset =
          url.pathname.startsWith("/assets/") ||
          /\.(?:png|jpg|jpeg|webp|svg|ico|css|js|woff2?|ttf)$/i.test(url.pathname);

        const newHeaders = new Headers(response.headers);

        if (isStaticAsset) {
          newHeaders.set("Cache-Control", "public, max-age=31536000, immutable");
        } else if (!url.pathname.startsWith("/admin")) {
          // Cache SSR HTML at Edge for 5 mins with 24h background revalidation
          newHeaders.set(
            "Cache-Control",
            "public, max-age=0, s-maxage=300, stale-while-revalidate=86400",
          );
        }

        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      }

      return response;
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
