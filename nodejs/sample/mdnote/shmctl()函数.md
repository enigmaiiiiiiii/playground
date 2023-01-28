# shmctl()函数

```c
#include <sys/ipc.h>
#include <sys/shm.h>

int shmctl(int shmid, int cmd, struct shmid_ds *buf);
```

- 在 shmid 中给出标识符的 System V 共享内存段上执行 cmd 指定的控制操作。
- cmd取值
  - IPC_STAT
  - IPC_SET
  - IPC_RMID
  - SHM_LOCK
  - SHM_UNLOCK
