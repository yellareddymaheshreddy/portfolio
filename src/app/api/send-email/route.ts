import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateEmailTemplate } from '@/lib/email-template';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});
export async function POST(req: Request) {
  try {
    const { name, email, message, source } = await req.json();

    const htmlContent = generateEmailTemplate({
      name,
      email,
      message,
      source: source || 'Contact Form'
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name} (${source || 'Portfolio'})`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message || 'No message provided'}\nSource: ${source || 'Contact Form'}`,
      html: htmlContent,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 