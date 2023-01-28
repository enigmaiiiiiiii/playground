# 异步io
> 异步的含义：一旦请求加入队列，就立即返回, 无论读写操作是否完成
- 异步io操作在io期间不导致发出请求的进程被阻塞
- 异步io函数aio_read(), aio_wirte(), aio_error(), aio_return(), aio_suspend(), aio_cancel(), lio_listio(), aio_fsync()

## 结构体aiocb(异步控制模块)

- 异步io类操作关键参数

```c
#include <aiocb.h>

struct aiocb {
  /* The order of these fields is implementation-dependent */

  int             aio_fildes;     /* File descriptor */
  off_t           aio_offset;     /* File offset */
  volatile void  *aio_buf;        /* Location of buffer */
  size_t          aio_nbytes;     /* Length of transfer */
  int             aio_reqprio;    /* Request priority */
  struct sigevent aio_sigevent;   /* Notification method */
  int             aio_lio_opcode; /* Operation to be performed;
                                     lio_listio() only */

  /* Various implementation-internal fields not shown */
};
```

- 同步io相同成员：
  - aio_fildes: 被操作的[[Linux_File_Descriptor]] 
  - aio_offset: 文件偏移量
  - aio_buf: 缓冲地址
  - aio_nbytes : [缓冲大小](Linux_IO_Stream.md)
- 异步io特有成员    
  - aio_reqprio : 响应优先级  
  - aio_sigevent: 异步io完成时的通知方式, [[sigevent结构体]]
  - aio_lio_opcode: lio_listio用到的操作类型函数
    - LIO_READ: 相当于排队调用`aio_read()`
    - LIO_WRITE:  相当于排队调用`aio_write()`
    - LIO_NOP: 忽略这个控制模块
  
## 函数
  
### 读写函数  
  
```c
#include <aio.h>
int aio_read(struct aiocb *aiocbp);
int aio_write(struct aiocb *aiocbp);
```

- 文件的偏移量，文件描述符均在结构体aiocbp中

### 一次调用多个读写操作

```c
#include <aio.h>
int lio_listio(int mode, 
               struct aiocb *const aiocb_list[], 
               int nitems, 
               struct sigevent *sevp)
```

-  返回值
  - mode=LIO_NOWAIT：全部加入队列返回0， 失败返回-1，并设置errno 
  - mode=LIO_WAIT: 全部操作成功返回0 , 失败返回-1，并设置errno 
  - 返回状态仅表示调用信息，不表示io操作的信息,io操作失败不会影响其他操作完成
- 参数
  - mode取值 
    - LIO_WAIT: 阻塞，直到所有操作完成，忽略sevp参数
    - LIO_NOWAIT: io操作排队等待处理，调用立即返回。所有io操作完成时，发生异步通知
  - `aiocb_list[]`: 由指向待操作**aiocb结构体**的**指针**组成的**数组**,  未指定顺序
  - nitems: 指定`aiocb_list[]` 长度
  
### 查询异步io状态

```c
#include <aio.h>
int aio_error(const struct aiocb *aiocbp);
ssize_t aio_return(struct aiocb *aiocbp);
```
