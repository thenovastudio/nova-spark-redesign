import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const { name, email, company, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "Missing fields" });
        }

        await resend.emails.send({
            from: "Nova Studio <onboarding@resend.dev>",
            to: ["contact@thenovastudio.be"],
            subject: `New contact from ${name}`,
            html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("CONTACT ERROR:", error);
        return res.status(500).json({ error: "Server error" });
    }
}
