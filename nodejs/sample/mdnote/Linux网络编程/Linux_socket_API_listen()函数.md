# 监听socket

```c++
#include <sys/socket.h>
int listen(int sockfd, int backlog);
```

- 监听队列超过backlog，服务器将不受理新的客户连接, 客户端将收到ECONNREFUSED
- 成功返回0, 失败返回-1
- 将引用的socket标记为被动socket

## 参数

- sockfd:被监听的[socket](Linux_Socket_API_socket()函数.md)
- backlog: 提示内核监听队列最大长度
  - 如果队列已满，连接请求达到时, 客户端会受到一个带有ECONNREFUSED的指示
  - 并发连接数
  