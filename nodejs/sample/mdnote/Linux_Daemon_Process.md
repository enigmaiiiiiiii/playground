# 守护进程

-   守护进程不与终端设备关联

## 编程规则

1. 首先调用[[umask]], 修改文件权限掩码, 继承的来的文件模式创建屏蔽字可能会被设置为拒绝某些权限

-   使守护进程可以创建组可读，组可写的文件

2. 调用 fork(), 父进程 exit()

-   如果守护进程是 shell 命令启动的，那么父进程终止会让 shell 认为命令已经执行完
-   虽然子进程继承了父进程的进程组 ID，但获得了一个新的进程 ID，这就保证了子进程不是一个进程组的组长

3. 调用[setsid](Linux_Process_Relation.md#setsid)创建一个新的会话
4. 将当前目录更改为根目录, 从父进程处继承过来的当前工作目录可能在一个挂在的文件系统中。
5. 关闭不在需要的[文件描述符](Linux_File_Descriptor.md)

-   这使守护进程不在持有从其父进程继承来的任何文件描述符
-   可以使用`open_max()`函数或`getrlimit()`函数来判定最高文件描述符值

6. 某些守护进程打开/dev/null 使其具有文件描述符 0，1，2, 这样，任何一个试图读标准输入，写标准输出或标准错误的库例程都不会产生任何效果

## 错误记录

[[记录守护进程的错误]]

## 惯例

-   守护进程使用锁文件, 通常在/var/run 目录中，守护进程需要超级用户权限才能在此目录下创建文件
-   若守护进程支持配置选项，配置文件通常存放在/etc 目录中
-   守护进程可由命令行启动，通常他们是由系统初始化脚本之一启动
-   若守护进程有一个配置文件，那么当守护进程启动时会读该文件，当配置文件被更改后需要重启守护进程。守护进程通过捕捉 SIGHUB 信号，重读配置文件。

    > 因为守护进程不与终端相结合，所以守护进程没有理由接收到 SIGHUP 信号, 于是，守护进程可以安全重复使用 SIGHUP
