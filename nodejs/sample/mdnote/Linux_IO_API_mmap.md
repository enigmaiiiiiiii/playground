# 存储映射

- 由mmap函数实现, 
- 进程退出，映射自动解除，或用munmap()解除映射

```c++
#include <sys/mman.h>

void *mmap(void *addr, size_t length, int prot, int flags, int fd, off_t offset);
int munmap(void *addr, size_t length);
```

- mmap()将文件描述符fd所指文件映射到addr
  - 成功调用返回映射区起始地址, 失败返回MAP_FAILED(也就是 `(void *)-1`)
  - 将文件映射到内存，实现通过指针操作文件，而不是文件描述符
  - 可以用于父子进程通信，也可用于无关系进程通信
- mumap()删除映射到addr的数据, 进程结束自动结束调用

## 参数：

  - addr : 映射存储区的起始地址, 通常设置为0，表示由系统选择映射区的起始地址
  - fd: 被映射的文件描述符
  - length: 地址映射区大小
  - prot: 映射存储区的保护要求
    - PROT_READ: 映射区可读
    - PROT_WRITE: 映射区可写
    - PROT_EXEC: 映射区可执行
    - PROT_NONE: 映射区不可访问
    - 可以指定单一标志，也可按位或的任意组合
  - flags取值:
    - MAP_FIXED: 返回值必须等于addr的地址，不建议使用
    > 存储操作的配置
    - MAP_SHARED: 
      - 表示存储操作将修改映射文件，即write该文件
    - MAP_PRIVATE: 
      - 表示存储操作将创建映射文件的一个私有副本
      - 所有后来对该映射区的引用都是引用该副本, 且对其他进程不可见, 且不会传递到基础文件
  - offset : 必须是分页大小的整数倍， 分页大小等于`sysconf(_SC_PAGE_SIZE)`的返回值