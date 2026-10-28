// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

function resendDevApiPlugin(): Plugin {
  return {
    name: "resend-dev-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.method === "POST" && req.url === "/api/contact") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk;
          });
          req.on("end", async () => {
            try {
              const data = JSON.parse(body || "{}");
              const { sendContactEmail } = await server.ssrLoadModule("/src/lib/email-service.ts");
              await sendContactEmail(data);
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: true, message: "Message sent successfully" }));
            } catch (err: unknown) {
              console.error("Dev contact API error:", err);
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: false, error: (err as Error)?.message || "Failed to send email" }));
            }
          });
          return;
        }

        if (req.method === "POST" && req.url === "/api/newsletter") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk;
          });
          req.on("end", async () => {
            try {
              const data = JSON.parse(body || "{}");
              const { sendNewsletterEmail } = await server.ssrLoadModule("/src/lib/email-service.ts");
              await sendNewsletterEmail(data);
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: true, message: "Subscribed successfully" }));
            } catch (err: unknown) {
              console.error("Dev newsletter API error:", err);
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: false, error: (err as Error)?.message || "Failed to subscribe" }));
            }
          });
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig({
  vite: {
    plugins: [resendDevApiPlugin()],
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
