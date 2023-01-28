# connect

```c++
#include <sys/types.h>
#include <sys/socket.h>

int connect(int sockfd, const struct sockaddr *serv_addr, socklen_t addrlen);
```

- 成功返回0，一旦成功, sockfd就唯一标识了这个连接，
- 失败返回-1，并设置[[errno]]
  -  ECONNREFUSED 目标端口不存在，连接被拒绝
  - ETIMEDOUT连接超时

## 参数

- sockfd: [socket文件描述符](Linux_Socket_API_socket()函数.md)(一个非负整数)
- serv_addr: [[socket地址结构体]], 表示请求连接的地址
- addrlen: 指定地址长度

## 连接非阻塞socket

- 如果socket处于非阻塞模式, 那么连接不能马上建立时，会返回-1 
- errno设置为EINPROGERSS
- 应用程序使用[poll或select](IO多路转接.md)来判断文件描述符何时可写，可写时,连接完成