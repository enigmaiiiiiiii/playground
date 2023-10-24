cmake_minimum_required(VERSION 3.20)

project(hello)

# pkg_check_modules(OPENCV REQUIRED opencv4)

# message("pkgconfig info: ${PKG_CONFIG_FOUND}")
# message("pkg config path: $ENV{PKG_CONFIG_PATH}")
# message("foo include dirs: ${FOO_INCLUDE_DIRS}")
# message("opencv: ${OPENCV_INCLUDE_DIRS}")

add_executable(hello main.cpp)

target_link_libraries(hello foo)

