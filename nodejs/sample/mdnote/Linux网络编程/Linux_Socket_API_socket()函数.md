# socket函数


```c++
#include <sys/types.h>
#include <sys/socket.h>
int socket(int domain, int type, int protocol);
```

-  用于创建socket
- 成功返回[[socket]][[Linux_File_Descriptor]],  失败返回-1
  
## 参数

- domain：使用的底层[协议族](地址族类参数取值.md)(ipv4,ipv6)
- type: 服务类型参数，取值
  - SOCK_STREAM: 提供有序的、可靠的、双向的、基于连接的字节流。 可能支持带外数据传输机制
  - SOCK_DGRAM: 支持数据报，最大长度的不可靠消息
  - SOCK_RAW: ip协议的数据报接口
- protocol: 再选择一个议，通常为0