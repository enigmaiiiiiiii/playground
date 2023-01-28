## 使用场景
  
1. 复用socket 
> 如果在已经处于 ESTABLISHED状态下的socket(一般由端口号和标志符区分）调用close(socket)（一般不会立即关闭, 会经历[TIME_WAIT](TCP状态转移.md)的过程）后想继续重用该socket：
 
 ```c
 int reuse = 1;
 setsockopt(s, SOL_SOCKET, SO_REUSEADDR, (const char*)&reuse, sizeof(int));
 ```
 
2. 如果要已经处于连接状态的soket在调用close(socket)后强制关闭，不经历TIME_WAIT的过程：

```c
int reuse=0;
setsockopt(s,SOL_SOCKET ,SO_REUSEADDR,(const char*)& reuse,sizeof(int));
```

3. 在send(),recv()过程中有时由于网络状况等原因，发收不能预期进行,而设置收发时限：

```c
int nNetTimeout=1000; // 1秒
// 发送时限
setsockopt(socket，SOL_S0CKET, SO_SNDTIMEO，(char *)&nNetTimeout,sizeof(int));
// 接收时限
setsockopt(socket，SOL_S0CKET, SO_RCVTIMEO，(char *)&nNetTimeout,sizeof(int));
```

4. 设置socket缓冲区
 >. 在send()的时候，返回的是实际发送出去的字节(同步)或发送到socket缓冲区的字节(异步),系统默认的状态发送和接收一次为8688字节(约为8.5K)；在实际的过程中发送数据和接收数据量比较大，可以设置socket缓冲区，而避免了send(),recv()不断的循环收发：
 
 ```c
 // 接收缓冲区
int nRecvBuf=32*1024; // 设置为32K
setsockopt(s,SOL_SOCKET,SO_RCVBUF,(const char*)&nRecvBuf,sizeof(int));
// 发送缓冲区
int nSendBuf=32*1024; // 设置为32K
setsockopt(s,SOL_SOCKET,SO_SNDBUF,(const char*)&nSendBuf,sizeof(int));
```

5. 如果在发送数据时，希望不经历由系统缓冲区到socket缓冲区的拷贝而影响程序的性能

```c
int nZero=0;
setsockopt(socket，SOL_SOCKET,SO_SNDBUF，(char *)&nZero,sizeof(int));
```

6. 同上在recv()完成上述功能(默认情况是将socket缓冲区的内容拷贝到系统缓冲区：

```text
int nZero=0;
setsockopt(socket，SOL_SOCKET,SO_RCVBUF，(char *)&nZero,sizeof(int));
```

7. 一般在发送UDP数据报的时候，希望该socket发送的数据具有广播特性：

```c
int bBroadcast = 1;
setsockopt(s, SOL_SOCKET, SO_BROADCAST, (const char*)&bBroadcast, sizeof(int));
```

8. 设置存活检测

```c
int opt = 1;
if (setsockopt (m_nSock, SOL_SOCKET, SO_KEEPALIVE, &opt, sizeof(int)) == -1)
{
    return 0;
}
```

9. 延迟接收, 
  > 实际上就是当接收到第一个数据之后，才会创建连接。对于像http这类非交互式的服务器，这个很有意义，可以防御空连接攻击。

```text
int val = 5;
setsockopt(fd, SOL_TCP, TCP_DEFER_ACCEPT, &val, sizeof(val));
```