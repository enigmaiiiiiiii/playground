# execve()

```c++
#include <unistd.h>

extern char **environ;

int execve(const char *pathname, char *const argv[],
           char *const envp[]);
int execl(const char *pathname, const char *arg, ...
                /* (char  *) NULL */);
int execlp(const char *file, const char *arg, ...
                /* (char  *) NULL */);
int execle(const char *pathname, const char *arg, ...
           /*, (char *) NULL, char *const envp[] */);
int execv(const char *pathname, char *const argv[]);
int execvp(const char *file, char *const argv[]);
int execvpe(const char *file, char *const argv[],
            char *const envp[]);
int fexecve(int fd, char *const argv[], char *const envp[]);                       
```

- 只有execve是内核的系统调用，另外6个是库函数
- 以上7个函数统称为exec函数, fork创建的子进程需要调用exec函数执行另一个程序
- 前四个函数以路径名作为参数，后两个函数则取文件名作为参数, 最后一个以[[Linux_File_Descriptor]]作为参数
- 不会创建一个新进程, 进程的大多数属性并没有改变
- 新程序从其main函数开始执行, 重新初始化栈，堆，data segments
- 调用成功无返回值, 失败返回-1，并设置errno
- 参数
  - `pathname`: 必须是一个二进制**可执行文件**或**脚本文件**
  - `filename`: 包含`/`则视为路径名, 否则在PATH[^path]环境变量所指定的各目录中搜寻可执行文件。
  - `*argv[]`: 由指向字符串的指针组成的数组，执行程序的运行参数
  - `*arg`: 每个命令行参数作为一个单独参数，以空指针结尾
  - `envp[]`: 字符串，通常是key=value的形式执行程序的环境参数
- [exec前后UID和GID是不变的，而有效ID取决于所执行程序文件所有者ID是否设置， 若已设置则有效用户ID变成程序所有者的ID，否则有效用户ID不变](Linux_File_ID.md)  
  
[^path]:PATH包含了一张目录表(路径前缀)，用冒号`:`隔开, 
                    如: PATH=/bin:/usr/bin:/usr/local/bin