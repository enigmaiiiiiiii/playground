# memset()

```c++
#include <string.h>
void *memset(void *s, int c, size_t n);
```

- 用固定类型填充内存
- 用c填充s指向内存的前n个字节
- 返回指向s的指针
- 通常用来初始化内存