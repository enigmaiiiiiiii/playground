# netstat

- `sudo apt install net-tools` 安装net-tools

- `netstat -[a/n/t/u/l/p/c]`
  - `-r` 路由表
  - `-n` 拒绝显示别名
  - `-a` 列出所有的联机状态，包括tcp/udp/unix socket
  - `-t` 仅列出TCP
  - `-u` 仅列出UDP
  - `-l` 仅列出在Listen的服务的网络状态
  - `-p` 列出PID与Program的名称
  - `-c` 设置自动更新

## 输出信息内容说明

- Local Address: 本地地址
- Foreign Address: 远程的主机IP
- stat:状态列， 参考[[TCP状态转移]]

## 实用选项组合

- 观察本机上所有的网络联机状态
  - `netstat -atunp`
- 列出在监听的网络服务
  - `netstat -tunl`
- 列出已联机的网络联机状态
  - `netstat -tun`
- 找出联机的PID
  - `netstat -tunp` 