# sem_op()

```c
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/sem.h>

int semop(int semid, struct sembuf *sops, size_t nsops);

int semtimedop(int semid, struct sembuf *sops, size_t nsops,
                      const struct timespec *timeout);
```

- 对semid表示的[[semid_ds结构体]],执行数组sops中的信号量操作, nsops表示数组长度，即数组中的操作数量
- sops是一个指针，指向一个由sembuf结构体构成的数组
- 成功返回值0，所有信号量操作都成功时才返回

## sembuf结构体 

  ```c
  struct sembuf {
    unsigned short sem_num;  /* semaphore number */
    short          sem_op;   /* semaphore operation */
    short          sem_flg;  /* operation flags */
  }
  ```
  
- flags 
  - IPC_NOWAIT : 设置则立即返回
  - SEM_UNDO:指定了SEM_UNDO的信号量有一个内部变量semadj与之相连，作用是进程死亡时调整信号量的值
- sem_op
  -  `>0`: 将此值加到[[信号量结构体]]的semval(信号量当前值), 如果指定了SEM_UNDO,系统将从该信号量的semval中减去sem_op
  -  `<0`: 表示要获取由该信号量控制的资源
  - `=0`：等待信号量变为0。信号量变为0表示信号量控制的所有资源均可用。若信号量已变为0，调用立即返回；否则未设置IPC_NOWAIT时，调用被阻塞