# tcpdump

- dump the traffic on a network
- 对网络上的数据包进行截获的软件
  - 数据包是[[IPv4数据报]]
- 必须是系统管理员
- 参数
  - `-nn`: 直接以IP及port number显示，而非主机名与服务名称 
  - `-X`: 可以列出十六进制(hex)以及ASCII的数据包内容
  - `-i`: 后面接要监听的网络接口, 例如eth0, lo, ppp0等
  
## example

1. 指令`tcpdump -i eth0 -nn`输出的一段内容  
`01:33:40.41 IP 192.168.1.100.22 > 192.168.1.11.1190: P 116:232(116) ack 1 win 9648`
   - 表示数据包是由192.168.1.100传到192.168.1.11，通过[端口](Network_Port.md)22到1190，且带有116bytes的数据量，使用的是PUSH旗标，而不是SYN之类的主动连接标志
 2. `tcpdump -i eth0 -nn port 21`表示只取出port 21的联机数据包