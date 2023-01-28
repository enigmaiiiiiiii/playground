# 账号管理

用户

[查看登录的用户](#查看登录的用户)
[createuser](#createuser)
[切换用户](#切换用户)
[usermod](#usermod)
[userdel](#userdel)
[logout](#logout)
[login](#login)

分组

[groupadd](#groupadd)
[groups](#groups)

## 查看登录的用户

- 用来查询远程登录的用户
- `who [option] [user]`
  - `-a`
  - `-b`
  - `-d`
  - `-H`
  - `-l`
  - `-p`

## createuser

[创建用户](linux_Create_User.md)

## 切换用户

[ ] todo

## usermod

- 修改用户

语法: `usermod [-c/d/e/g/G/l/s/u/L/U] username`

options

- `-a`: add user to group
- `-b`
- `-c`: change comment field
- `-d`: change home directory
- `-e`: change expiration date

将用户添加到分组

```bash
usermod -a -G groupname username
```

## userdel

- 删除用户

语法: `userdel [-r] username`

options

- `-r`: 表示连同home中的用户文件加一起删除

## logout

```bash
[username@localhost ~]$ logout
```

## login

## groupadd

- create a new [group](Linux_Group.md)

`groupadd [options] group`

新建分组, 命名为temp

```bash
groupadd temp
```

options

- `-f`: force
- `-g`: group ID
- `-r`: create a system group
  - GID is between `SYS_GID_MIN` ~ `SYS_GID_MAX`
  - instead of `GID_MIN` ~ `GID_MAX`

group相关的文件

`/etc/group`: Group account information

- 文件内容格式: `group_name:password:GID:user_list`

`/etc/gshadow`: Group account information
`/etc/login.defs`: Login defaults

## groups

`groups [OPTION] ... [USERNAME] ...`

- print the groups a user is in
- 查看用户所属的组

output looks like:

```
username: group1 group2 group3
```