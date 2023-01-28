# pthread_exit()

```c++
#include <pthread.h>
void pthread_exit(void *retval);
```

- 终止线程并将想要保存的值存入retval指向的地址,
- retval的值可供调用pthread_join()的其他线程使用
- 当线程终止时，线程共享的资源不会被释放
- pthread_exit()和return, 通过return返回会回收所有资源
- pthread_exit将值保存到retval中