# 设置信号mask

```c
#include <signal.h>
int sigprocmask(int how, const sigset_t *set, sigset_t *oset);
```

- 成功返回0，失败返回-1，设置[[errno]]
- 参数
  - `how`：如何对待信号集set, 
    - SIG_BLOCK：阻塞set所指信号集中的信号，即加到当前信号屏蔽中
    - SIG_UNBLOCK: 与SIG_BLOCK相反
    - SIG_SETMASK: 用set所之信号集作为进程的信号屏蔽
  - `*set` : [[sigset_t类型]] , 
  - `*oset` : [[sigset_t类型]], 如果不为NULL，则储存之前的信号掩码