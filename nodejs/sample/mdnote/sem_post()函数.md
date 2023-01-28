# 信号量解锁

```c
#include <semaphore.h>
int sem_post(sem_t *sem);
```

- 使sem指向的信号量加1
- 调用成功使信号量的值大于0， 则在sem_wait()调用中阻塞的另一个进程被唤醒并在次使信号量减1