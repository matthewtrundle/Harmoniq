#!/usr/bin/env python3
"""
Generate actual images for HealthForge website using Gemini 2.5 Flash Image Preview
"""

import sys
import asyncio
from pathlib import Path
import json
import time

# Add the image generator SDK to path
sys.path.append('/Users/mattrundle/Documents/image-generator-tool')

from gemini_image_sdk import ImageGenerator, Config, APIConfig
from gemini_image_sdk.config import OutputConfig

# Image descriptions for the website
IMAGES_TO_GENERATE = {
    # Hero section
    "hero-neural": {
        "prompt": "Ultra-modern futuristic healthcare technology neural network visualization, dark black background with bright cyan #00D4FF and purple #FF00FF neon nodes connected by glowing data streams, photorealistic cinematic lighting, minimal artistic design, organic flowing shapes morphing like liquid, 16:9 aspect ratio",
        "size": (1920, 1080)
    },

    # Stats section
    "stats-data": {
        "prompt": "Abstract data visualization floating in dark space, giant glowing numbers and metrics in cyan and pink gradients, holographic charts and graphs with particle effects, dark purple to black gradient background, ultra minimal design, cinematic depth of field",
        "size": (1920, 1080)
    },

    # Services section backgrounds
    "service-digital": {
        "prompt": "Interconnected digital healthcare services as floating holographic interfaces, dark teal gradient background, glowing UI elements in cyan and purple, organic flowing connections between interfaces, photorealistic render, minimal sophisticated aesthetic",
        "size": (800, 600)
    },

    "service-marketing": {
        "prompt": "Growth marketing visualization with ascending light particle graphs, medical practice metrics transforming into success indicators, dark background with purple to pink gradient accents, minimal artistic style, cinematic lighting",
        "size": (800, 600)
    },

    "service-intelligence": {
        "prompt": "AI brain made of glowing circuit patterns analyzing medical data streams, floating holographic displays showing analytics, dark space background with cyan and green accent lighting, ultra-modern minimal design",
        "size": (800, 600)
    },

    "service-custom": {
        "prompt": "Bespoke digital solutions visualized as customizable modular components floating in space, orange to red gradient accents on dark background, geometric shapes morphing and connecting, photorealistic quality",
        "size": (800, 600)
    },

    # Background textures
    "gradient-organic-1": {
        "prompt": "Organic flowing gradient shapes morphing like liquid mercury, cyan to purple to pink color transitions, dark black background, abstract artistic interpretation, ultra high quality blur effect, seamless pattern",
        "size": (1920, 1080)
    },

    "gradient-organic-2": {
        "prompt": "Abstract organic blob shapes with gradient colors transitioning from teal to indigo to purple, floating in dark space, soft gaussian blur, artistic minimal design, perfect for website background",
        "size": (1920, 1080)
    }
}

async def generate_images():
    """Generate all images for the website"""
    print("🎨 Generating Artistic Images for HealthForge")
    print("=" * 60)

    # Configuration using the API key from image-generator-tool
    config = Config(
        api=APIConfig(
            key="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",
            base_url="https://openrouter.ai/api/v1",
            model="google/gemini-2.5-flash-image-preview",
            headers={
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "HealthForge"
            }
        ),
        output=OutputConfig(
            base_dir="/Users/mattrundle/Documents/BetterPractice/public/images/ai",
            format="webp",
            quality=95
        ),
        logging_enabled=True
    )

    # Create output directory
    Path(config.output.base_dir).mkdir(parents=True, exist_ok=True)

    async with ImageGenerator(config) as generator:
        for image_name, specs in IMAGES_TO_GENERATE.items():
            print(f"\n🖼️  Generating: {image_name}")
            print(f"   Prompt: {specs['prompt'][:80]}...")

            try:
                # Update output config for specific size
                generator.config.output.width = specs['size'][0]
                generator.config.output.height = specs['size'][1]

                # Generate the image
                result = await generator.generate_single(
                    prompt=specs['prompt'],
                    filename=f"{image_name}.webp"
                )

                if result.success:
                    print(f"   ✅ Success! Saved to: {result.path}")
                    print(f"   ⏱️  Generation time: {result.duration_ms}ms")
                else:
                    print(f"   ❌ Failed: {result.error}")

                # Rate limiting - wait between requests
                await asyncio.sleep(2)

            except Exception as e:
                print(f"   ❌ Error: {str(e)}")

    print("\n" + "=" * 60)
    print("✨ Image generation complete!")
    print(f"📁 Images saved to: {config.output.base_dir}")

async def test_single_image():
    """Test with a single image first"""
    print("🧪 Testing single image generation...")

    config = Config(
        api=APIConfig(
            key="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",
            base_url="https://openrouter.ai/api/v1",
            model="google/gemini-2.5-flash-image-preview"
        ),
        output=OutputConfig(
            base_dir="/Users/mattrundle/Documents/BetterPractice/public/images/ai",
            format="webp",
            width=1920,
            height=1080,
            quality=95
        ),
        logging_enabled=True
    )

    Path(config.output.base_dir).mkdir(parents=True, exist_ok=True)

    async with ImageGenerator(config) as generator:
        result = await generator.generate_single(
            prompt="Futuristic healthcare technology with glowing cyan and purple neon accents on dark background, ultra-modern minimal artistic style",
            filename="test-image.webp"
        )

        if result.success:
            print(f"✅ Test successful! Image saved to: {result.path}")
            return True
        else:
            print(f"❌ Test failed: {result.error}")
            return False

if __name__ == "__main__":
    # Run test first
    print("Starting image generation for HealthForge website...")
    print("-" * 60)

    # Test with single image
    success = asyncio.run(test_single_image())

    if success:
        print("\nTest successful! Generating all images...")
        # Generate all images
        asyncio.run(generate_images())
    else:
        print("\nTest failed. Please check your API key and connection.")