# socket地址

- 四种socket地址结构体
  - sockaddr_in: TCP/IP协议族, 用于IPv4 
  - sockaddr_in6: TCP/IP协议族，用于IPv6
  - sockaddr_un:UNIX本地协议族
  - sockaddr: 通用地址结构体

[[IPv4地址结构体]]

[[IPv6地址结构体]]

[[UNIX本地socket地址结构体]]

[[通用socket地址结构体]]

- 以ipv4为例  

```c
struct sockaddr_in address;  // 声明address为sockaddr_in结构体
address.sin_family = AF_INET;  // 设置地址族协议
inet_pton(AF_INET, ip, &address.sin_addr);  // 设置ipv4地址
address.sin_port = htons(port);  // 设置端口
```