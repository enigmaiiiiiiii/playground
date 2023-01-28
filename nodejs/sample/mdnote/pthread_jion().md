# pthread_jion()

```c++
#include <pthread.h>
int pthread_join(pthread_t thread, void **retval)
```

-  等待线程thread完成, 若retval不为NULL, 则目标线程提供给pthread_exit()的值复制到retval指向的对象
- 所以相当于是阻塞等待
- 成功返回0， 失败返回错误数字
- 参数
  - thread: 
  - retval: 如果retval参数不为NULL，将退出状态拷贝到retval指向的地址