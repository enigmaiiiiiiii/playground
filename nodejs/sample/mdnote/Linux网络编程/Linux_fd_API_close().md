# 关闭文件描述符

```c++
#include <unistd.h>
int close(int fd);
```

- 将fd的**引用计数**-1，当fd的引用计数为0时，才是真正关闭连接
- 成功返回0， 失败返回-1，同时设置[[errno]]
- 多进程程序中，fork()函数默认将父进程中打开的socket的引用计数加1， 

## 一定要关闭的连接用shoutdown()

```c++
#include <sys/socket.h>
int shutdown(int sockfd, int howto);
```

- howto参数取值
  - SHUT_RD: 关闭读操作, 接受缓冲区的内容全部丢弃
  - SHUT_WR: 关闭写操作, 发送缓冲区的会在socket真正关闭之前全部发送出去
  - SHUT_RDWR: 同时关闭读和写

## 参数

- fd: 带关闭的socket