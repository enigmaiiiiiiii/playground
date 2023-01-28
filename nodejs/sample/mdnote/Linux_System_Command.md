# 系统

## alternatives

[alternatives](Linux_Command_Alternatives.md)

## export

```shell
export [-fnp][名称]=[值]
```

- -f `[名称]`为函数名称
- -n 删除指定的变量。变量实际上并未删除，只是不会输出到后续指令的执行环境中
- -p 列出所有的shell赋予程序的环境变量

## systemctl

- 在linux文档中systemctl操作的是单元, ~~目前理解为服务~~

> 与控制[systemd]管理的程序进行交互

查看服务状态

```bash
systemctl status [服务名]
```

启动服务, active状态设置为成功

```bash
sudo systemctl start [服务名]
```
挂载服务

- 比如开机自启动, 或插入某个硬件
- units may be enabled without being started and started without being enabled

```bash
sudo systemctl enable [服务名]
```
enable 的同时启动服务

```bash
sudo systemctl enable --now [服务名]
```
