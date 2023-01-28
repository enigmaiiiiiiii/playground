# 通用socket地址数据成员

## 新结构体

- `sa_family`:
- `__ss_align`:
- `__ss_padding[128-sizeof(__ss_align)`:

##  旧结构体
- `sin_family`: 类型sa_family_t 
- `sa_data[14]` : 类型char, 地址值

```c
#include <bits/socket.h>
struct sockaddr
{
  sa_family_t sa_family;  // 地址族类型sa_family_t
  char sa_data[14];  // 
}
```

