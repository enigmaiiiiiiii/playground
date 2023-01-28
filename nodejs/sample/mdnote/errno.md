# ERRNO

```c++
#include <errno.h>
```
- `#define errno (*__errno_location ())`
- `errno -l` 列出`errno`的取值列表以及含义
-  用来表示系统调用函数发生错误时，发生了什么错误
- 返回类型为int
- 永远不会设置为0
- 函数调用成功也可设置errno值

## 含义

- EINPROGRESS :  