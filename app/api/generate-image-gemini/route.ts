import { NextRequest, NextResponse } from 'next/server'

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions'

export async function POST(request: NextRequest) {
  try {
    const { prompt, style = 'photorealistic', width = 1920, height = 1080 } = await request.json()

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: 'Prompt is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'API key not configured' },
        { status: 500 }
      )
    }

    // Enhanced prompt for better image generation
    const enhancedPrompt = `Create a ${style} image: ${prompt}.
    Requirements:
    - High quality, professional ${width}x${height} resolution
    - Modern healthcare/medical technology aesthetic
    - Clean, trustworthy design
    - Use blue, teal, and white color scheme
    - Professional and innovative feel`

    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'HealthTech Forge Image Generator',
      },
      body: JSON.stringify({
        model: 'google/gemini-flash-1.5',
        messages: [
          {
            role: 'system',
            content: 'You are an expert at creating image generation prompts for healthcare technology websites.'
          },
          {
            role: 'user',
            content: enhancedPrompt
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('OpenRouter API error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to generate image prompt' },
        { status: response.status }
      )
    }

    const data = await response.json()
    const generatedPrompt = data.choices[0]?.message?.content || enhancedPrompt

    // For actual image generation, you would call an image generation API here
    // For now, we'll return the enhanced prompt
    return NextResponse.json({
      success: true,
      prompt: generatedPrompt,
      originalPrompt: prompt,
      style: style,
      dimensions: { width, height },
      message: 'Enhanced prompt generated successfully'
    })

  } catch (error) {
    console.error('Image generation error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}