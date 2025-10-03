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
      to: ['matthewtrundle@gmail.com'],
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

    // Send confirmation email to the submitter
    await resend.emails.send({
      from: 'Harmoniq AI <onboarding@resend.dev>', // Update with your verified domain
      to: email,
      subject: 'Welcome to the Future of Healthcare Technology',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Harmoniq AI</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

                  <!-- Header with Gradient -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0d9488 0%, #7c3aed 100%); padding: 48px 40px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                        Harmoniq AI
                      </h1>
                      <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.95); font-size: 16px; font-weight: 500;">
                        Healthcare Technology Excellence
                      </p>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 48px 40px;">
                      <h2 style="margin: 0 0 24px 0; color: #1e293b; font-size: 24px; font-weight: 700;">
                        Thank You, ${name.split(' ')[0]}! 🎉
                      </h2>

                      <p style="margin: 0 0 20px 0; color: #475569; font-size: 16px; line-height: 1.6;">
                        We're excited to help transform <strong style="color: #0d9488;">${practice}</strong> with cutting-edge healthcare technology solutions.
                      </p>

                      <p style="margin: 0 0 32px 0; color: #475569; font-size: 16px; line-height: 1.6;">
                        Your inquiry has been received and our team is already reviewing your needs. We'll reach out within <strong>24 hours</strong> with personalized insights and next steps.
                      </p>

                      <!-- What Happens Next Section -->
                      <div style="background: linear-gradient(135deg, #f0fdfa 0%, #faf5ff 100%); border-radius: 12px; padding: 32px; margin: 32px 0;">
                        <h3 style="margin: 0 0 24px 0; color: #1e293b; font-size: 20px; font-weight: 700;">
                          What Happens Next?
                        </h3>

                        <table role="presentation" style="width: 100%;">
                          <tr>
                            <td style="padding: 12px 0; vertical-align: top;">
                              <div style="display: inline-block; width: 32px; height: 32px; background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%); border-radius: 50%; text-align: center; line-height: 32px; color: white; font-weight: 700; margin-right: 16px;">1</div>
                              <div style="display: inline-block; vertical-align: top; width: calc(100% - 50px);">
                                <strong style="color: #1e293b; font-size: 16px;">Personalized Review</strong>
                                <p style="margin: 4px 0 0 0; color: #64748b; font-size: 14px; line-height: 1.5;">Our team analyzes your practice needs and goals</p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; vertical-align: top;">
                              <div style="display: inline-block; width: 32px; height: 32px; background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%); border-radius: 50%; text-align: center; line-height: 32px; color: white; font-weight: 700; margin-right: 16px;">2</div>
                              <div style="display: inline-block; vertical-align: top; width: calc(100% - 50px);">
                                <strong style="color: #1e293b; font-size: 16px;">Custom Strategy Call</strong>
                                <p style="margin: 4px 0 0 0; color: #64748b; font-size: 14px; line-height: 1.5;">30-minute consultation to discuss your vision</p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; vertical-align: top;">
                              <div style="display: inline-block; width: 32px; height: 32px; background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%); border-radius: 50%; text-align: center; line-height: 32px; color: white; font-weight: 700; margin-right: 16px;">3</div>
                              <div style="display: inline-block; vertical-align: top; width: calc(100% - 50px);">
                                <strong style="color: #1e293b; font-size: 16px;">Tailored Proposal</strong>
                                <p style="margin: 4px 0 0 0; color: #64748b; font-size: 14px; line-height: 1.5;">Custom solution with clear pricing and timeline</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- Resources Section -->
                      <div style="margin: 32px 0;">
                        <h3 style="margin: 0 0 20px 0; color: #1e293b; font-size: 18px; font-weight: 700;">
                          Explore While You Wait
                        </h3>

                        <table role="presentation" style="width: 100%;">
                          <tr>
                            <td style="width: 50%; padding: 8px 8px 8px 0;">
                              <a href="https://www.harmoniqai.dev/services" style="display: block; background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%); border-radius: 8px; padding: 20px; text-decoration: none; border: 1px solid #99f6e4;">
                                <div style="color: #0d9488; font-size: 24px; margin-bottom: 8px;">📋</div>
                                <div style="color: #0f766e; font-weight: 700; font-size: 14px; margin-bottom: 4px;">Our Services</div>
                                <div style="color: #0d9488; font-size: 12px;">Explore solutions</div>
                              </a>
                            </td>
                            <td style="width: 50%; padding: 8px 0 8px 8px;">
                              <a href="https://www.harmoniqai.dev/work" style="display: block; background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%); border-radius: 8px; padding: 20px; text-decoration: none; border: 1px solid #e9d5ff;">
                                <div style="color: #7c3aed; font-size: 24px; margin-bottom: 8px;">✨</div>
                                <div style="color: #6b21a8; font-weight: 700; font-size: 14px; margin-bottom: 4px;">Case Studies</div>
                                <div style="color: #7c3aed; font-size: 12px;">See results</div>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" style="padding: 8px 0;">
                              <a href="https://www.harmoniqai.dev/roi-calculator" style="display: block; background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%); border-radius: 8px; padding: 20px; text-decoration: none; text-align: center; border: 1px solid #fdba74;">
                                <div style="color: #c2410c; font-size: 24px; margin-bottom: 8px;">📊</div>
                                <div style="color: #9a3412; font-weight: 700; font-size: 14px; margin-bottom: 4px;">ROI Calculator</div>
                                <div style="color: #c2410c; font-size: 12px;">Calculate your potential returns</div>
                              </a>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- CTA Button -->
                      <div style="text-align: center; margin: 40px 0 32px 0;">
                        <a href="https://www.harmoniqai.dev" style="display: inline-block; background: linear-gradient(135deg, #0d9488 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(13, 148, 136, 0.3);">
                          Visit Our Website
                        </a>
                      </div>

                      <!-- Signature -->
                      <div style="margin-top: 40px; padding-top: 32px; border-top: 1px solid #e2e8f0;">
                        <p style="margin: 0 0 8px 0; color: #475569; font-size: 16px;">
                          Looking forward to your success,
                        </p>
                        <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 700;">
                          The Harmoniq AI Team
                        </p>
                        <p style="margin: 8px 0 0 0; color: #64748b; font-size: 14px; font-style: italic;">
                          Transforming Healthcare, One Practice at a Time
                        </p>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 32px 40px; text-align: center;">
                      <p style="margin: 0 0 16px 0; color: #64748b; font-size: 14px;">
                        Have questions? Simply reply to this email
                      </p>
                      <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                        © ${new Date().getFullYear()} Harmoniq AI. All rights reserved.
                      </p>
                      <p style="margin: 8px 0 0 0;">
                        <a href="https://www.harmoniqai.dev" style="color: #0d9488; text-decoration: none; font-size: 12px; margin: 0 8px;">Website</a>
                        <span style="color: #cbd5e1;">•</span>
                        <a href="https://www.harmoniqai.dev/services" style="color: #0d9488; text-decoration: none; font-size: 12px; margin: 0 8px;">Services</a>
                        <span style="color: #cbd5e1;">•</span>
                        <a href="https://www.harmoniqai.dev/contact" style="color: #0d9488; text-decoration: none; font-size: 12px; margin: 0 8px;">Contact</a>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
