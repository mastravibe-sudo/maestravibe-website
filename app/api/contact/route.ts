// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const MAX_FILES = 5;
const MAX_TOTAL_MB = 15; // Gmail allows ~25 MB per email (attachments grow ~33% when encoded)
const MAX_TOTAL_BYTES = MAX_TOTAL_MB * 1024 * 1024;
const ALLOWED_EXT = ['jpg', 'jpeg', 'png', 'webp', 'pdf', 'doc', 'docx', 'dwg'];

const clean = (v: unknown) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim();
const safeName = (name: string) => name.replace(/[^\w.\- ]+/g, '_').slice(0, 100);

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const firstName = clean(form.get('firstName'));
    const lastName = clean(form.get('lastName'));
    const company = clean(form.get('company'));
    const email = clean(form.get('email'));
    const message = String(form.get('message') ?? '').trim();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    // ---- files (optional) ----
    const files = form
      .getAll('files')
      .filter((f): f is File => f instanceof File && f.size > 0);

    if (files.length > MAX_FILES) {
      return NextResponse.json({ error: `You can attach up to ${MAX_FILES} files.` }, { status: 400 });
    }

    let totalSize = 0;
    for (const f of files) {
      const ext = f.name.split('.').pop()?.toLowerCase() ?? '';
      if (!ALLOWED_EXT.includes(ext)) {
        return NextResponse.json(
          { error: `"${f.name}" is not a supported file type.` },
          { status: 400 }
        );
      }
      totalSize += f.size;
    }
    if (totalSize > MAX_TOTAL_BYTES) {
      return NextResponse.json({ error: `Total file size must be under ${MAX_TOTAL_MB} MB.` }, { status: 400 });
    }

    const attachments = await Promise.all(
      files.map(async (f) => ({
        filename: safeName(f.name),
        content: Buffer.from(await f.arrayBuffer()),
      }))
    );

    // ---- mail ----
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('GMAIL_USER or GMAIL_APP_PASSWORD is not set');
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
    }

    const fullName = `${firstName} ${lastName}`;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER.trim(),
        pass: process.env.GMAIL_APP_PASSWORD.replace(/\s+/g, ''),
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 90000,
    });

    await transporter.sendMail({
      from: `"Maestra Arch Website" <${process.env.GMAIL_USER.trim()}>`,
      to: 'maestraarch@gmail.com',
      replyTo: email,
      subject: `New inquiry from ${fullName}`,
      text:
        `Name: ${fullName}\nCompany: ${company || '-'}\nEmail: ${email}\n` +
        `Attachments: ${attachments.length}\n\nMessage:\n${message}`,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}