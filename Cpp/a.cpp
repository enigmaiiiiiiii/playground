#include <iostream>
#include <opencv4/opencv.hpp>

int main() {
  cv:Mat image = cv::imread("test.jpg", cv::IMREAD_COLOR);
  if (image.empty()) {
    std::cerr << "Error: Ubable to load image." << std::endl;
    return -1;
  }
}

