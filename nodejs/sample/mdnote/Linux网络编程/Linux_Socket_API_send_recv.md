# 数据收发

```c++
#include <sys/types.h>
#include <sys/socket.h>

ssize_t send(int sockfd, void *buf, size_t len, int flags);
ssize_t recv(int sockfd, const void *buf, size_t len, int flags);
```

- recv()
  - 读取sockfd上的数据，
  - 返回值：实际读取到的长度，若返回0，表示对方已经关闭连接,失败返回-1，设置[[errno]]
  - 通常只用在[connected socket](Linux_Socket_API_connect()函数.md)
- send()
  - 向sockfd写入数据  
  - 返回值：实际写入数据的长度, 失败返回-1，设置[[errno]]

## 参数

- sockfd: [socket文件描述符](Linux_Socket_API_socket()函数.md)
- buf: 缓冲区的位置
- len: 缓冲区的大小
- flags: 数据收发额外控制参数，通常设置为0, 其他取值

    | 选项名 | 含义| send | recv |
    | -- | -- | -- | -- |
    | MSG_COMFIRM |  | Y | N |
    |MSG_DONTROUT||Y|N|
    |MSG_DONTWAIT||Y|Y|
    |MSG_MORE||Y|N|
    |MSG_WAITTALL|read操作仅在读取到指定数量的字节才返回|N|Y|
    |MSG_PEEK|窥探read缓存中的数据|N|Y|
    |MSG_OOB |发送或接收紧急数据|Y|Y|
    |MSG_NOSIGNAL||Y|N|