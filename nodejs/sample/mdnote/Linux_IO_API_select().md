# select()

- 监视文件描述符集合中是否有文件描述符可读，可写，发生异常

```c
#include <sys/time.h>
#include <sys/types.h>
#include <unistd.h>

int select(int nfds, fd_set *readfds, fd_set *writefds,
           fd_set *exceptfds, struct timeval *timeout);
```

- select()函数在timeout时间内保持阻塞, 直到：
  1. 其中有文件描述符满足条件
     - 对readfds中的一个描述符进行read操作不会阻塞
     - 对writefds中的一个描述符进行write操作不会阻塞
     - 对exceptfds中的一个描述符有一个未决异常条件
     - 对于读, 写, 异常条件，普通文件的文件描述符总是满足条件
  2. 被信号中断
- 成功返回满足条件文件描述符, timeout 返回0，失败返回-1 
- 退出时，文件描述符集合被适当修改，指示那些文件描述符更改了状态
- 所以循环调用select必须在调用之前初始换fd_set
- 多线程中，被监视的文件描述符被其他线程关闭，返回结果是不确定的

### 参数

- nfds : 文件描述符集合中，最大值加1, 表示要检查的最大文件描述符
- timeout: 等待时间长度, timeval结构体
  - NULL: 一直等待，捕捉到信号
- 被监视的文件描述符集合  
  - readfds: fd_set结构, 监视其中的文件描述符是否可读
  - writefds: fd_set结构，可写
  - exceptfds : fd_set结构, 异常 
  - 对于不需要监视的行为，可以将对应的文件描述符集合设置为NULL

### 文件描述符集合fd_set

- fd_set是一个文件描述符集合 
- 可以认为是由bit元素组成的数组
- 若fd_set中存在文件描述符fd，则`fd_set[fd] = 1`,不存在则`fd_set[fd]= 0`, 
- 使用前必须用`FD_ZERO()`初始化

```c
void FD_CLR(int fd, fd_set *set);  // 
int  FD_ISSET(int fd, fd_set *set);
void FD_SET(int fd, fd_set *set);  // 初始化文件描述符集合set
void FD_ZERO(fd_set *set);
```

- `FD_SET(fd, fdset)`向fdset中添加文件描述符fd
- `FD_CLR(fd, fdset)`将fd从fdset中清楚
- `FD_ISSET(fd, fdset)`判断fd是否在fdset中
- `FD_ZERO(fd, fdset)`初始化set为空集