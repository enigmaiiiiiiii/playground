# IP地址转换函数

## ipv4适用

```c++
#include <arpa/inet.h>
in_addr_t inet_addr(const char* strptr);
```

- 将192.160.0.100转换为3232235620, 并返回

```c++
#include <arpa/inet.h>
int inet_aton(const char* cp, struct in_addr* inp) 
```

- 将192.160.0.100转换为3232235620, 结果存放在inp指向的结构中
- 成功返回1， 失败返回0

```c++
#include <arpa/inet.h>
char* inet_ntoa(struct in_addr in);  // 将10进制整数转换为192.168.0.100
```

## ipv4和ipv6都适用

```c++
#include <arpa/inet.h>
int inet_pton(int af, const char* src void* dst)
```
- 将src表示的字符串ip地址存储在dst指向的内存中
-  p to n 的含义(presentation format) to (network format)
- 成功返回1，失败返回0, 并设置[[errno]]
- 参数
  - af: 地址族参数 [[地址族类参数取值]]
  - src: 点分十进制字符串表示的ip地址, 或16进制表示的IPv6地址
  - dst: 
- 因此需要协议类型参数

```c++
const char* inet_ntop(int af, const void* src, char* dst socklen_t cnt)
```
- 执行前面函数相反的转换，前三各参数一致，最后一个参数指定目标存储单元的大小