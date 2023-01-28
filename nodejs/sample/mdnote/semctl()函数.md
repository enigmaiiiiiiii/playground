# semctl()

```c
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/sem.h>

int semctl(int semid, int semnum, int cmd, .../*union semun arg*/);
```

- 对由 semid 标识的 System V 信号量集合[[semid_ds结构体]]或该集合的第 semnum 个[[信号量结构体]]执行 cmd 指定的控制操作。
- arg(第四个)参数是可选的，是否有第四个参数取决于参数cmd的值
- arg(第四个)参数类型是semun, 是一个[联合体](c++_union.md)

  ```c
  union semun {
    int              val;    /* Value for SETVAL */
    struct semid_ds *buf;    /* Buffer for IPC_STAT, IPC_SET */
    unsigned short  *array;  /* Array for GETALL, SETALL */
    struct seminfo  *__buf;  /* Buffer for IPC_INFO
                                           (Linux-specific) */
  };
  ```
  
- cmd取值 
  - IPC_STAT: 返回[[semid_ds结构体]],存储在arg.buf中
  - IPC_RMID: 从系统中删除信号量集合
  - IPC_SET: 将`arg.buf`中的值,设置由semid表示的[[semid_ds结构体]]中的sem_perm.uid,sem_perm.gid, sem_perm.mode字段
  - IPC_INFO:
  - GETVAL:
  - SETVAL: 设置[[信号量结构体]]中`semval`的值
  - GETPID:
  - GETNCNT:
  - GETZCNT:
  - GETALL:取该集合中所有信号量值, 存储在arg.array中
  - SETALL:
  