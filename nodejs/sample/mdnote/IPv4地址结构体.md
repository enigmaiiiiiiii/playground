# TCP/IP协议族专用socket地址结构体数据成员，用于IPv4

- sin_sinfamily: [地址族](地址族类参数取值.md), 类型sa_family_t
- sin_port: 端口号, 类型u_int16_t
- sin_addr: IPv4结构体, 类型[in_addr](IP地址转换函数.md)
    - IPv4地址结构体`in_addr` 
- 源码    

```c++
#include <sys/un.h>
struct sockaddr_in {
  sa_family_t sin_family;  // 地址族
  u_int16_t sin_port;  // 端口号， 网络字节序类型
  struct in_addr sin_addr;  // IPv4结构体
};
``` 
    
```c++
struct in_addr {
  u_int32_t s_addr;  // IPv4地址，要用网络字节序
};
```