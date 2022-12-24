# 信号量上锁

```c
#include <semaphore.h>

int sem_wait(sem_t *sem);
int sem_trywait(sem_t *sem);
int sem_timedwait(sem_t *sem, const struct timespec *abs_timeout);
```

- 使sem指向的信号量减1
- 如果信号量的值大于0，则信号量减1,
- 如果信号量的值等于0，sem_wait()阻塞, sem_trywait()返回-1