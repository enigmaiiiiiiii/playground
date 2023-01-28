# 结构体sigevent

- 用来设置异步io完成时通知进程的方式

```c
#include <signal.h>

union sigval {          /* Data passed with notification */
  int     sival_int;         /* Integer value */
  void   *sival_ptr;         /* Pointer value */
};

struct sigevent {
  int          sigev_notify; /* Notification method */
  int          sigev_signo;  /* Notification signal */
  union sigval sigev_value;  /* Data passed with
                                notification */
  void       (*sigev_notify_function) (union sigval);
                   /* Function used for thread
                      notification (SIGEV_THREAD) */
  void        *sigev_notify_attributes;
                   /* Attributes for notification thread
                      (SIGEV_THREAD) */
  pid_t        sigev_notify_thread_id;
                     /* ID of thread to signal (SIGEV_THREAD_ID) */
};
```

## sigevent成员

- `int sigev_notify;` 通知方式
  - `SIGEV_NONE`: 不通知
  - `SIGEV_SIGNAL`: 发送sigev_signo中指定的信号
  - `SIGEV_THREAD`: 通过调用函数`sigev_notify_function`来通知进程，就像一个新线程的启动函数
  - `SIGEV_THREAD_ID`: 只在POSIX timers中使用
- `int sigev_signo;`
- `union sigval sigev_value;` 
- 函数指针`(*sigev_notify_function)(union sigval)`: 
  - sigev_notify参数设置为SIGEV_THREAD时，执行的函数
- `*sigev_notify_attributes`: 指向一个pthread_attr_t的结构体，定义新线程的特性
- `pid_t sigev_notify_thread_id;`
  
## sigval

- [[c++_union]]结构体