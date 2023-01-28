# poll()

```c
#icnlude <poll.h>

int poll(struct polldf *fdarray, nfds_t nfds, int timeout);
```

- 监听`fdarray`中的一个文件描述符准备好执行i/o
- 调用时阻塞，满足条件立即返回

### 参数

1. `fdarray[]`: polldf结构的数组
2. nfds: `fdarry[]`中元素个数
3. timeout : 等待时间
- polldf结构体成员
  - fd: 被检查的文件描述符
  - events: 关心的事件
  - revents: 由内核设置，用于说明发生了什么事件
  
  ```c
  struct pollfd{
    int fd;  // 文件描述符
    short events;  // 关心的事件
    short revents;  // 发生的事件
  }
  ```
  <table>
    <tr>
        <td>事件</td>
        <td>描述</td>
        <td>可作为events</td>
        <td>可作为revents</td>
    </tr>
    <tr>
        <td>POLLIN</td>
        <td>数据可读</td>
        <td align="center">y</td>
        <td align="center">y</td>
    </tr>
    <tr>
        <td>POLLRDANORM</td>
        <td>普通数据可读</td>
        <td align="center">y</td>
        <td align="center">y</td>
    </tr>
    <tr>
        <td>POLLRDBAND</td>
        <td>优先级带数据可读</td>
        <td align="center">y</td>
        <td align="center">y</td>
    </tr>
    <tr>
        <td>POLLPRI</td>
        <td>高优先级数据可读，如tcp带外数据</td>
        <td align="center">y</td>
        <td align="center">y</td>
    </tr>
    <tr>
        <td>POLLOUT</td>
        <td>数据可写</td>
        <td align="center">y</td>
        <td align="center">y</td>
    </tr>
    <tr>
        <td>POLLWRNORM</td>
        <td>普通数据可写</td>
        <td align="center">y</td>
        <td align="center">y</td>
    </tr>
    <tr>
        <td>POLLWRBAND</td>
        <td>优先级带数据可写</td>
        <td align="center">y</td>
        <td align="center">y</td>
    </tr>
    <tr>
        <td>POLLRDHUP</td>
        <td>TCP连接被对方关闭，或者对方关闭了写操作, 由gnu引入</td>
        <td align="center">y</td>
        <td align="center">y</td>
    </tr>
    <tr>
        <td>POLLERR</td>
        <td>错误</td>
        <td align="center">n</td>
        <td align="center">y</td>
    </tr>
    <tr>
        <td>POLLHUP</td>
        <td>挂起</td>
        <td align="center">n</td>
        <td align="center">y</td>
    </tr>
    <tr>
        <td>POLLNVAL</td>
        <td>文件描述符没有打开</td>
        <td align="center">n</td>
        <td align="center">y</td>
    </tr>
   </table>
  