import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function sanitize(value) {
  return String(value || '').trim()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const missingEnvVars = ['RESEND_API_KEY', 'RESEND_FROM_EMAIL'].filter((name) => !process.env[name])

  if (missingEnvVars.length > 0) {
    return res.status(500).json({
      error: `Email service is not configured: missing ${missingEnvVars.join(', ')}`,
    })
  }

  const name = sanitize(req.body?.name)
  const email = sanitize(req.body?.email)
  const company = sanitize(req.body?.company)
  const phone = sanitize(req.body?.phone)
  const inquiryType = sanitize(req.body?.inquiryType)
  const message = sanitize(req.body?.message)

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' })
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL

  try {
    await resend.emails.send({
      from: `Jotil Labs Contact Form <${fromEmail}>`,
      to: ['contact@jotillabs.com'],
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'N/A'}`,
        `Company: ${company || 'N/A'}`,
        `Inquiry Type: ${inquiryType || 'N/A'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
