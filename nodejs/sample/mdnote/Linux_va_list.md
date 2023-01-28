# va_list函数

```c
#include <stdarg.h>

void va_start(va_list ap, last);
type va_arg(va_list ap, type);
void va_end(va_list ap);
void va_copy(va_list dest, va_list src);
```

## va_start()

- 用来将可变参数`...`初始化到[va_list](Linux_va_list_structure.md)结构体ap中, 后续供va_arg()和va_end()后续使用
- last表示可变参数的前一个参数，比如格式化参数(char*)format, 个数(int)n

## va_arg()

返回type类型的值, [va_list](Linux_va_list_structure.md)对象ap传递给va_arg()后，函数返回后，ap变成未定义类型

## va_arg(va_list ap, type)
- 接受两个参数: 一个[va_list](Linux_va_list_structure.md)类型变量，一个表示类型的对象 
- 每次调用按顺序返回ap中的一个参数, 并指定参数类型
- va_arg完成两项工作
  1. 读取当前参数并返回
  2. 指向下一个参数 
  
## va_end(va_list ap)
  
- 清理工作，释放内存