# 网络命令

[查看网络状态](#查看网络状态)
[telnet](#telnet)
[ftp](#ftp)
[lftp](#lftp)
[gaim](#gaim)
[数据包截获工具](#数据包截获工具)
[curl](#curl)

## 查看网络状态

- [[netstat]]

## telnet

[telnet](telnet.md)

## scp

- OpenSSH secure file copy

```bash
scp file/path [user@]host:[remote/filename]
```

- path/of/file: 本地文件路径
- user: 远程主机的用户名
- host: 远程主机的ip地址
- remote/filename: 远程主机的文件路径

options

- r: 递归复制目录

## ftp

`-n`:  不使用自动登录

连接ftp服务器

- `ftp [hostname] | [ip-address]`
- `ftp 192.168.1.1`

下载文件

- `get [远程路径]`: 单个文件
- `mget [远程目录]`: 目录下的所有文件

上传文件

- put
- mput

## lftp

## gaim

## tcpdump

- 数据包截获工具
