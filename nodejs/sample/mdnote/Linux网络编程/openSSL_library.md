# ssl_library

- SSL_CTX 对象被创建为建立 TLS/SSL 启用的连接的框架, 可以在此对象中设置有关证书、算法等的各种选项。
- 创建网络连接后，可以将其分配给 SSL 对象,  使用 SSL_new() 创建 SSL 对象
- 使用 SSL_set_fd() 或 SSL_set_bio() 将网络连接与对象关联
- 当分别使用 SSL_accept() 或 SSL_connect() 执行 TLS/SSL 握手 
- SSL_read_ex()、SSL_read()、SSL_write_ex() 和 SSL_write() 用于在 TLS/SSL 连接上读写数据
- SSL_shutdown() 可用于关闭 TLS/SSL 连接。

## ssl结构

- SSL_METHOD: 调度结构, 实现各种协议半杯的内部ssl库方法, 需要创建一个SSL_CTX
- SSL_CILPHER: 此结构保存特定密码的算法信息，这是 SSL/TLS 协议的核心部分。 可用密码是在 SSL_CTX 基础上配置的，实际使用的密码是 SSL_SESSION 的一部分。
- SSL_CTX: 这是由服务器或客户端在每个程序生命周期内创建一次的全局上下文结构，它主要保存稍后为连接创建的 SSL 结构的默认值。
- SSL_SESSION: 这是一个包含连接的当前 TLS/SSL 会话详细信息的结构：SSL_CIPHER、客户端和服务器证书、密钥等。
- SSL: 这是主要的 SSL/TLS 结构，由服务器或客户端根据建立的连接创建。这实际上是 SSL API 中的核心结构。 在运行时，应用程序通常会处理这个结构，它与大多数其他结构都有链接。