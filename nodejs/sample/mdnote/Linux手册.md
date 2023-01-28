# table

## 标准环境变量

<table>
    <tr>
       <td>变量名</td>
       <td>描述</td>
    </tr>
    <tr>
       <td>HOME</td>
       <td>用户主目录或初始默认目录</td>
    </tr>
    <tr>
       <td>LANG</td>
       <td>描述</td>
    </tr>
    <tr>
       <td>LC_COLLATE</td>
       <td></td>
    </tr>
    <tr>
       <td>LC_CTPE</td>
       <td></td>
    </tr>
    <tr>
       <td>LC_MONETARY</td>
       <td></td>
    </tr>
    <tr>
       <td>LC_NUMERIC</td>
       <td></td>
    </tr>
    <tr>
       <td>LC_TIME</td>
       <td></td>
    </tr>
    <tr>
       <td>LOGNAME</td>
       <td>与当前进程相关联的注册名</td>
    </tr>
    <tr>
       <td>PATH</td>
       <td>可执行文件路径前缀</td>
    </tr>
    <tr>
       <td>TERM</td>
       <td>终端信息</td>
    </tr>
    <tr>
       <td>TZ</td>
       <td></td>
    </tr>
</table>

## 信号说明

<table>
    <tr>
        <td>SIGCHLD</td>
        <td>进程终止时SIGCHLD信号发送给父进程</td>
    </tr>
    <tr>
        <td>SIGSEGV</td>
        <td>指示了一次无效的内存引用, <br>如访问未初始化指针</td>
    </tr>
    <tr>
        <td>SIGKILL</td>
        <td>杀死任意进程的可靠方法，不能被捕捉或忽略</td>
    </tr>
    <tr>
        <td>SIGSTOP</td>
        <td>作业控制信号，停止一个进程，不能被捕捉或忽略</td>
    </tr>
    <tr>
        <td>SIGSTP</td>
        <td>交互停止信号，用户在终端上按挂起键(一般时ctrl + z), 终端驱动产生此信号。发送至前台进程组中的所有进程</td>
    </tr>
    <tr>
        <td>SIGUSR1</td>
        <td>用户定义信号，用于应用程序</td>
    </tr>
    <tr>
        <td>SIGUSR2</td>
        <td>另一个用户定义信号</td>
    </tr>
    <tr>
        <td>SIGINT</td>
        <td>当用户按中断键时，终端驱动程序产生此信号并发送至前台进程组中的每一个进程</td>
    </tr>
    <tr>
        <td>SIGQUIT</td>
        <td>用户在终端上按退出键时，终端驱动程序产生此信号, 并发送给前台进程组中所有进程</td>
    </tr>
    <tr>
        <td>SIGHUP</td>
        <td>检测到控制终端挂断或控制进程死亡</td>
    </tr>
</table>