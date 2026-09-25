import os
import math
from PIL import Image, ImageDraw, ImageFilter
import numpy as np

os.makedirs('public/images', exist_ok=True)
os.makedirs('public/icons', exist_ok=True)

print("Starting art generation...")

# Helper to create smooth color gradients
def create_linear_gradient(width, height, color1, color2, direction='vertical'):
    base = Image.new('RGBA', (width, height), color1)
    top = Image.new('RGBA', (width, height), color2)
    mask = Image.new('L', (width, height))
    mask_data = []
    for y in range(height):
        for x in range(width):
            if direction == 'vertical':
                val = int(255 * (y / height))
            elif direction == 'horizontal':
                val = int(255 * (x / width))
            else: # diagonal
                val = int(255 * ((x + y) / (width + height)))
            mask_data.append(val)
    mask.putdata(mask_data)
    base.paste(top, (0, 0), mask)
    return base

# 1. Hero Landscape (1920 x 1080)
def generate_hero():
    w, h = 1440, 810
    sky = create_linear_gradient(w, h, (198, 222, 238, 255), (242, 240, 228, 255), 'vertical')
    draw = ImageDraw.Draw(sky)
    
    # Distant Mountains
    mountains = [
        [(0, 480), (180, 360), (380, 440), (560, 320), (740, 410), (920, 290), (1100, 380), (1280, 330), (1440, 420), (1440, 810), (0, 810)],
        [(0, 520), (220, 410), (450, 490), (680, 390), (880, 460), (1120, 380), (1350, 440), (1440, 490), (1440, 810), (0, 810)]
    ]
    draw.polygon(mountains[0], fill=(132, 160, 148, 255))
    draw.polygon(mountains[1], fill=(86, 122, 106, 255))
    
    # Forest Valley Midground
    draw.polygon([(0, 560), (300, 530), (600, 570), (900, 530), (1200, 550), (1440, 540), (1440, 810), (0, 810)], fill=(42, 82, 60, 255))
    
    # River / Lake
    draw.polygon([(350, 810), (520, 640), (680, 620), (820, 640), (1050, 810)], fill=(120, 168, 185, 255))
    
    # Futuristic Solarpunk Nuclear Plant & Containment Dome
    cx, cy = 980, 530
    draw.ellipse([cx - 90, cy - 90, cx + 90, cy + 90], fill=(240, 238, 232, 255), outline=(197, 155, 39, 255), width=3)
    draw.rectangle([cx - 90, cy, cx + 90, cy + 90], fill=(232, 230, 222, 255))
    draw.line([cx - 90, cy + 90, cx + 90, cy + 90], fill=(197, 155, 39, 255), width=3)
    
    # Natural Cooling Tower / Garden integration
    tx, ty = 1140, 490
    draw.polygon([(tx-40, ty+130), (tx-25, ty), (tx+25, ty), (tx+40, ty+130)], fill=(230, 228, 220, 255), outline=(130, 150, 140, 255), width=2)
    # Subtle clean vapor
    draw.ellipse([tx - 35, ty - 45, tx + 35, ty + 10], fill=(255, 255, 255, 120))
    
    # Foreground Foliage & Trees
    draw.polygon([(0, 680), (220, 640), (450, 690), (400, 810), (0, 810)], fill=(22, 54, 38, 255))
    draw.polygon([(950, 720), (1180, 680), (1440, 700), (1440, 810), (950, 810)], fill=(18, 46, 32, 255))
    
    sky = sky.convert('RGB')
    sky.save('public/images/hero-landscape.jpg', quality=82, optimize=True)
    print("Saved hero-landscape.jpg")

# 2. Solarpunk Living Room Interior (1200 x 900)
def generate_interior():
    w, h = 960, 720
    base = create_linear_gradient(w, h, (200, 220, 235, 255), (245, 240, 225, 255), 'vertical')
    draw = ImageDraw.Draw(base)
    
    # Exterior City Horizon through panoramic window
    draw.polygon([(0, 450), (250, 400), (500, 430), (750, 390), (960, 420), (960, 720), (0, 720)], fill=(75, 120, 95, 255))
    # City towers with green terraces
    for x in range(120, 840, 70):
        th = np.random.randint(220, 360)
        draw.rectangle([x, th, x + 45, 450], fill=(210, 218, 212, 255), outline=(160, 180, 170, 255), width=1)
        # Foliage balcony bands
        draw.line([x, th + 25, x + 45, th + 25], fill=(50, 110, 70, 255), width=3)
        draw.line([x, th + 55, x + 45, th + 55], fill=(50, 110, 70, 255), width=3)
        
    # Large Floor-to-Ceiling Window Frame
    draw.rectangle([0, 0, w, 30], fill=(30, 45, 38, 255)) # Top
    draw.rectangle([0, 0, 35, h], fill=(30, 45, 38, 255)) # Left
    draw.rectangle([w - 35, 0, w, h], fill=(30, 45, 38, 255)) # Right
    draw.rectangle([0, h - 160, w, h], fill=(225, 215, 195, 255)) # Warm wooden floor
    draw.line([w * 0.48, 30, w * 0.48, h - 160], fill=(45, 60, 52, 255), width=8) # Vertical mullion
    
    # Interior Furniture & Plants
    # Lush indoor Monstera plant
    px, py = 110, h - 210
    draw.ellipse([px - 40, py - 60, px + 40, py + 20], fill=(28, 74, 46, 255))
    draw.ellipse([px - 60, py - 30, px + 10, py + 40], fill=(38, 92, 58, 255))
    draw.ellipse([px - 10, py - 40, px + 60, py + 30], fill=(22, 60, 38, 255))
    # Elegant terracotta planter
    draw.polygon([(px - 25, py + 30), (px + 25, py + 30), (px + 18, py + 90), (px - 18, py + 90)], fill=(185, 105, 75, 255))
    
    # Lounge chair / human scale element
    cx = 720
    draw.ellipse([cx - 70, h - 220, cx + 70, h - 120], fill=(195, 180, 160, 255))
    draw.rounded_rectangle([cx - 50, h - 270, cx + 50, h - 180], radius=15, fill=(180, 165, 145, 255))
    
    base = base.convert('RGB')
    base.save('public/images/interior-solarpunk.jpg', quality=82, optimize=True)
    print("Saved interior-solarpunk.jpg")

# 3. Nuclear Process Station Pipeline (1200 x 700)
def generate_pipeline():
    w, h = 960, 560
    base = create_linear_gradient(w, h, (246, 244, 238, 255), (232, 228, 218, 255), 'vertical')
    draw = ImageDraw.Draw(base)
    
    # Architectural containment building
    draw.rounded_rectangle([80, 140, 320, 440], radius=20, fill=(240, 238, 230, 255), outline=(130, 150, 140, 255), width=2)
    draw.ellipse([120, 80, 280, 200], fill=(240, 238, 230, 255), outline=(130, 150, 140, 255), width=2)
    draw.rectangle([120, 140, 280, 200], fill=(240, 238, 230, 255))
    
    # Reactor Core inside (visual glow)
    draw.rounded_rectangle([160, 260, 240, 400], radius=8, fill=(28, 62, 46, 255), outline=(197, 155, 39, 255), width=3)
    draw.ellipse([180, 310, 220, 350], fill=(75, 145, 106, 180))
    
    # Steam Generator & Piping
    draw.line([240, 300, 380, 300], fill=(197, 155, 39, 255), width=8) # High-pressure primary pipe
    draw.rounded_rectangle([380, 180, 460, 420], radius=12, fill=(225, 222, 212, 255), outline=(130, 150, 140, 255), width=2)
    
    # Steam line to Turbine Hall
    draw.line([460, 220, 600, 220], fill=(120, 168, 195, 255), width=10) # Steam pipe
    # Turbine Hall Building
    draw.rounded_rectangle([600, 200, 880, 440], radius=10, fill=(244, 242, 236, 255), outline=(130, 150, 140, 255), width=2)
    # Turbine & Generator units
    draw.ellipse([640, 270, 720, 370], fill=(110, 130, 120, 255), outline=(197, 155, 39, 255), width=3)
    draw.rectangle([730, 280, 840, 360], fill=(60, 95, 75, 255), outline=(197, 155, 39, 255), width=2)
    
    # Grid Pylons & clean connection
    draw.line([840, 320, 920, 240], fill=(197, 155, 39, 255), width=3)
    draw.polygon([(910, 240), (930, 240), (935, 420), (905, 420)], fill=(70, 85, 78, 255))
    
    base = base.convert('RGB')
    base.save('public/images/plant-pipeline.jpg', quality=82, optimize=True)
    print("Saved plant-pipeline.jpg")

# 4. Environmental Trio 1: Mountains & Clean Water (800 x 600)
def generate_mountains():
    w, h = 640, 480
    base = create_linear_gradient(w, h, (175, 208, 230, 255), (235, 242, 240, 255), 'vertical')
    draw = ImageDraw.Draw(base)
    # Snow-capped peaks
    draw.polygon([(0, 300), (140, 120), (280, 260), (420, 90), (560, 240), (640, 160), (640, 480), (0, 480)], fill=(120, 145, 160, 255))
    draw.polygon([(140, 120), (180, 170), (130, 190), (100, 160)], fill=(255, 255, 255, 255))
    draw.polygon([(420, 90), (460, 150), (410, 170), (380, 140)], fill=(255, 255, 255, 255))
    # Pine forest foothills
    draw.polygon([(0, 320), (180, 280), (360, 330), (520, 290), (640, 310), (640, 480), (0, 480)], fill=(32, 68, 48, 255))
    # Crystal glacial lake
    draw.rectangle([0, 360, w, h], fill=(90, 155, 175, 255))
    
    base = base.convert('RGB')
    base.save('public/images/env-mountains.jpg', quality=82, optimize=True)
    print("Saved env-mountains.jpg")

# 5. Environmental Trio 2: Pristine Forest River (800 x 600)
def generate_forest():
    w, h = 640, 480
    base = create_linear_gradient(w, h, (210, 230, 220, 255), (140, 185, 160, 255), 'vertical')
    draw = ImageDraw.Draw(base)
    # Dense conifer silhouettes
    for x in range(0, w, 24):
        th = np.random.randint(80, 240)
        draw.polygon([(x, th), (x + 18, 360), (x - 18, 360)], fill=(18, 52, 34, 255))
    # River winding through mossy banks
    draw.polygon([(180, 480), (280, 350), (360, 350), (480, 480)], fill=(110, 170, 160, 255))
    
    base = base.convert('RGB')
    base.save('public/images/env-forest.jpg', quality=82, optimize=True)
    print("Saved env-forest.jpg")

# 6. Environmental Trio 3: Preserves Natural Habitats & Wildlife (800 x 600)
def generate_wildlife():
    w, h = 640, 480
    base = create_linear_gradient(w, h, (240, 230, 205, 255), (185, 215, 190, 255), 'vertical')
    draw = ImageDraw.Draw(base)
    # Forest meadow
    draw.ellipse([-80, 260, 450, 520], fill=(62, 118, 78, 255))
    draw.ellipse([250, 280, 750, 520], fill=(48, 98, 64, 255))
    
    # Wildlife silhouette (deer / stag in golden morning mist)
    sx, sy = 340, 310
    draw.ellipse([sx - 20, sy - 15, sx + 20, sy + 15], fill=(70, 45, 30, 255)) # Body
    draw.ellipse([sx + 15, sy - 30, sx + 30, sy - 10], fill=(70, 45, 30, 255)) # Neck & head
    draw.line([sx - 12, sy + 10, sx - 16, sy + 50], fill=(70, 45, 30, 255), width=3) # Legs
    draw.line([sx + 10, sy + 10, sx + 14, sy + 50], fill=(70, 45, 30, 255), width=3)
    # Antlers
    draw.line([sx + 24, sy - 28, sx + 32, sy - 48], fill=(70, 45, 30, 255), width=2)
    draw.line([sx + 30, sy - 40, sx + 38, sy - 44], fill=(70, 45, 30, 255), width=2)
    
    base = base.convert('RGB')
    base.save('public/images/env-wildlife.jpg', quality=82, optimize=True)
    print("Saved env-wildlife.jpg")

# 7. Future Golden Sunset (1600 x 800)
def generate_sunset():
    w, h = 1200, 600
    base = create_linear_gradient(w, h, (75, 45, 80, 255), (245, 175, 75, 255), 'vertical')
    draw = ImageDraw.Draw(base)
    # Golden sun low on the horizon
    draw.ellipse([w*0.5 - 70, 240, w*0.5 + 70, 380], fill=(255, 245, 200, 255))
    # Distant Solarpunk skyline & nuclear clean domes
    draw.polygon([(0, 360), (220, 320), (380, 350), (520, 310), (680, 340), (840, 300), (1020, 330), (1200, 350), (1200, 600), (0, 600)], fill=(50, 32, 45, 255))
    
    # Sunset reflection in water
    draw.rectangle([0, 390, w, h], fill=(160, 95, 70, 255))
    draw.polygon([(w*0.4, 390), (w*0.6, 390), (w*0.75, 600), (w*0.25, 600)], fill=(245, 180, 90, 200))
    
    base = base.convert('RGB')
    base.save('public/images/future-sunset.jpg', quality=82, optimize=True)
    print("Saved future-sunset.jpg")

generate_hero()
generate_interior()
generate_pipeline()
generate_mountains()
generate_forest()
generate_wildlife()
generate_sunset()
print("All graphic art successfully generated!")
