# pthread_create()

```c++
#include <pthread.h>

int pthread_create(pthread_t *thread, 
                   const thread_attr *attr,
                   void *(*start_routine*)(void *),
                   void *arg);
```

- 成功返回0， 失败返回常数
- 参数：
  - thread: 成功返回之前，将创建的线程id存入thread参数
  - attr: 指向thread_attr的指针, 设置线程的attribute
  - start_routine: 需要线程执行的动作
  - arg: 传递给start_routine的唯一参数



## pthread_detach()

```c++
#include <pthread.h>
int pthread_detach(pthread_t thread);
```

- 将进程thread设置成可分离的
- 一个可分离的进程终止后，系统会自动回收它的资源，而不需要其他进程去join
- 参数thread: 进程id

[[线程属性]]