import matplotlib.pyplot as plt
import numpy as np

# Wavelength range (usually in nanometers)
wavelengths = np.arange(300, 701, 1)

# Spectral sensitivity curves for S-cones, M-cones, and L-cones
s_cones = np.exp(
    -0.5 * ((wavelengths - 420) / 20) ** 2
)  # Example S-cone sensitivity curve
m_cones = np.exp(
    -0.5 * ((wavelengths - 534) / 45) ** 2
)  # Example M-cone sensitivity curve
l_cones = np.exp(
    -0.5 * ((wavelengths - 564) / 35) ** 2
)  # Example L-cone sensitivity curve

# Create a figure and axis
fig, ax = plt.subplots()

# Plot the spectral sensitivity curves
ax.plot(wavelengths, s_cones, label="S-cones", color="blue")
ax.plot(wavelengths, m_cones, label="M-cones", color="green")
ax.plot(wavelengths, l_cones, label="L-cones", color="red")

# Add labels and a legend
ax.set_xlabel("Wavelength (nm)")
ax.set_ylabel("Sensitivity")
ax.set_title("Spectral Sensitivity Curves of Cone Cells")
ax.legend()

vertical_line = ax.axvline(x=420, color="gray")
color_text = ax.annotate(
    "",
    xy=(450, 0.5),
    xytext=(500, 0.5),
    fontsize=12,
)

def update_line_and_text(x):
    vertical_line.set_xdata(x)
    color = (
        l_cones[np.where(wavelengths == x)][0].round(2),
        m_cones[np.where(wavelengths == x)][0].round(2),
        s_cones[np.where(wavelengths == x)][0].round(2),
    )
    color_text.set_text(f"Color: {color}")
    color_text.set_color(color)

for x in range(400, 701):
    update_line_and_text(x)
    plt.pause(0.1)

# Show the plot
plt.grid(True)
plt.show()
