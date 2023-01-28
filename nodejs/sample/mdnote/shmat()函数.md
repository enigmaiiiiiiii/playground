# shmat()

```c
#include <sys/types.h>
#include <sys/shm.h>

void *shmat(int shmid, const void *shmaddr, int shmflg);
```

- 将shmid共享存储连接到调用进程的由shmaddr指定的地址空间
- shmaddr符合以下条件
  - shmaddr为NULL(通常设置为NULL): 由内核选择指定地址
  - shmaddr不为NULL，并且shmflg参数值为SHM_RND, 连接到的地址在向下取最近一个SHMLBA(低边界地址倍数)的倍数
  - shmaddr非NULL，且shmflg参数没有指定SHM_RND, 则连接到shmaddr指定的地址上