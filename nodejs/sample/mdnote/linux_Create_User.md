# 创建用户

## useradd

`useradd [-u UID] [-g initial_group] [-G other_group] -[M/m] [-c 说明栏] [-d home] [- s shell] username`

options

- `-u`: 指定UID
- `-g`: 指定初始群组
- `-G`: 其他群组
- `-M`: 强制不建立用户home目录
- `-m`: 强制创建用户home目录
- `-c`:
- `-d`: 指定某个目录作为用户存放文件目录
- `-r`: 创建系统用户
  - 系统用户在`/etc/shadow`没有aging(可用时间)信息
  - 系统用户的数字ID在常数`SYS_UID_MIN` ~ `SYS_UID_MAX`之间, 而不是`UID_MIN` ~ `UID_MAX`
  - 不会创建home目录,使用`-m`可以创建
- `-s`: 指定一个shell， 默认`/bin/bash`

## passwd

- 修改用户密码
- `passwd [-k/l/u/f/d/S] [username]`
  - `-d` 删除密码
  - `-f` 强制用户下次登陆使必须修改口令
  - `-w` 口令要到期前警告天数
  - `-k`
  - `-l`
  - `-S`
  - `-u`
  - `-x`
  - `-g`

[修改密码时发生了什么](Linux_How_TO_Change_Password.md)

## 一般流程


```shell
useradd username
# 此时账户处于封锁状态
passwd username
```
