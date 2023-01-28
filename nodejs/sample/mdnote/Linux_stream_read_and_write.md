# 读写流

## get

```c
#include <stdio.h>

int fgetc(FILE *stream);

char *fgets(char *s, int size, FILE *stream);

int getc(FILE *stream);

int getchar(void);

int ungetc(int c, FILE *stream);
```

- fgetc()读下一个字符，并将unsigned char 转换为 int 返回

## put 

```c
#include <stdio.h>

int fputc(int c, FILE *stream);

int fputs(const char *s, FILE *stream);

int putc(int c, FILE *stream);

int putchar(int c);

int puts(const char *s);

```

- 把`c`转换为unsigned char 写入stream 