# 文件读写

## read()

```c++
#include <unistd.h>
ssize_t read(int fd, void *buf, size_t count);
```

- 将[[Linux_File_Descriptor]]fd的内容读入buf
- 成功返回读到的数据大小, 失败返回-1, 并设置[[errno]]

## write()

```c++
#include <unistd.h>
ssize_t write(int fd, const void *buf, size_t count);
```

- 将buf中的内容写入[[Linux_File_Descriptor]]fd
- 成功返回写入的字节数， 失败返回-1

[[write()函数和printf()输出顺序]]

## lseek()    

```c++
#include <unistd.h>
off_t seek(int fd, off_t offset, int whence);
```
- 显式的设置文件偏移量
- 参数
  - fd: 文件描述符
  - off_t : offset
  - whence: 偏移量起始计算位置选项
    - SEEK_SET : 据文件开始处偏移offset
    - SEEK_CUR : 文件的偏移量设置为其当前加offset
    - SEEK_END : 偏移量设置为文件长度加offset
    
## opendir()

- 返回值
  - DIR* : 指向文件目录stream的指针
  - 可以认为open()函数返回值(DIR结构体)是其他目录操作的参数

```c++
#include <sys/types.h>
#include <dirent.h>

DIR *opendir(const char *name);
DIR *fdopendir(int fd);
```

## readdir()

- 返回值:
  - 返回指向结构体dirent的指针
- 参数
  - 文件流指针  

```c++
#include <dirent.h>
struct dirent *readdir(DIR *dirp);
```

- 结构体dirent
  - 包含inode, 文件名等信息

```c++
struct dirent {
    ino_t          d_ino;       /* Inode number */
    off_t          d_off;       /* Not an offset; see below */
    unsigned short d_reclen;    /* Length of this record */
    unsigned char  d_type;      /* Type of file; not supported
                                   by all filesystem types */
    char           d_name[256]; /* Null-terminated filename */
};

```

- d_name文件名字符串

## closedir()

***

## read, write 和 [recv, send](Linux_Socket_API_send_recv.md)区别

- 均可用于socketfd读写, recv和send可以设置socketfd选项 
- read, write可用于一般文件描述符读写