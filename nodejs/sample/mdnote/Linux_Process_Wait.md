#  wait() 和waitpid()

```c++
#include <sys/types.h>
#include <sys/wait.h>

pid_t wait(int *wstatus);
pid_t waitpid(pid_t pid, int *wstatus, int options);
```
  
- 函数waitpid()等待进程状态发生改变, 并允许系统回收与该子进程相关的资源
- 如果所有子进程还在运行, 则阻塞
- 如果一个子进程终止，正在等待父进程获取其终止状态，则取得该子进程的终止状态立即返回
- 没有任何子进程，立即出错返回
- 如果一个子进程终止, 而没有执行wait，将变成僵尸进程
- 僵尸进程会占据一个slot， 当table被填满时，将不能创建新的进程
- `wait(&wstatus)` 相当于`waitpid(-1, &wstatus, 0)`: 检测是否有已终止的子进程，如果有的话立即返回。返回已终止进程的pid，并将状态存储在wstatus中

## 返回值

- 成功返回子进程ID
- 若指定了WNOHANG参数且一个或多个子进程存在,且状态没有发生改变,则返回0
- 失败返回-1

## 参数

- wstatus
  - 待赋值的参数
  - 可以是空指针，表示不需要知道子进程是否为终止状态
  - 查看终止状态的宏, wstatus作为这些宏的参数
    - WIFEXITED(wstatus)：正常终止返回真
    - WIFSIGNALED(wstatus):  
    - WIFSTOPPED(wstatus): 
    - WEXITSTATUS(wstatus): 查看子进程穿个exit()的状态值
    - WTERMSIG(wstatus): 
    - WSTOPSIG(wstatus): 
- pid 取值
  -  < -1: 子进程的组id等于pid的绝对值
  - -1 : 等待任意子进程的状态发生变化 
  - 0: 等待与*调用waitpid()的进程的groupID*相等的子进程
  - > 0: 等待进程ID等于pid的子进程的状态发生变化
- options  
  - WNOHANG: 如果没有子进程退出，立即返回
  - WUNTRACED 
  - WCONTINUED