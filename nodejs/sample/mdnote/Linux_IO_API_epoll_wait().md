# epoll_wait()

```c
#include <sys/epoll.h>

int epoll_wait(int epfd, struct epoll_event *events,
               int maxevents, int timeout);
int epoll_pwait(int epfd, struct epoll_event *events,
                int maxevents, int timeout,
                const sigset_t *sigmask);
```

- epoll_wait()如果检测到事件，就将所有就绪事件从内核事件表中复制到[event](Linux_IO_API_epoll_ctl().md#epoll_event结构体)参数中

> 与poll不同，epoll_wait通过将就绪事件存储在epoll_event结构中, 提高了应用程序索引就绪文件描述符的效率

- 调用成功，返回就绪的文件描述符个数, 等待时间timeout后没有就绪的文件描述符, 返回0, 调用失败返回-1
- 参数
  - [epfd](Linux_IO_API_epoll_create().md): epollfd事件表关联的文件描述符
  - events: 指向[epoll_event结构体](Linux_IO_API_epoll_ctl().md#epoll_event结构体)的指针
  - maxevents: 最大监听事件数, 或是events所指数组的维度
  - timeout: 监听最大时间
