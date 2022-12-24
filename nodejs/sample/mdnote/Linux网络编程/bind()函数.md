# bind函数

```c++
#include <sys/types.h>
#include <sys/socket.h>
int bind(int sockfd,const struct sockaddr* addr, socklen_t addrlen);
```

- bind函数将[addr](socket地址结构体.md)所指的socket地址分配给未命名的[sockfd](Linux_Socket_API_socket()函数.md)
- 成功返回0 
- 失败返回-1, 并设置[[errno]]
  - EACCES: 被绑定的地址是受保护的地址
  - EADDRINUSE, 被绑定的地址正在使用中

- 参数
  - sockfd: socket文件描述符, 
  - [addr](socket地址结构体.md):地址指针
  - addrlen: 地址长度

