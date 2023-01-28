# 字节序转换函数

```c++
#include <netinet/in.h>
unsigned long int htonl(unsigned long int hostlong);
unsigned short int htons(unsigned short int hostshort );
unsigned long int ntohl(unsigned long int netlong);
unsigned short int ntohs(unsigned short int netshort );
// host to network long 长整型主机字节序转化网络字节序
```

- htons: 主机字节序转网络字节序

- `/etc/resolv.conf`文件存放[[DNS]]服务器的ip地址
- `/etc/hosts`存放目标主机名及其对应的IP地址

[[判断机器字节序]]