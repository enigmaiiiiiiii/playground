# fork()

```c
#include <sys/types.h>
#include <unistd.h>

pid_t  fork(void);
```

- 创建子进程
- 原程序以fork()函数出现的行为分界
  - fork之前为父进程执行
  - fork之后父子进程同时执行
- fork()调用失败的两个主要原因 
  - 系统中有过多进程 
  - 实际用户id的进程数超过系统限制
- fork()用途  
  - 父进程复制自己, 父子进程执行不同的代码段. 常见于网络服务器, 父进程等待请求，客户端请求到达，父进程调用fork, 子处理请求，父进程继续等待 
  - 一个进程要执行一个不同的程序，常见于shell
- 返回值
  - 父进程返回子进程的process id
  - 子进程返回0
  
## 进程id

```c++
#include <sys/types.h>
#include <unistd.h>

pid_t getpid(void);
pid_t getppid(void);
```

- getpid()返回调用者id
- getppid()返回父进程id，如果创建该进程的父进程已经终止，则返回回收这个子进程的id