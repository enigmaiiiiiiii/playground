# XSI IPC 

- InterProcess Communication, 简称IPC
- 子进程通过fork()可以继承父进程的IPC资源
- XSI IPC资源类型: [[消息队列]]，[[SystemV信号量]]，[共享内存](Linux_shared_memory_segment.md)

## 相似特征

- 标识符(identifier)
  - 作用类似文件描述符 
  - 相同类型的ipc资源标识符不会重复
  - 获取方式：[[msgget()函数]], [[semget()函数]], [[shmget()函数]]
- 键(key)
  - 数据类型key_t
  - 方便多个进程引用
  - 可以是指定的常数正整数
  - 作用类似于文件名
  - [[ftok()函数]] 返回ipc资源生成标识符所需的key
- 权限结构, [[ipc_perm结构体]]

## 三个get函数

- 相似的参数key和flag
- key为参数IPC_PRIVATE,或和当前某种类型ipc结构无关，则需要设置flag的IPC_CREAT标志位