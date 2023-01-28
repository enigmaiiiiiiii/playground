# 进程调度

- nice值表示进程的优先级，nice值越低，优先级越高

```c
#include <unistd.h>

int nice(int inc);
```

- 将inc添加到调用线程的nice值
- 调用成功返回返回新的nice值, 调用失败返回-1， 并设置errno
- 调用成功也可能返回-1，为了确定-1是正常返回，还是调用出错，可以在调用之前将errno值设置为0，检查调用返回-1后errno值是否为0