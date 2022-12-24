# readv和writev

- 分散读和聚集写入fd

```c
#include <sys/uio.h>

ssize_t readv(int fd, const struct iovec *iov, int iovcnt);

ssize_t writev(int fd, const struct iovec *iov, int iovcnt);

ssize_t preadv(int fd, const struct iovec *iov, int iovcnt,
               off_t offset);

ssize_t pwritev(int fd, const struct iovec *iov, int iovcnt,
                off_t offset);

ssize_t preadv2(int fd, const struct iovec *iov, int iovcnt,
                off_t offset, int flags);

ssize_t pwritev2(int fd, const struct iovec *iov, int iovcnt,
                 off_t offset, int flags);
```

- iovec结构体包含两个成员
  - `void *iov_base;` 缓冲的开始地址
  - `size_t iov_len;` 缓冲长度

```c
struct iovec{
  void *iov_base;  /* starting address of buffer */
  size_t iov_len;  /* size of buffer */
}
```

- 参数
  - fd: 被读写的文件描述符
  - iovec: 用来完成分散读写的结构体
  - iovcnt: 带读写的iovec结构体个数(最大索引 + 1)
- 返回值
  - writev函数将分散的数据按顺序：`iov[0], iov[1]...iov[iovcnt - 1]` 聚集输出到fd关联的文件, 返回输出的字节总数
  - readv函数将fd关联文件的数据按相同顺序散布到缓冲区中, 返回读到的字节总数

## example

```c
char *str0 = "hello ";
char *str1 = "world\n";
struct iovec iov[2];
ssize_t nwritten;

iov[0].iov_base = str0;
iov[0].iov_len = strlen(str0);
iov[1].iov_base = str1;
iov[1].iov_len = strlen(str1);

nwritten = writev(STDOUT_FILENO, iov, 2);
```