# stat

```c
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>

int stat(const char *pathname, struct stat *statbuf);
int fstat(int fd, struct stat *statbuf);
int lstat(const char *pathname, struct stat *statbuf);
```

- 返回文件信息, 文件状态存放stat结构体中
- 参数
  - pathname: 字符指针，指向带查询文件地址
  - statbuf：[stat结构体](Linux_file_stat_structure.md)，储存文件信息
