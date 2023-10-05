#include <stdio.h>
#include "foo.h" 

int main() { 
  int a = 1;
  int b = 2;
  int ans1 = add(a, b);
  int ans2 = sub(a, b);
  printf("result add: %d\n", ans1);
  printf("result sub: %d\n", ans2);
  return 0; 
}
