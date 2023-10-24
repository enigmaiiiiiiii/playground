#include "iostream"
#include "foo.h"

using namespace std;

// quick sort
int main() {
  int a = 5;
  int b = 3;
  int ans1 = add(a, b);
  int ans2 = sub(a, b);
  cout << "a + b = " << ans1 << endl;
  cout << "a - b = " << ans2 << endl;

  return 0;
}
