# 创建消息队列

```c
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/msg.h>

int msgget(key_t key, int msgflg);
```

- 用ftok创建的key创建或打开一个消息队列的标识符(identifier), 消息队列的关联结构[[msqid_ds结构体]]
- 成功返回消息队列标识符, 失败返回-1， 并设置errno
- key等于IPC_PRIVATE时或不存在等于key的消息队列时，创建一个新消息队列 
- 如果创建了新的消息队列，msgflg设置队列权限与[[Linux_file_API_fd_open]]设置文件访问权限方式类似
- 参数
  - key：消息队列的键 
  - msgflg创建队列时的取值 
    - IPC_CREAT: 如果不存在与key相连的消息队列, 则创建一个
    - IPC_EXCL: 若已存在与KEY相连的消息队列, 调用失败