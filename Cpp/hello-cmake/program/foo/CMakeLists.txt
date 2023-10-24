# Set the minimum required version of CMake
cmake_minimum_required(VERSION 3.12)

# Define the project and specify its name
project(libfoo)

set(LIBFOO_NAME "foo")
set(FOO_HEADER_FILES "${LIBFOO_NAME}.h")
set(INSTALL_DIR "$ENV{HOME}/Code/Tutorial/hello-cmake") # ~/Code/Tutorial/hello-cmake
set(FOO_PKG_CONFIG_FILE "${LIBFOO_NAME}.pc")

add_library(${LIBFOO_NAME} SHARED add.cpp sub.cpp)

# Optionally, you can set the version of the library
set_target_properties(${LIBFOO_NAME} PROPERTIES VERSION 1.0)

install(TARGETS ${LIBFOO_NAME} DESTINATION ${INSTALL_DIR}/lib)
install(TARGETS ${LIBFOO_NAME} DESTINATION /usr/local/lib)
install(FILES ./include/${FOO_HEADER_FILES} DESTINATION ${INSTALL_DIR}/include)
install(FILES ./include/${FOO_HEADER_FILES} DESTINATION /usr/local/include)
install(FILES ./${FOO_PKG_CONFIG_FILE} DESTINATION ${INSTALL_DIR}/lib/pkgconfig)

