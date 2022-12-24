# signal()

- 接收到信号`signum`时调用`handler`指向的函数
- 相当于定义了一个在进程执行过程中，接收到指定信号的动作
- signal() 无法只查询信号设置而不改变信号设置

```c
#include <signal.h>
typedef void (*sighandler_t)(int);  // 函数指针声明
sighandler_t signal(int signum, sighandler_t handler);
```

- 信号句柄
  - 是一个sighandler_t, 表示一个[函数指针](c++_function_pointer.md)
  - 指向的函数的形参是表示信号值的int参数
  - 实参是进程接收到的信号
  - 指向的函数返回类型为void
- signal()返回前一个信号句柄; 发生错误时, 返回SIG_ERR, 设置errno
- 所以signal()的返回值可以再次作为signal()的参数
- 参数
  - signum : 信号类型 
  - handler取值
    - SIG_IGN: 忽略该信号
    - SIG_DFL: 采用默认动作
    - [[信号句柄]]
  - 头文件中handler取值的定义  
  
  ```c
  #define SIG_ERR (void (*)())-1
  #define SIG_DFL (void (*)())0
  #define SIG_IGN (void (*)())1
  ```
    
- 函数原型

```c
#include <signal.h>
void (*signal(int signo, void (*func)(int)))(int);
// 函数名(*signal(int signo, void (*func)(int)))
```