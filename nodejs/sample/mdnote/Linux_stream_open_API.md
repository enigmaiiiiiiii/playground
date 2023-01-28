# fopen函数

```c
#include <stdio.h>

FILE *fopen(const char *pathname, const char *mode);
FILE *fdopen(int df, const char *mode);
FILE *freopen(const char *pathname, const char *mode, FILE *stream);
```

- fopen()函数打开名为pathname指向字符的文件，并关联一个[stream](Linux_IO_stream.md)
- 成功返回文件指针， 失败返回NULL
- mode指定读写方式

<table>
  <tr>
    <td>r</td>
    <td>打开读</td>
    <td>O_RDONLY</td>
  </tr>
  <tr>
    <td>w</td>
    <td>把文件截断至0，或创建写</td>
    <td>O_WRONLY | O_CREAT |  O_TRUNC</td>
  </tr>
  <tr>
    <td>a</td>
    <td>在文件尾打开写, 或创建写</td>
    <td>O_WRONLY | O_CREAT |  O_APPEND</td>
  </tr>
  <tr>
    <td>r+</td>
    <td>为读和写而打开</td>
    <td>O_RDWR</td>
  </tr>
  <tr>
    <td>w+</td>
    <td>把文件截断至0，或为了读和写而打开</td>
    <td>O_RDWR | O_CREAT | O_TRUNC</td>
  </tr>
  <tr>
    <td>a+</td>
    <td>在文件尾读和写或创建</td>
    <td>O_RDWR | O_CREAT | O_APPEND</td>
  </tr>
</table>
