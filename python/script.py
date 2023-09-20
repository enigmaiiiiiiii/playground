import matplotlib.pyplot as plt
import numpy as np

# Define control points
control_points = np.array([[0, 0], [1, 2], [3, 1], [4, 3]])

# Create a Bézier curve function
def bezier(t, control_points):
    n = len(control_points) - 1
    result = 0
    for i, point in enumerate(control_points):
        result += (
            point
            * np.math.comb(n, i)
            * ((1 - t) ** (n - i))
            * (t ** i)
        )
    return result

# Generate points on the Bézier curve
t_values = np.linspace(0, 1, 100)
curve_points = [bezier(t, control_points) for t in t_values]

# Extract x and y coordinates for plotting
x_values, y_values = zip(*curve_points)

# Plot the Bézier curve
plt.plot(x_values, y_values)
plt.scatter(*zip(*control_points), color='red', label='Control Points')
plt.title('Bézier Curve')
plt.legend()
plt.grid(True)
plt.axis('equal')  # Ensure equal aspect ratio
plt.show()

