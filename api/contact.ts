import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    try {
        const { name, email, company, message } = await req.json();

        if (!name || !email || !message) {
            return new Response("Missing fields", { status: 400 });
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

        return new Response(
            JSON.stringify({ success: true }),
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return new Response("Server error", { status: 500 });
    }
}
