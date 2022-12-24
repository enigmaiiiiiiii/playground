# pipe()

#管道 

```c++
#include <unistd.h>

int pipe(int fd[2]);  // 创建管道文件描述符
```

- 实现父子进程间通信
- `pipe[0]`: 管道的read端
- `pipe[1]`: 管道的write端