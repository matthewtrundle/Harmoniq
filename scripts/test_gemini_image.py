#!/usr/bin/env python3
"""
Simple test of Gemini 2.5 Flash Image Preview
"""
import requests
import json
import base64
from pathlib import Path

# Use the working API key from the .env file
API_KEY = "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"
API_URL = "https://openrouter.ai/api/v1/chat/completions"

def test_image_generation():
    """Test direct API call to Gemini 2.5 Flash Image Preview"""

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "HealthForge"
    }

    # Simple test prompt
    prompt = "A futuristic healthcare technology interface with glowing cyan and purple neon accents on a dark background, ultra-modern minimal artistic style"

    payload = {
        "model": "google/gemini-2.5-flash-image-preview",
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ]
    }

    print("🧪 Testing Gemini 2.5 Flash Image Preview...")
    print(f"📝 Prompt: {prompt[:80]}...")
    print("-" * 60)

    try:
        response = requests.post(API_URL, headers=headers, json=payload, timeout=30)

        if response.status_code == 200:
            data = response.json()
            print("✅ API Response received!")

            # Check if image data is in response
            message = data.get("choices", [{}])[0].get("message", {})

            # Debug: Print the message structure
            print("\n📦 Response structure:")
            print(json.dumps(message, indent=2)[:500])

            # Check for images in different possible locations
            if "images" in message:
                print("\n🖼️  Found images in response!")
                images = message["images"]
                if images and len(images) > 0:
                    image_data = images[0].get("image_url", {}).get("url", "")
                    if image_data.startswith("data:image"):
                        # Extract base64 data
                        base64_data = image_data.split(",")[1]
                        image_bytes = base64.b64decode(base64_data)

                        # Save to file
                        output_path = Path("/Users/mattrundle/Documents/BetterPractice/public/images/ai/test-gemini.png")
                        output_path.parent.mkdir(parents=True, exist_ok=True)
                        output_path.write_bytes(image_bytes)

                        print(f"✅ Image saved to: {output_path}")
                        print(f"📏 Image size: {len(image_bytes) / 1024:.2f} KB")
                        return True
                    else:
                        print("❌ Image data format not recognized")
            else:
                print("\n❌ No images found in response")
                print("Response content:", message.get("content", "No content"))

        else:
            print(f"❌ API Error: {response.status_code}")
            print(f"Response: {response.text[:500]}")

    except requests.exceptions.Timeout:
        print("❌ Request timed out after 30 seconds")
    except Exception as e:
        print(f"❌ Error: {str(e)}")

    return False

if __name__ == "__main__":
    success = test_image_generation()
    if success:
        print("\n🎉 Image generation successful!")
    else:
        print("\n💡 Note: The API might be returning text instead of images.")
        print("   This could mean the image generation feature needs different parameters.")