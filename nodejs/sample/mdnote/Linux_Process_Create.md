# 创建进程

- 父进程所有打开的文件描述符都被复制到子进程
- 父子进程共享同一个文件偏移量
- 子进程获得父进程数据空间，堆和栈的副本
- 父进程和子进程不共享[存储空间](Linux_process_C程序的存储空间布局.md)部分
- 父进程和子进程共享[正文段](Linux_process_C程序的存储空间布局.md)

[fork()函数](Linux_Process_fork().md)
  
[execve()函数](Linux_Process_API_execve().md)