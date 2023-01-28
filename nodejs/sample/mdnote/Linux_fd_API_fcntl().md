# fcntl()

```c++
#include <unistd.h>
#include <fcntl.h>
int fcntl(int fd, int cmd, ... /* arg */ );
```

- 用于操作打开的[[Linux_File_Descriptor]]函数
- 操作类型由cmd决定
  - linux内核支持哪些取值, 需要通过调用来检查, 如果fcntl()返回EINVAL，表示内核无法识别该参数
- 成功返回值受操作类型影响，失败返回-1，并设置[[errno]]
- arg参数与操作类型cmd有关

## cmd的取值

<table>
    <tr>
        <td colspan="2">复制文件描述符</td>
    </tr>
    <tr>
        <td>F_DUPFD</td>
        <td>复制一个文件描述符到最小可用的文件描述符<br>成功返回新的文件描述符, 相当于dup(fd) </td>
    </tr>
    <tr>
        <td>F_DUPFD_CLOEXEC</td>
        <td>复制文件描述符，设置与新的描述符关联的FD_CLOEXEC文件描述符标志的至，返回新的文件描述符</td>
    </tr>
    <tr>
        <td colspan="2">文件描述符的flags<br>关于文件描述符的flags目前只有FD_CLOEXEC, 表示文件描述符在execve()执行成功后是否保持打开的属性</td>
    </tr>
    <tr>
        <td>F_GETFD</td>
        <td>无参数，返回文件描述符的flags</td>
    </tr>
    <tr>
        <td>F_SETFD</td>
        <td>通过参数arg设置文件描述符的flags</td>
    </tr>
    <tr>
        <td colspan="2">文件的打开方式, 即通过open()函数设置的初始值</td>
    </tr>
    <tr>
        <td>F_GETFL</td>
        <td>返回文件的打开方式, 无参数</td>
    </tr>
    <tr>
        <td>F_SETFL</td>
        <td>通过参数arg设置文件的打开方式</td>
    </tr>
    <tr>
        <td colspan="2">文件锁</td>
    </tr>
    <tr>
        <td>F_SETLK</td>
        <td></td>
    </tr>
    <tr>
        <td>F_SETLKW</td>
        <td></td>
    </tr>
    <tr>
        <td>F_GETLK</td>
        <td></td>
    </tr>
</table>
