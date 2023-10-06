# CMakeLists.txt

# Set the minimum required version of CMake
CMAKE_MINIMUM_REQUIRED(VERSION 3.12)

# Define the project and specify its name
PROJECT(libfoo)

SET(LIBFOO_NAME "foo")
SET(LIBFOO_FILE_NAME "lib${LIBFOO_NAME}")
SET(INSTALL_DIR "$ENV{HOME}/Code/Tutorial/hello-cmake")

Message(STATUS "install dir: ${INSTALL_DIR}")

# Create a shared library from the source files
ADD_LIBRARY(${LIBFOO_FILE_NAME} SHARED add.cpp sub.cpp)

# Specify the public header files (if any)
TARGET_INCLUDE_DIRECTORIES(${LIBFOO_FILE_NAME} PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})

# Optionally, you can set the version of the library
SET_TARGET_PROPERTIES(${LIBFOO_FILE_NAME} PROPERTIES VERSION 1.0)

# Optionally, you can install the library and header files
INSTALL(TARGETS ${LIBFOO_FILE_NAME} DESTINATION ${INSTALL_DIR}/lib)
INSTALL(FILES math.h DESTINATION ${INSTALL_DIR}/include)

