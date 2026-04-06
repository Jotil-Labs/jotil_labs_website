import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, inquiryType, message } = body

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ ok: false, error: 'Valid name is required.' }, { status: 400 })
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Valid email is required.' }, { status: 400 })
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ ok: false, error: 'Message must be at least 10 characters.' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Jotil Labs Website <onboarding@resend.dev>',
      to: 'contact@jotillabs.com',
      replyTo: email.trim(),
      subject: `New Contact Form Submission — ${inquiryType || 'General Inquiry'}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #FAFBFD; border-radius: 12px;">
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #E5E7EB;">
            <h2 style="margin: 0; font-size: 22px; font-weight: 700; color: #111111;">New Contact Submission</h2>
            <p style="margin: 4px 0 0; font-size: 14px; color: #999999;">From jotillabs.com contact form</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #999; font-weight: 600; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #111;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #999; font-weight: 600; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #111;"><a href="mailto:${email.trim()}" style="color: #3B7BF2;">${email.trim()}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; color: #999; font-weight: 600; vertical-align: top;">Company</td>
              <td style="padding: 10px 0; color: #111;">${company.trim()}</td>
            </tr>` : ''}
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: #999; font-weight: 600; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; color: #111;">${phone.trim()}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #999; font-weight: 600; vertical-align: top;">Inquiry Type</td>
              <td style="padding: 10px 0; color: #111;">${inquiryType || 'General Inquiry'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #999; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #111; white-space: pre-wrap;">${message.trim()}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #E5E7EB; font-size: 12px; color: #999;">
            Sent from jotillabs.com on ${new Date().toUTCString()}
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact/route] Error:', err)
    return NextResponse.json(
      { ok: false, error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
