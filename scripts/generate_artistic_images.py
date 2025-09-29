#!/usr/bin/env python3
"""
Generate artistic images for HealthTech Forge using OpenRouter API
"""

import requests
import json
import base64
from pathlib import Path
import time

# Configuration
API_KEY = "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"
API_URL = "https://openrouter.ai/api/v1/chat/completions"
OUTPUT_DIR = Path("/Users/mattrundle/Documents/BetterPractice/public/images/ai")

# Create output directory
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

def generate_image_prompt(description):
    """Generate an enhanced image prompt using Gemini"""

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "HealthTech Forge"
    }

    prompt = f"""Create a detailed image generation prompt for: {description}

    Requirements:
    - Ultra-modern, artistic style
    - Dark background with neon accents
    - Futuristic healthcare technology aesthetic
    - Photorealistic quality
    - Cinematic lighting
    - Include specific details about composition, colors, and mood
    - Make it visually striking and unique

    Return only the enhanced prompt, no explanations."""

    data = {
        "model": "google/gemini-flash-1.5",
        "messages": [
            {"role": "system", "content": "You are an expert at creating detailed, artistic image generation prompts."},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.8,
        "max_tokens": 500
    }

    try:
        response = requests.post(API_URL, headers=headers, json=data)
        if response.status_code == 200:
            result = response.json()
            return result['choices'][0]['message']['content']
        else:
            print(f"Error: {response.status_code} - {response.text}")
            return description
    except Exception as e:
        print(f"Error generating prompt: {e}")
        return description

# Image descriptions for the website
IMAGES_TO_GENERATE = {
    "hero-abstract": "Abstract neural network visualization with healthcare data flowing through glowing nodes, dark background with electric blue and purple neon lights, cinematic depth of field",

    "hero-dna": "Futuristic DNA double helix made of flowing digital data streams, holographic medical symbols floating around, dark space background with teal and magenta lighting",

    "service-ai": "AI brain made of circuit boards analyzing medical scans on floating holographic displays, dark tech laboratory environment, cyan and orange accent lighting",

    "service-analytics": "3D data visualization dashboard floating in space showing medical metrics, glowing charts and graphs, dark background with neon grid floor",

    "patient-portal": "Sleek futuristic medical interface on transparent glass screens, patient data flowing as light streams, minimalist dark environment with blue accent lighting",

    "digital-health": "Abstract representation of digital health transformation, geometric shapes morphing from analog to digital, dark gradient background with vibrant color accents",

    "medical-tech": "Robotic hand touching holographic human anatomy model, glowing medical data surrounding, dark clinical environment with purple and blue lighting",

    "practice-growth": "Ascending graph made of light particles showing practice growth, medical symbols transforming into success metrics, dark background with golden accent lights",

    "innovation-lab": "Futuristic medical research laboratory with floating AR displays, scientists working with holographic interfaces, dark environment with neon accent lighting",

    "network-connections": "Network of interconnected medical facilities visualized as glowing nodes on a dark globe, data streams flowing between locations, cinematic lighting"
}

def save_prompt_as_placeholder(name, prompt):
    """Save the prompt as a JSON file for reference"""
    json_path = OUTPUT_DIR / f"{name}.json"
    with open(json_path, 'w') as f:
        json.dump({
            "name": name,
            "prompt": prompt,
            "timestamp": time.time(),
            "status": "ready_for_generation"
        }, f, indent=2)
    print(f"✅ Saved prompt for {name}")

def main():
    print("🎨 Generating Artistic Image Prompts for HealthTech Forge")
    print("=" * 60)

    for image_name, description in IMAGES_TO_GENERATE.items():
        print(f"\n🖼️  Processing: {image_name}")
        print(f"   Description: {description[:80]}...")

        # Generate enhanced prompt
        enhanced_prompt = generate_image_prompt(description)
        print(f"   Enhanced: {enhanced_prompt[:80]}...")

        # Save the prompt
        save_prompt_as_placeholder(image_name, enhanced_prompt)

        # Rate limiting
        time.sleep(1)

    print("\n" + "=" * 60)
    print("✨ Prompt generation complete!")
    print(f"📁 Prompts saved to: {OUTPUT_DIR}")
    print("\n💡 Next steps:")
    print("1. Use these prompts with DALL-E 3, Midjourney, or Stable Diffusion")
    print("2. Or integrate with an image generation API")
    print("3. Place generated images in the public/images/ai directory")

if __name__ == "__main__":
    main()