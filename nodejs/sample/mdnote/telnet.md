# telnet

- linux中用来远程联机服务器的软件: `telnet 主机名`
- 可以连接[port](Network_Port.md): `telnet localhost 110`
- 使用明码传送，可以被监听

## 实验

```shell
telnet horstmann.com 80
```

输入上面命令后， 输入下面文本

```
GET / HTTP/1.1
Host: horstmann.com
blank line
```