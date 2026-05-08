import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }

  const smtpUser = process.env.MAILBUX_EMAIL;
  const smtpPass = process.env.MAILBUX_PASSWORD;

  if (!smtpUser || !smtpPass) {
    return res.status(500).json({ error: "Email configuration missing" });
  }

  // Create transporter with Mailbux SMTP settings
  const transporter = nodemailer.createTransport({
    host: "my.mailbux.com",
    port: 587,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      // Do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  try {
    // Verify the connection first
    await transporter.verify();

    await transporter.sendMail({
      from: `"Codevio Website" <${smtpUser}>`,
      to: "contact@codevio.be",
      replyTo: email,
      subject: `Nieuw contactformulier: ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fafafa; border-radius: 12px; overflow: hidden;">
          <div style="background: #0a0a0a; padding: 32px 24px; text-align: center;">
            <h1 style="color: #d4a853; margin: 0; font-size: 22px; font-weight: 600;">Nieuw Bericht via Codevio.be</h1>
          </div>
          <div style="padding: 32px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px; width: 100px;">Naam</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #1a1a1a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #1a1a1a;">
                  <a href="mailto:${email}" style="color: #d4a853; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Bedrijf</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #1a1a1a;">${company}</td>
              </tr>
              ` : ""}
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #888; font-size: 13px; margin: 0 0 8px;">Bericht</p>
              <div style="background: #fff; border: 1px solid #eee; border-radius: 8px; padding: 16px; color: #1a1a1a; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          <div style="background: #f0f0f0; padding: 16px 24px; text-align: center;">
            <p style="margin: 0; color: #999; font-size: 12px;">Dit bericht is verzonden via het contactformulier op codevio.be</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Email send error:", error);
    return res.status(500).json({
      error: "Failed to send email",
      details: error?.message || String(error),
    });
  }
}
