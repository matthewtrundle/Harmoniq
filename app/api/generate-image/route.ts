import { NextRequest, NextResponse } from 'next/server'

const API_KEY = process.env.GEMINI_API_KEY || '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'
const API_URL = 'https://openrouter.ai/api/v1/chat/completions'

export async function POST(request: NextRequest) {
  try {
    const { prompt, style = 'artistic' } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    // Enhance the prompt for artistic healthcare imagery
    const enhancedPrompt = `Create an ultra-modern, artistic image description for a healthcare technology website.
    Style: ${style}
    Requirements:
    - Dark background with neon accents (cyan #00D4FF, purple #FF00FF, pink #FF00FF)
    - Futuristic healthcare technology aesthetic
    - Photorealistic quality with cinematic lighting
    - Abstract and artistic interpretation
    - Incorporate organic flowing shapes
    - Use gradient colors and glowing effects
    - Minimal and sophisticated

    Specific request: ${prompt}

    Provide a detailed image generation prompt that would create a visually striking, artistic healthcare technology image.`

    const headers = {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'HealthForge'
    }

    const data = {
      model: 'google/gemini-flash-1.5',
      messages: [
        {
          role: 'system',
          content: 'You are an expert at creating detailed, artistic image generation prompts for healthcare technology. Return only the enhanced prompt, no explanations.'
        },
        {
          role: 'user',
          content: enhancedPrompt
        }
      ],
      temperature: 0.8,
      max_tokens: 500
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('API Error:', error)
      return NextResponse.json({ error: 'Failed to generate prompt' }, { status: response.status })
    }

    const result = await response.json()
    const generatedPrompt = result.choices[0].message.content

    // For now, return the prompt - in production, use with image generation service
    return NextResponse.json({
      success: true,
      prompt: generatedPrompt,
      originalPrompt: prompt,
      style: style,
      message: 'Use this prompt with DALL-E 3, Midjourney, or Stable Diffusion'
    })

  } catch (error) {
    console.error('Error generating image prompt:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Image generation API ready',
    endpoints: {
      generate: 'POST /api/generate-image',
      params: {
        prompt: 'string (required)',
        style: 'string (optional)',
        width: 'number (optional, default: 1920)',
        height: 'number (optional, default: 1080)'
      }
    }
  })
}