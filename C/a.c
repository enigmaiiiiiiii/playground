#include <stdio.h>

int main(void) {
    // Red text and blue background
    printf("\x1b[31m\x1b[44mHello, World]\n");
    printf("\x1b[38;2;255;100;0mTrue Color Text!\x1b[0m"); // 24-bit colors
}
