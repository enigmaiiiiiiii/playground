# UNIX本地域协议族socket地址结构体数据成员

- `sin_family`: 类型sa_family_t , [地址族](地址族类参数取值.md)
- `sun_path[108]` : 类型char, 文件路径名

```c
#include <sys/un.h>
struct sockaddr_un
{
  sa_family_t sin_family;
  char sun_path[108];
}
```
