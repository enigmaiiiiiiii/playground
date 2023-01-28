# 阻塞和非阻塞

- 读设备文件， 网络文件时会发生阻塞
- 文件属性
- 当read以非阻塞方式读一个设备或网络文件，返回-1，[[errno]]设置为EAGAIN
- [recv函数](Linux_Socket_API_send_recv.md)没有数据时会阻塞, [send函数](Linux_Socket_API_send_recv.md)输出队列没有足够空间时会阻塞
- socket在非阻塞模式下，行为会改变，原本阻塞行为会变成失败 , errno设置为EWOULDBLOCK或EAGIN