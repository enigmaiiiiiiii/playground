# open()

```c++
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int open(const char *pathname, int flags);
int open(const char *pathname, int flags, mode_t mode);
int creat(const char *pathname, mode_t mode);
int openat(int dirfd, const char *pathname, int flags);
int openat(int dirfd, const char *pathname, int flags, mode_t mode);
```

- 以特定的方式打开文件
- 打开成功返回[[Linux_File_Descriptor]], 打开失败返回-1，设置[[errno]]

## 参数

- `pathname` ：文件路径
- `flags`：打开方式 
  - flags必须包含的以下参数之一
     - O_RDONLY: 只读
     - O_WRONLY: 只写
     - O_RDWR: 可读可写
  - 可选参数
    - O_APPEND: 文件以append模式打开, 在写文件之前，文件的偏移量放置在文件末尾
    - O_ASYNC
    - O_CLOEXEC
     - O_CREAT: 如果文件不存在，则创建文件
    - O_DIRECTORY
    - O_EXCL
    - O_NOCTTY
    - O_NOFOLLOW
    - O_TMPFILE
    - O_TRUNC.一个已存在的常规文件，且允许写入，将被截断，长度为0  
       如果是FIFO或终端文件则忽略O_TRUNC标志
    - O_NONBLOCK 以非阻塞方式打开文件
- `mode`: 设置[文件权限](Linux_file_type_and_mode.md), 只有创建新文件`O_CREAT`或`O_TMPFILE`时才需要
  - 当flag设置为O_CREAT 或 O_TMPFILE时，需要设置的参数
  -  文件的最终权限= mode & ~[[umask]]
    >  According to POSIX, the effect when other bits are set in mode is unspecified.  On Linux, the following bits are also honored in mode:
    -  S_ISUID  0004000 set-user-ID bit
    -  S_ISGID  0002000 set-group-ID bit (see inode(7)).
    -  S_ISVTX  0001000 sticky bit (see inode(7)).
    
## creat()
    
- 创建文件
- 等价于open(path, O_CREAT | O_WRONLY | O_TRUNC)