# 竞争条件

- 多个进程企图对共享数据进行某种处理, 结果取决于进程的运行顺序时，我们认为发生了竞争条件
- 如果一个进程希望等待一个子进程终止，必须调用wait()函数
- 如果一个进程要等待其父进程终止，则可以使用轮询

```c++
// 轮询机制
while (getppid() != 1)
  sleep(1);
```

- 轮询机制浪费CPU