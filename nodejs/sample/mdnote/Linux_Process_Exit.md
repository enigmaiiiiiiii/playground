# 进程终止

## 终止方式

- 五种正常终止
  1. 从main返回;
  2. 调用exit;
  3. 调用_exit()或_Exit;
  4. 最后一个线程从其启动例程返回
  5. 从最后一个线程调用pthread_exit
- 三种异常终止
  1. 调用abort
  2. 接到一个信号
  3. 最后一个线程的取消请求做出响应

## 退出函数
  
```c++
#include <stdlib.h>
void exit(int status);
void _Exit(int status);
#include <unistd.h>
void _exit(int status);
```


### exit()

- 进程终止, 将status & 0×FF返回到父进程的[wait()类函数](Linux_Process_Wait.md)的wstatus指针所指对象
- 大多数UNIX系统中是exit()是C库函数
- 如果退出进程是[会话](Linux_Process_Relation#会话(session))创建者，[controlling terminal](Linux_Process_Relation#控制终端) 是 session的controlling terminal, 则controlling terminal 向进程组中每个进程发送SIGHUP信号，并解除关联，允许由新的进程控制
- 父进程先于子进程终止，子进程会由init进程接管，init()可以是任意子进程的父进程
- 子进程先于父进程终止, 即产生僵尸进程
- 僵尸进程会占据一个slot， 当table被填满时，将不能创建新的进程

### _exit()函数

- 立即终止进程
- 大多数UNIX系统中是系统调用
- 关闭进程相关的文件描述符
- 这个进程的子进程被init()继承
- status & 0×FF返回到父进程作为退出状态，可被wait类函数收集
- 不调用任何atexit()或on_exit(3)注册的函数
- 不会刷新[stream](Linux_IO_Stream.md#标准流)

## atexit()

- 登记程序退出时调用的函数，最多登记32个
- exit会调用这些函数，调用顺序与登记顺序相反

![[C程序是如何启动和终止的.excalidraw]]

## abort()

- 立即终止程序而不执行,不执行atexit()注册的函数