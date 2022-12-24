# SO_LINGER

- 控制[close()函数](Linux_Socket_API_close()函数.md)在关闭TCP连接时的行为, 默认调用close()时立即返回，TCP负责把该socket对应的缓冲区内容发送
- 需要设置so_linger选项时，需要给参数[optval](socket选项.md#^socketoptval)传递一个结构体

```c
#include <sys/socket.h>
struct linger {
  int l_onoff;
  int l_linger;
}
```

- l_onoff等于0时，close()用默认行为关闭socket
- l_onoff不为0时
  - l_linger为0，close调用立即返回，并丢弃缓冲区内容, 发送复位报文段
  - l_linger大于0
    - socket非阻塞，close立即返回
    - socket阻塞，缓冲区有残留数据, close等待l_linger时间直到发送完缓冲区数据并得到对方确认，
    - 如果在l_linger时间内未发送完数据，得到了对方确认，close返回-1，并设置errno
