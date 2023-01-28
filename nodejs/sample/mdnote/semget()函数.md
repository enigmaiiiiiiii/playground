# semget()

```c
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/sem.h>

int semget(key_t key, int nsems, int semflg);
```

- 返回一个与用[[ftok()函数]]创建的key**关联信号量集合的标识符
- `nsems`: 集合中信号量个数
  - 引用现有集合时，nsems设置为0 
- `semflg`: 对key的操作方式并设置权限,  权限设置与[open()函数](Linux_file_API_fd_open.md)相同
    - `IPC_CREAT`: 如果不存在与key相连的信号量集合, 则创建一个
    - `IPC_EXCL`: 若已存在与KEY相连的信号量集合, 调用失败
- 当创建一个新信号量集合时, 对[[semid_ds结构体]]的成员赋值
  - cuid成员和uid成员设置为调用进程的[有效用户id](Linux_File_ID.md) 
  - cgid成员和gid成员设置为调用进程的[有效用户组id](Linux_File_ID.md) 
  - sem_otime设置为0
  - sem_ctime设置为当前时间
  - sem_nsems设置为`nsems`