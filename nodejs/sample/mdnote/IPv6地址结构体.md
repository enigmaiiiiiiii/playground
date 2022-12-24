# 用于IPv6

- sin6_family
- sin6_port
- sin6_flowinfo
- sin6_addr
- sin6_scope_id
    
```c++
struct sockaddr_in6
{
  sa_family_t sin6_family;
  u_int16_t sin6_port;  // 端口号，网络字节序
  u_int32_t sin6_flowinfo;  // 流信息
  struct in6_addr sin6_addr;
  u_int32_t sin6_scope_id;
};

struct in6_addr
{
  unsigned char sa_addr[16];
};
```