# 悬挂信号

- 已发生，但因阻塞而未交付的信号
- sigpending() 可以查看这些信号

```c
#include <signal.h>

int sigpending(sigset_t *set);
```