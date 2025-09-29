#!/usr/bin/env python3
"""
Generate images for HealthTech Forge website using Gemini Image SDK
"""

import sys
import os
sys.path.append('/Users/mattrundle/Documents/image-generator-tool')

from gemini_image_sdk import ImageGenerator, Config, APIConfig, OutputConfig
import asyncio
from pathlib import Path

# API Configuration
API_KEY = "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"
OUTPUT_DIR = Path("/Users/mattrundle/Documents/BetterPractice/public/images/generated")

# Create output directory if it doesn't exist
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Image prompts for different sections of the website
IMAGE_PROMPTS = {
    # Hero Section Images
    "hero-main": {
        "prompt": "Ultra-modern medical practice office with holographic displays showing patient data analytics, doctors using AI-powered tablets, clean minimalist design with blue and white color scheme, photorealistic, premium healthcare technology, 8K quality",
        "width": 1920,
        "height": 1080
    },
    "hero-bg-pattern": {
        "prompt": "Abstract geometric pattern with medical DNA helix integrated with digital circuit board design, gradient from deep blue to teal, translucent layers, technology meets healthcare, subtle and professional",
        "width": 1920,
        "height": 1080
    },

    # Service Tier Images
    "service-tier-1": {
        "prompt": "Modern medical practice reception area with digital check-in kiosks, patient portal on tablets, clean waiting room with large displays showing health information, professional healthcare setting",
        "width": 800,
        "height": 600
    },
    "service-tier-2": {
        "prompt": "Doctor showing patient education content on large touchscreen, interactive medical diagrams, engaged patient learning about treatment, modern examination room with advanced technology",
        "width": 800,
        "height": 600
    },
    "service-tier-3": {
        "prompt": "Healthcare analytics dashboard on multiple screens showing patient flow, revenue metrics, appointment data visualizations, modern medical office command center, data-driven healthcare",
        "width": 800,
        "height": 600
    },
    "service-tier-4": {
        "prompt": "Multi-location medical practice headquarters with video conference rooms connecting different clinics, centralized monitoring systems, enterprise healthcare technology infrastructure",
        "width": 800,
        "height": 600
    },
    "service-tier-5": {
        "prompt": "Futuristic medical AI laboratory with holographic patient models, machine learning visualization, cutting-edge healthcare innovation center, advanced medical technology",
        "width": 800,
        "height": 600
    },

    # Case Study Images
    "case-study-mental-health": {
        "prompt": "Peaceful modern therapy office with soft lighting, comfortable seating, digital mood tracking displays, calming environment with technology seamlessly integrated",
        "width": 1200,
        "height": 800
    },
    "case-study-pediatric": {
        "prompt": "Colorful pediatric clinic with interactive digital walls for children, playful yet professional medical environment, parent-friendly technology stations",
        "width": 1200,
        "height": 800
    },
    "case-study-multi-location": {
        "prompt": "Network of connected medical facilities shown on digital map, unified healthcare system visualization, multiple clinic locations with data flowing between them",
        "width": 1200,
        "height": 800
    },

    # About/Team Images
    "team-collaboration": {
        "prompt": "Diverse healthcare technology team in modern office, developers and medical professionals working together, collaborative workspace with whiteboards showing system architecture",
        "width": 1600,
        "height": 900
    },

    # Technology Images
    "hipaa-security": {
        "prompt": "Digital security shield protecting medical data, HIPAA compliance visualization with lock symbols and encrypted data streams, trust and security in healthcare",
        "width": 800,
        "height": 600
    },
    "ai-healthcare": {
        "prompt": "Artificial intelligence brain network connected to medical symbols, machine learning in healthcare visualization, neural networks analyzing patient data",
        "width": 800,
        "height": 600
    },

    # Background Patterns
    "gradient-mesh-1": {
        "prompt": "Smooth gradient mesh background transitioning from deep ocean blue to bright teal, with subtle geometric medical cross patterns, abstract and modern",
        "width": 1920,
        "height": 1080
    },
    "gradient-mesh-2": {
        "prompt": "Purple to blue gradient with floating glass morphism elements, healthcare icons subtly integrated, premium and sophisticated background",
        "width": 1920,
        "height": 1080
    }
}

async def generate_all_images():
    """Generate all images for the website"""

    # Configure the image generator
    config = Config(
        api=APIConfig(
            key=API_KEY,
            base_url="https://openrouter.ai/api/v1",
            model="google/gemini-flash-1.5"
        ),
        output=OutputConfig(
            base_dir=str(OUTPUT_DIR),
            format="webp",
            quality=95
        )
    )

    generator = ImageGenerator(config)

    print("🎨 Starting image generation for HealthTech Forge...")
    print(f"📁 Output directory: {OUTPUT_DIR}")
    print("-" * 50)

    for image_name, specs in IMAGE_PROMPTS.items():
        print(f"\n🖼️  Generating: {image_name}")
        print(f"   Prompt: {specs['prompt'][:100]}...")

        try:
            result = await generator.generate_single(
                prompt=specs['prompt'],
                filename=f"{image_name}.webp",
                width=specs.get('width', 1920),
                height=specs.get('height', 1080)
            )

            if result.success:
                print(f"   ✅ Success! Saved to: {result.path}")
            else:
                print(f"   ❌ Failed: {result.error}")

        except Exception as e:
            print(f"   ❌ Error: {str(e)}")

    print("\n" + "=" * 50)
    print("✨ Image generation complete!")
    print(f"📁 Images saved in: {OUTPUT_DIR}")

if __name__ == "__main__":
    # Run the async function
    asyncio.run(generate_all_images())