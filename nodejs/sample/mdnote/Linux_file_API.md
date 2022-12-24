# 文件操作

[open函数](Linux_file_API_fd_open.md)

[fcntl()](Linux_fd_API_fcntl().md): 操作已打开的文件描述符

[查询文件状态](Linux_file_API_stat.md)

[inode](Linux_file_inode.md)

[文件访问权限](Linux_file_type_and_mode.md)



## 复制文件描述符

```c
#include <unistd.h>
int dup(int fd);
int dup2(int fd, int fd2);
```

- dup(fd)复制文件描述符fd, 返回的新文件描述符是可用的文件描述符最小值
- dup(fd1, fd2)复制文件描述符fd1到文件描述符fd2，fd1和fd2指向同一文件