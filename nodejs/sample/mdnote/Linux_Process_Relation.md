# 进程关系

## 进程组

```c++
#include <sys/types.h>
#include <unistd.h>

int setpgid(pid_t pid, pid_t pgid);
pid_t getpgid(pid_t pid);

pid_t getpgrp(void);                 /* POSIX.1 version */
pid_t getpgrp(pid_t pid);            /* BSD version */

int setpgrp(void);                   /* System V version */
int setpgrp(pid_t pid, pid_t pgid);  /* BSD version */
```

- 组ID通常是进程组长的进程id
- `getpgid()`获取进程组ID
- `setpgid()`设置进程组ID
- `getpgrd()` 等价于 `getpgid(0, 0)`
- 很少检索调用者之外的进程组id，getpgrd()是获取进程组id的首选

## 终端登录

- 系统自举，内核创建进程id为1的进程，也就是init
- 对每个允许登录终端的设备init调用fork, 生成子进程
- 子进程则exec getty程序
- getty对终端设备调用open，以读，写方式将终端打开，文件描述符0，1，2被设置到该设备
- getty调用login，login获得用户名后执行后多项工作
- 用户正确登录，login就将完成如下工作:
  - 将当前工作目录更改为该用户的其实目录（chdir) 
  - 调用[chown](Linux_Command_Chown.md)更改该终端的所有权，使登陆用户成为它的所有者
  - 将对该终端设备的访问权限改变成“用户读写”
  - 调用setgid及initgroups设置进程组ID
  - 用login得到的所有信息初始化环境：起始目录(HOME),shell(SHELL), 用户名(USER和LOGNAME)以及一个系统默认路径(PATH)
    [[环境变量]]
  - login进程更改为登录用户的用户ID并调用该用户的登录shell

## 会话 (session)

> 可能是shell命令proc1 | proc2 & proc3 | proc4 | proc5创建的会话

![[进程组和会话·.excalidraw]]

- 一个或多个进程组的集合

### setsid()

```c
#include <unistd.h>
pid_t setsid(void);
```

- 函数setsid()创建一个新会话
- 如果调用此函数的进程不是进程组组长, 则会创建一个新会话
  1. 该进程变成新会话的首进程，此时时新会话的中的唯一进程
  2. 该进程称为一个新进程组的组长，新进程组的id是调用进程的进程id
  3. 该进程**没有控制终端**

## 控制终端

- 一个会话可以有一个控制终端, 通常是终端设备(终端登录)或伪终端设备(网络登录情况下)
- 建立与控制终端连接的会话首进程被称为控制进程
- 一个会话中的几个进程组可被分为[[前台进程组]]以及一个或多个[[后台进程组]]
- 如果一个会话有一个控制终端，则他有一个前台进程组，其他进程组为后台进程组
- 无论何时键入终端的中断键(delete或ctrl+c), 都会将中断信号发送至[[前台进程组]]的所有进程组
- 无论何时键入终端的退出键，都会将推出信号发送至前台进程组的所有进程
- 如果终端接口检测到调制解调器断开，则将挂断信号发送至控制进程

## 作业控制

- 作业控制要求以下3种形式
  - 支持作业控制的shell
  - 内核中的终端驱动程序必须支持作业控制
  - 内核必须提供对某些作业控制信号的支持
- 作业是几个进程的合集

