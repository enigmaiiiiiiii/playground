# daemon

- daemon理解为服务进程
- 安静的运行在后台为监视其他进程或为其提供服务

观察daemon

- 使用[pstree](Linux_pstree.md)观察运行在机器上的进程

## 创建Daemon的方式

- init进程调用[fork()](Linux_Process_fork().md)创建子进程
- 一个进程调用fork()后, 立刻调用exit(), fork创建的子进程成为孤儿进程, init进程会收养孤儿进程

## daemon分类

> 依据启动与管理方式分类

- stand alone
  - daemon启动后，常驻在内存中，一直占用系统资源
  - 响应速度很快
  - 比如全球信息网WWW的daemon(httpd)
- super daemon
  - 有daemon的inet或xinet服务唤起
  - super daemon有两种处理模式
   - multi-threaded: 同时处理
   - single-threaded: 一个一个处理

> 比如当网络服务要求来的时候
> - 该要求会先送至xinet这个服务
> - 然后xinet根据该网络要求的送来的[[报文]]的内容
> - 将报文送个实际运作的服务，这时服务才启动
> - 最常见的就是ftp网络服务

- 以工作状态区分，daemon有两种模式
  - signal-control: 通过讯号来管理，只要有需求，就去处理
  - interval-control: 每隔一段时间主动去执行某项工作