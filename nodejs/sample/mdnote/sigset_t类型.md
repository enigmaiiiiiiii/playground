# sigset_t类型

- 对于声明变量`sigset_t set;`, 可以理解为一个位串

<table>
    <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>...</td>
    </tr>
</table>

## sigset_t相关函数

```c
#include <signal.h>

int sigemptyset(sigset_t *set);
int sigfillset(sigset_t *set);
int sigaddset(sigset_t *set, int signum);
int sigdelset(sigset_t *set, int signum);
int sigismember(const sigset_t *set, int signum);
```

- sigemptyset() 初始化信号集set, 清空所有信号
- sigfillset()向信号集set添加所有
- sigaddset() 和 sigdelset() 添加或删除信号集set中的`signum`信号
- sigismember() 检查`signum`是否在信号集set中
- 前四个函数成功返回0，失败返回-1
- sigismember() 存在返回1，不存在返回0，错误返回-1

