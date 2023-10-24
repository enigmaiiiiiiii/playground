import colorspacious as cs

# Given hex color (in sRGB format)
given_color = "#FF5733"

# List of xterm colors in hex format
xterm_colors = [
]

def calculate_delta_e(color1, color2):
    # Convert colors to Lab color space
    color1_lab = cs.cspace_convert(cs.cspace("sRGB100"), color1, start={"name": "sRGB1"})
    color2_lab = cs.cspace_convert(cs.cspace("sRGB100"), color2, start={"name": "sRGB1"})

    # Calculate Delta E using CIE76 formula
    delta_e = cs.cspace_deltaE(color1_lab, color2_lab, input_space="CIELab")

    return delta_e

# Find the most similar xterm color
closest_color = None
min_delta_e = float('inf')

for xterm_color in xterm_colors:
    delta_e = calculate_delta_e(given_color, xterm_color)
    if delta_e < min_delta_e:
        closest_color = xterm_color
        min_delta_e = delta_e

print(f"The most similar xterm color to {given_color} is {closest_color} with Delta E = {min_delta_e:.2f}")

