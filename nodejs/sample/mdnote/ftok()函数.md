# fotk()

```c
#include <sys/ipc.h>
key_t ftok(const char *path, int id);
```

- 函数ftok()根据 path 和 id 返回key_t关键字，可作为msgget(), semget(), shmget()的IPC资源参数
- ftok()返回的关键字根据[inode](Linux_file_inode.md)创建, 所以相同路径名可能返回不同key_t