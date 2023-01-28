# FIFO

```c
#include <sys/types.h>
#include <sys/stat.h>

int mkfifo(const char *pathname, mode_t mode);

#include <fcntl.h>           /* Definition of AT_* constants */
#include <sys/stat.h>

int mkfifoat(int dirfd, const char *pathname, mode_t mode);
```

- 用pathname创建一个特殊文件FIFO，并用[mode & ~umask](Linux_file_API_fd_open.md)指定权限
- 成功返回0; 失败返回-1,并设置errno
- FIFO实现不相关进程的通信, 不同于pipe能实现有共同祖先进程的进程间通信
- mkfifoat()函数中
  - 如果pathname是绝对路径, 则fd参数被忽略
  - 如果pathname是相对路径, 则fd参数是一个有效文件描述符,路径名和目录有关
  - 如果pathname是相对路径, 且fd参数是一个特殊值AT_FDCWD, 则路径名已当前目录开始