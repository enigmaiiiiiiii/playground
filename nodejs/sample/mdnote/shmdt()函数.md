# shmdt()函数

```c
#include <sys/types.h>
#include <sys/shm.h>

int shmdt(const void *shmaddr);
```

- 对共享存储操作结束时，调用shmdt与该段分离