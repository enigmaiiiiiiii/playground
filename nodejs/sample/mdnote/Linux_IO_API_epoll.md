# epoll

- 类似[poll()](Linux_IO_API_poll().md)函数, 监听多个文件描述符是否由可用的IO操作
- 核心epoll实例，是一个内核结构,用户空间可以认为是两个列表的容器
  - interest list: 事件列表
  - ready list : 就绪列表

## 创建和管理epoll实例

- [epoll_create](Linux_IO_API_epoll_create().md) : 创建epoll实例

- [epoll_ctl](Linux_IO_API_epoll_ctl().md) : 向事件列表注册或删除被监听的文件描述符

- [epoll_wait](Linux_IO_API_epoll_wait().md) : 阻塞等待IO事件

##  触发条件

- [电平触发和边缘触发](Linux_IO_API_epoll_triggered.md)

  