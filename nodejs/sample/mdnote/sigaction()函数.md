#  sigaction()

```c
#include <signal.h>

int sigaction(int signum, const struct sigaction *act,
              struct sigaction *oldact);
```

- sigaction()比signal()功能更强，也更复杂
- 用于更改进程在接收到特定信号时采取的操作
- 成功返回0，失败返回-1， 并设置[[errno]]
- 参数
  - `signum`: 可以是任意有效信号，除了SIGKILL和SIGSTOP
  - `act`: sigaction结构体指针，信号signum的新操作
  - `oldact`: 如果前一个动作不为NULL， 则将前一个动作保存在oldact中
  
## [[sigaction结构体]]