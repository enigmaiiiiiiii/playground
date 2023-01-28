# kill

- 终止一个进程`kill -signal %PID
- `kill -l`列出可以使用的信号(signal)
- `kill -signal %PID` 
- 常用的signal: HUP(1 重启), KILL(9 强行关闭), TERM(正常结束)
- `killall 进程名称`可以终止所有该名称的进程 