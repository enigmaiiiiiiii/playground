# sem_init()

```c
#include <semaphore.h>
int sem_init(sem_t *sem, int pshared, int value);
```
- 创建一个未命名的信号量
- 创建的信号量初始化在sem指针指向的地址
- pshared：是否在多个进程中使用信号量, 设置为0，表示否
- value: 设置信号量的初始值