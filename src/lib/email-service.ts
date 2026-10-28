import { Resend } from "resend";

export interface ContactFormData {
  name: string;
  email: string;
  role?: string;
  situation: string;
  preferredTime?: string;
  consent: boolean;
}

export interface NewsletterFormData {
  email: string;
}

function getResendClient() {
  const apiKey =
    process.env.RESEND_API_KEY ||
    (import.meta as unknown as { env?: Record<string, string> }).env?.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured in environment variables.");
  }
  return new Resend(apiKey);
}

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ||
  (import.meta as unknown as { env?: Record<string, string> }).env?.RESEND_FROM_EMAIL ||
  "RheAligned <rhea@rhealigned.com>";

const TO_EMAIL =
  process.env.RESEND_TO_EMAIL ||
  (import.meta as unknown as { env?: Record<string, string> }).env?.RESEND_TO_EMAIL ||
  "rhea@rhealigned.com";

/**
 * Send Contact Enquiry Notification to Rhea and confirmation to the sender.
 */
export async function sendContactEmail(data: ContactFormData) {
  const resend = getResendClient();

  // Validate required fields
  if (!data.name || !data.email || !data.situation) {
    throw new Error("Missing required fields (name, email, situation).");
  }

  const notificationHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1c2e30; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e7ded0; border-radius: 12px; background: #faf8f5; }
          .header { border-bottom: 2px solid #207280; padding-bottom: 12px; margin-bottom: 20px; }
          .title { font-size: 20px; font-weight: bold; color: #054049; margin: 0; }
          .field { margin-bottom: 16px; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; font-weight: bold; margin-bottom: 4px; }
          .value { font-size: 15px; color: #0f172a; background: #ffffff; padding: 10px 14px; border-radius: 6px; border: 1px solid #e2e8f0; }
          .situation-box { white-space: pre-wrap; font-size: 15px; background: #ffffff; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0; }
          .footer { margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">New Coaching Enquiry — RheAligned</h1>
          </div>
          <div class="field">
            <div class="label">Client Name</div>
            <div class="value">${escapeHtml(data.name)}</div>
          </div>
          <div class="field">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
          </div>
          ${
            data.role
              ? `<div class="field">
                  <div class="label">Role or Context</div>
                  <div class="value">${escapeHtml(data.role)}</div>
                </div>`
              : ""
          }
          <div class="field">
            <div class="label">What's Happening / Situation Navigating</div>
            <div class="situation-box">${escapeHtml(data.situation)}</div>
          </div>
          ${
            data.preferredTime
              ? `<div class="field">
                  <div class="label">Preferred Call Time</div>
                  <div class="value">${escapeHtml(data.preferredTime)}</div>
                </div>`
              : ""
          }
          <div class="field">
            <div class="label">Consent Verified</div>
            <div class="value">${data.consent ? "✓ User confirmed consent to receive response" : "Pending"}</div>
          </div>
          <div class="footer">
            Submitted via rhealigned.com/contact on ${new Date().toUTCString()}
          </div>
        </div>
      </body>
    </html>
  `;

  // Send notification to Rhea
  try {
    return await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: data.email,
      subject: `New Coaching Enquiry: ${data.name}${data.role ? ` (${data.role})` : ""}`,
      html: notificationHtml,
    });
  } catch (err: unknown) {
    // If domain is not verified yet in Resend, retry with onboarding@resend.dev as fallback
    const errorMsg = String(err);
    if (errorMsg.includes("domain") || errorMsg.includes("verify") || errorMsg.includes("validation")) {
      console.warn("Retrying with fallback onboarding sender:", err);
      return await resend.emails.send({
        from: "RheAligned <onboarding@resend.dev>",
        to: [TO_EMAIL],
        replyTo: data.email,
        subject: `New Coaching Enquiry: ${data.name}`,
        html: notificationHtml,
      });
    }
    throw err;
  }
}

/**
 * Send Newsletter Subscription Notification to Rhea and confirm subscriber.
 */
export async function sendNewsletterEmail(data: NewsletterFormData) {
  const resend = getResendClient();

  if (!data.email || !data.email.includes("@")) {
    throw new Error("A valid email address is required.");
  }

  const notificationHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1c2e30; line-height: 1.6; }
          .container { max-width: 520px; margin: 0 auto; padding: 24px; border: 1px solid #e7ded0; border-radius: 12px; background: #faf8f5; }
          .header { border-bottom: 2px solid #207280; padding-bottom: 12px; margin-bottom: 20px; }
          .title { font-size: 18px; font-weight: bold; color: #054049; margin: 0; }
          .value { font-size: 16px; color: #0f172a; background: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0; margin-top: 8px; }
          .footer { margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">New Newsletter Subscriber — RheAligned</h1>
          </div>
          <p style="margin: 0; font-size: 14px; color: #475569;">A new reader just subscribed to <strong>The Leadership Journal</strong> insights:</p>
          <div class="value">
            <a href="mailto:${escapeHtml(data.email)}" style="color: #207280; text-decoration: none; font-weight: bold;">
              ${escapeHtml(data.email)}
            </a>
          </div>
          <div class="footer">
            Subscribed via rhealigned.com/insights on ${new Date().toUTCString()}
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    return await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `New Newsletter Subscriber: ${data.email}`,
      html: notificationHtml,
    });
  } catch (err: unknown) {
    const errorMsg = String(err);
    if (errorMsg.includes("domain") || errorMsg.includes("verify") || errorMsg.includes("validation")) {
      console.warn("Retrying newsletter with fallback onboarding sender:", err);
      return await resend.emails.send({
        from: "RheAligned <onboarding@resend.dev>",
        to: [TO_EMAIL],
        subject: `New Newsletter Subscriber: ${data.email}`,
        html: notificationHtml,
      });
    }
    throw err;
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
