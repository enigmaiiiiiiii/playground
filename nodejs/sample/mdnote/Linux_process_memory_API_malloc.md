# malloc()

```c++
#include <stdlib.h>

void *malloc(size_t size);
void free(void *ptr);
void *calloc(size_t nmemb, size_t size);
void *realloc(void *ptr, size_t size);
void *reallocarray(void *ptr, size_t nmemb, size_t size);
```

- 分配大小为size未初始化内存
- 分配成功返回指向分配内存的指针，如果size为0返回空指针
- 失败返回空指针并设置[[errno]]为ENOMEM