import colour

RGB = colour.read_image('./color-science/ACES2065-1_ColorChecker2014.exr')

colour.plotting.plot_RGB_chromaticities_in_chromaticity_diagram_CIE1931(
    RGB[::5, ::5, ...], colourspace='ACES2065-1', colourspaces=['sRGB']);

# Customising the scatter appearance, the dict is passed to
# the "matplotlib.pyplot.scatter" definition.
colour.plotting.plot_RGB_chromaticities_in_chromaticity_diagram_CIE1931(
    RGB[::5, ::5, ...], colourspace='ACES2065-1', colourspaces=['sRGB'],
    scatter_kwargs={'c': 'k', 'marker': '+'});
