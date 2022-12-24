# sem_unlink()

```c
include <semaphore.h>
int sem_unlink(const char *name);
```

- 删除信号量的名字, 如果没有打开的信号量的引用，则该信号量会被销毁, 否则将延迟到最后一个打开的引用关闭