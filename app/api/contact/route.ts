// app/api/contact/route.ts (Next.js 13+)
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export const dynamic = 'force-dynamic';


export async function POST(req: NextRequest) {
  const { name, email, message, reason } = await req.json();

  // Set up your transporter (here for Gmail with App Password)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // same sender & receiver
    subject: `New Contact Form Submission (${reason}) from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Reason: ${reason}
      Message: 
      ${message}
    `,
    replyTo: email,

  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
