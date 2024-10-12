import os
from PIL import Image, ImageFilter, ImageDraw



# Paths
cwd = os.getcwd()
input_folder = os.path.join(cwd, "body_parts")
output_folder = os.path.join(cwd, "results")

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Tolerance value
tolerance = 40

def is_close_to_white(pixel, tolerance):
    """Check if a pixel is close to white within a given tolerance."""
    r, g, b = pixel[:3]  # Extract RGB values
    return all(255 - tolerance <= value <= 255 for value in (r, g, b))

def apply_black_blur_to_borders(img, blur_radius=3):
    """Apply a black blur to the borders between transparent and non-transparent areas."""
    # Create an alpha mask
    alpha_mask = img.split()[3]
    
    # Create a new image for the blur effect
    blur_img = Image.new('RGBA', img.size, (0, 0, 0, 0))
    
    # Find edges in the alpha mask
    edges = alpha_mask.filter(ImageFilter.FIND_EDGES)
    
    # Apply Gaussian blur to the edges
    blurred_edges = edges.filter(ImageFilter.GaussianBlur(blur_radius))
    
    # Use the blurred edges as an alpha mask for the black color
    blur_img.putalpha(blurred_edges)
    
    # Composite the original image with the blur effect
    return Image.alpha_composite(img, blur_img)

# Process each image in the input folder
for filename in os.listdir(input_folder):
    if filename.endswith((".png", ".jpg")):
        img_path = os.path.join(input_folder, filename)
        img = Image.open(img_path).convert("RGBA")

        # Apply existing white to transparent conversion
        data = img.getdata()
        new_data = []
        for item in data:
            if is_close_to_white(item, tolerance):
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
        img.putdata(new_data)

        # Apply black blur to borders
        img_with_blur = apply_black_blur_to_borders(img)

        # Save the image in the output folder
        output_path = os.path.join(output_folder, filename)
        img_with_blur.save(output_path, "PNG")

print("Processing complete. Images saved in", output_folder)