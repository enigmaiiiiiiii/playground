# sem_close()

```c
#include <semaphore.h>

int sem_close(sem_t *sem);
```

- 关闭sem信号量，允许系统释放与此信号量相关的资源
- 所有打开的命名信号量在进程终止时自动关闭
- 信号量的值不会受影响