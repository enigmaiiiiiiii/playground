# stream

## 标准流

- 文件指针stdin, stdout, stderr 

> 对应文件描述符STDIN_FILENO,STDOUT_FILENO, STDERR_FILENO

- 标准IO函数fopen()返回一个指向FILE对象的指针，该对象通常是一个结构, 结构包括缓冲区长度，缓冲区的字符，错误标志等

## 缓冲类型

[[write()函数和printf()输出顺序]]

- 完全缓冲 : 缓冲区被填满时, 才将内容发送，并刷新缓冲区, 通常出现在文件输入中 
- 行缓冲 : 出现换行符刷新缓冲区，如键盘输入，printf函数
- 无缓冲 : 输入后直接输出，如write()函数
- printf()行缓冲
- write()无缓冲
- 标准错误stderr无缓冲

## 设置缓冲

```c++
#include <stdio.h>
void setbuf(FILE *stream, char *buf);
void setbuffer(FILE *stream, char *buf, size_t size);
void setlinebuf(FILE *stream);
int setvbuf(FILE *stream, char *buf, int mode, size_t size);
```

- `setvbuf()`的参数
  - stream: 流
  - mode:缓冲类型参数
    - `_IONBF` 无缓冲
    - `_IOLBF` 行缓冲
    - `_IOFBF` 完全缓冲
  - size: 缓冲的最小长度
- `setbuf()` : 用于关闭或打开stream的缓冲
  - `buf`设置缓冲大小，NULL表示关闭缓冲  
- 其他函数的效果均可由`setvbuf()`函数实现

## flush刷新(冲洗)

- 刷新缓冲区表示将数据写出到文件
- 自动刷新的情况
  - 流被关闭
  - 调用exit()
  - 行缓冲中的换行符
  - 缓冲区被填满
  - 无论何时堆流操作导致他实际从文件读数据时
- 函数`int fflush(FILE *stream);`刷新stream缓冲区  
- 通过适当加入换行符，或在适当位置调用fflush()来保证内容按顺序输出