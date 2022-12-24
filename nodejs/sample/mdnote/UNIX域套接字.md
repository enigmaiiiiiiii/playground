  # UNIX域套接字
  
  ```c
  #include <sys/socket.h>
  int socketpair(int domain, int type, int protocol, int sockfd[2]);
  ```
  
- 创建一对未命名的[[socket]],  并返回到`sockfd[0]`和`sockfd[1]`中，参考[[Linux_Socket_API_socket()函数]]
-  全双工通信
- 成功返回0，失败返回-1，并设置[[errno]]
- 参数
  - domain: 同socket()函数
  - type: 同socket()函数
  - protocol: 同socket()函数
  - sockfd: 一堆socket的引用