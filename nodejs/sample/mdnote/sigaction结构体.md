# sigaction结构体  

```c
struct sigaction {
  void     (*sa_handler)(int);
  void     (*sa_sigaction)(int, siginfo_t *, void *);
  sigset_t   sa_mask;
  int        sa_flags;
};
```

- `sa_handler`和signal()第二个参数相同
- `sa_sigaction`: 指定一个信号句柄的地址，当sa_flags中设置了SA_SIGINFO
  ```c
  void handler(int sig, siginfo_t *info, void *ucontext) {
  }
  ```
  - sig: 导致调用handler的信号数
  - info: [[siginfo_t]]指针，包含信号的更多信息
  - ucontext : 该字段指向的结构包含内核保存在用户空间堆栈上的信号上下文信息, 详见[[sigreturn()]], [[getcontext()]]
- `sa_mask`：[[sigset_t类型]]
  - 设置信号处理**程序执行期间**应该被阻塞的信号掩码 
  - 即设置[[信号句柄]]中要阻塞的信号
- `sa_flags`: 指导内核对信号交付时锁采取的动作进行进一步控制, 取0时默认屏蔽正在处理的信号
<table>
    <tr>
        <td>SA_RESTART</td>
        <td>sa_flags多数情况下设置为SA_RESTART<br>系统将在信号句柄返回时自动恢复被该信号中断的系统调用</td>
    </tr>
    <tr>
        <td>SA_NACLDSTOP</td>
        <td>此信号只对SIGCHLD信号有效<br>当子进程停止(即接收到SIGSTOP, SIGTSTP, SIGTTIN, SIGTTOU), 总是会发送SIGCHLD信号<br>已被停止的子进程恢复运行时，也可能像父进程发送SIGCHLD信号<br>以上两种情况在设置该标志的前提下，不会给调用进程发送信号</td>
    </tr>
    <tr>
        <td>SA_ONSTACK</td>
        <td></td>
    </tr>
    <tr>
        <td>SA_NODEFER</td>
        <td></td>
    </tr>
    <tr>
        <td>SA_RESETHAND</td>
        <td></td>
    </tr>
    <tr>
        <td>SA_NOCLDWAIT</td>
        <td></td>
    </tr>
    <tr>
        <td>SA_SIGINFO</td>
        <td></td>
    </tr>
</table>