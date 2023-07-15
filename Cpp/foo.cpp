#include <iostream>

using namespace std;

// quick sort
int main() {
    int a[10] = {1, 3, 5, 7, 9, 2, 4, 6, 8, 10};
    int i = 0, j = 9;
    int key = a[0];
    while (i < j) {
        while (i < j && a[j] >= key) {
            j--;
        }
        if (i < j) {
            a[i] = a[j];
            i++;
        }
        while (i < j && a[i] <= key) {
            i++;
        }
        if (i < j) {
            a[j] = a[i];
            j--;
        }
    }
}
