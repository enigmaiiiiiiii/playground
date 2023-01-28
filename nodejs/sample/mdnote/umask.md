# umask

## 函数   

```c++
#include <sys/types.h>
#include <sys/stat.h>

mode_t umask(mode_t mask);
```

- 设置创建文件的默认mask
- 返回设置前的文件掩码
- [open()函数](Linux_file_API_fd_open.md)和mkdir等创建文件函数会用到umask函数设置的默认文件权限
- 文件的最终权限是mode & ~umask
  - mode是open和mkdir的函数的参数
  
## 命令

 - umask设置文件创建时得默认权限
 - `umask [-p/S] [mode]`
   - `-p`  
   -  `-S` 以字符形式输出当前设置
   