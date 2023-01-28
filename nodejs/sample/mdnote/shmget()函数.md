# shmget()

```c
#include <sys/ipc.h>
#include <sys/shm.h>

int shmget(key_t key, size_t size, int shmflg);
```

- 用[[ftok()函数]]生成的key等到共享内存的标识符
- size表示共享存储段的长度
- shmflg
- 当创建一个新共享存储时，初始化[[shmid_ds结构体]]的下列成员
  - 初始化[[ipc_perm结构体]]uid，gid, 设置权限
  - shm_lpid, shm_nattach, shm_atime, shm_dtime都设置为0
  - shm_ctime设置为当前时间
  - shm_segsz设置为请求的size