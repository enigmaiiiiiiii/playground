# POSIX信号量

- POSIX解决了[[SystemV信号量]]的缺陷
  - 更高性能的实现
  - 使用更简单
  - POSIX信号量在删除时，操作可以继续工作直到最后一次引用被释放
- POSIX信号量的两种形式: 命名和未命名
  - 命名信号量可以在不同进程中使用
  - 未命名信号量只能用在同一进程中
  
  ## 命名信号
  
[[sem_open()函数]]  

[[sem_close()函数]]

[[sem_unlink()函数]]

[[sem_wait()函数]]

[[sem_post()函数]]

## 未命名信号

[[sem_init()函数]]

[[sem_destory()函数]]
