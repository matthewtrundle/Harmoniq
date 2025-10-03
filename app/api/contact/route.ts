import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      practice,
      phone,
      practiceType,
      currentWebsite,
      services,
      timeline,
      budget,
      message
    } = body

    // Validate required fields
    if (!name || !email || !practice) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to your team
    const emailData = await resend.emails.send({
      from: 'Harmoniq Contact Form <onboarding@resend.dev>', // Update with your verified domain
      to: ['contact@harmoniqai.dev'], // Update with your email
      replyTo: email,
      subject: `New Contact Form Submission from ${name} - ${practice}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #065f46;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Practice Name:</strong> ${practice}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          </div>

          <div style="background-color: #faf5ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #7c3aed;">Practice Details</h3>
            ${practiceType ? `<p><strong>Practice Type:</strong> ${practiceType}</p>` : ''}
            ${currentWebsite ? `<p><strong>Current Website:</strong> <a href="${currentWebsite}">${currentWebsite}</a></p>` : ''}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
          </div>

          ${services && services.length > 0 ? `
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #0369a1;">Services Interested In</h3>
              <ul>
                ${services.map((service: string) => `<li>${service}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${message ? `
            <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #c2410c;">Message</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the Harmoniq AI contact form.</p>
            <p>Submitted at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    })

    // Optional: Send confirmation email to the submitter
    await resend.emails.send({
      from: 'Harmoniq AI <onboarding@resend.dev>', // Update with your verified domain
      to: email,
      subject: 'Thank you for contacting Harmoniq AI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488;">Thank You for Reaching Out!</h2>

          <p>Hi ${name},</p>

          <p>We've received your inquiry about transforming ${practice} with our healthcare technology solutions.</p>

          <p>Our team will review your submission and get back to you within 24 hours. In the meantime, feel free to explore our resources:</p>

          <ul>
            <li><a href="https://www.harmoniqai.dev/services">Our Services</a></li>
            <li><a href="https://www.harmoniqai.dev/work">Case Studies</a></li>
            <li><a href="https://www.harmoniqai.dev/roi-calculator">ROI Calculator</a></li>
          </ul>

          <p>Looking forward to helping your practice thrive!</p>

          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>The Harmoniq AI Team</strong>
          </p>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Questions? Reply to this email or visit <a href="https://www.harmoniqai.dev">www.harmoniqai.dev</a></p>
          </div>
        </div>
      `
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        emailId: emailData.data?.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
