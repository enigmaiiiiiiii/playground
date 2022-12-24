# accept函数

```c++
#include <sys/types.h>
#include <sys/socket.h>

int accept(int sockfd, struct sockaddr *addr, socklen_t *addrlen, int flags)
```

- 服务器可以通过读写该socket与发送socket的客户端通信
- 调用成功返回 **新的[socket](Linux_Socket_API_socket()函数.md)文件描述符**, 失败返回-1

## 参数

- sockfd: 被[listen](Linux_socket_API_listen()函数.md)监听的[socket](Linux_Socket_API)文件描述符，非负整数
- addr: 指向[地址结构体](socket地址结构体.md) , 用来存储被接收连接的远端socket地址
- addrlen: 地址长度