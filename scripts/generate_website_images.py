#!/usr/bin/env python3
"""
Generate all artistic images for HealthForge website using Gemini 2.5 Flash Image Preview
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

# Image descriptions for the website
IMAGES_TO_GENERATE = [
    {
        "name": "hero-background",
        "prompt": "Ultra-modern futuristic healthcare technology visualization, dark black background with bright electric cyan #00D4FF and vibrant purple #FF00FF neon nodes connected by flowing organic data streams that morph like liquid, photorealistic cinematic lighting with depth of field, minimal artistic design, 16:9 widescreen aspect ratio, sophisticated and elegant"
    },
    {
        "name": "stats-visualization",
        "prompt": "Abstract data visualization floating in dark purple gradient space, giant glowing holographic numbers and metrics in cyan and pink gradients with particle effects trailing off them, sophisticated charts and graphs with glass morphism effect, ultra minimal design with cinematic depth, artistic and elegant"
    },
    {
        "name": "service-digital",
        "prompt": "Interconnected digital healthcare services visualized as floating glass holographic interfaces with rounded corners, dark teal to purple gradient background, glowing UI elements in electric cyan and magenta, organic flowing connections between interfaces like neural pathways, photorealistic render with caustic lighting effects"
    },
    {
        "name": "service-growth",
        "prompt": "Growth marketing visualization with ascending light particle graphs that sparkle and flow upward, medical practice metrics transforming into golden success indicators, dark background with purple to pink gradient accents, minimal artistic style with bokeh effects, sophisticated and premium feel"
    },
    {
        "name": "service-intelligence",
        "prompt": "AI brain made of intricate glowing circuit patterns and neural networks analyzing flowing medical data streams, floating holographic displays showing real-time analytics dashboards, dark space background with cyan and emerald green accent lighting, ultra-modern minimal design with glass morphism elements"
    },
    {
        "name": "service-custom",
        "prompt": "Bespoke digital solutions visualized as customizable modular glass components floating and connecting in space, warm orange to magenta gradient accents on dark background, geometric shapes morphing and transforming with organic fluid motion, photorealistic quality with ray-traced reflections"
    },
    {
        "name": "gradient-organic",
        "prompt": "Abstract organic blob shapes with iridescent gradient colors transitioning smoothly from cyan to purple to pink to green, floating and morphing in dark space like liquid mercury, soft gaussian blur with bokeh effects, artistic minimal design perfect for website background overlay, ethereal and dreamy atmosphere"
    },
    {
        "name": "footer-network",
        "prompt": "Global network of interconnected healthcare facilities visualized as glowing nodes on a dark stylized globe, data streams flowing between locations with particle trails, teal to gray gradient atmosphere, minimal sophisticated design with subtle grid overlay, cinematic wide angle perspective"
    }
]

def generate_image(prompt, filename):
    """Generate a single image using Gemini 2.5 Flash Image Preview"""

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "HealthForge"
    }

    payload = {
        "model": "google/gemini-2.5-flash-image-preview",
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ]
    }

    try:
        print(f"   🔄 Calling API...")
        response = requests.post(API_URL, headers=headers, json=payload, timeout=60)

        if response.status_code == 200:
            data = response.json()
            message = data.get("choices", [{}])[0].get("message", {})

            if "images" in message:
                images = message["images"]
                if images and len(images) > 0:
                    image_data = images[0].get("image_url", {}).get("url", "")
                    if image_data.startswith("data:image"):
                        # Extract base64 data
                        base64_data = image_data.split(",")[1]
                        image_bytes = base64.b64decode(base64_data)

                        # Save to file
                        output_path = OUTPUT_DIR / f"{filename}.png"
                        output_path.write_bytes(image_bytes)

                        print(f"   ✅ Saved to: {output_path.name}")
                        print(f"   📏 Size: {len(image_bytes) / 1024:.2f} KB")
                        return True
                    else:
                        print("   ❌ Image data format not recognized")
            else:
                print("   ❌ No images in response")
                print(f"   Response: {message.get('content', 'No content')[:100]}")
        else:
            print(f"   ❌ API Error: {response.status_code}")
            print(f"   {response.text[:200]}")

    except requests.exceptions.Timeout:
        print("   ❌ Request timed out")
    except Exception as e:
        print(f"   ❌ Error: {str(e)}")

    return False

def main():
    """Generate all images for the website"""
    print("🎨 Generating Artistic Images for HealthForge Website")
    print("=" * 60)
    print(f"📁 Output directory: {OUTPUT_DIR}")
    print()

    success_count = 0
    total = len(IMAGES_TO_GENERATE)

    for i, image_spec in enumerate(IMAGES_TO_GENERATE, 1):
        name = image_spec["name"]
        prompt = image_spec["prompt"]

        print(f"[{i}/{total}] 🖼️  Generating: {name}")
        print(f"   📝 Prompt: {prompt[:80]}...")

        if generate_image(prompt, name):
            success_count += 1

        # Rate limiting - wait 2 seconds between requests
        if i < total:
            print("   ⏳ Waiting 2 seconds...")
            time.sleep(2)

        print()

    # Summary
    print("=" * 60)
    print(f"✨ Generation complete!")
    print(f"📊 Success rate: {success_count}/{total} images")

    if success_count == total:
        print("🎉 All images generated successfully!")
    elif success_count > 0:
        print("⚠️  Some images failed to generate. You may want to retry.")
    else:
        print("❌ No images were generated. Please check your API key and connection.")

if __name__ == "__main__":
    main()