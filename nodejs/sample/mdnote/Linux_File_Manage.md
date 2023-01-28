# File Manage

- [File Manage](#file-manage)
  - [文件权限命令](#文件权限命令)
  - [file](#file)
  - [chown](#chown)
  - [ln](#ln)

## 文件权限命令

-   `chgrp`: 改变所属群组
-   [chown](Linux_Command_Chown.md): 改变所属用户
-   [chmod](Linux_Command_Chmod.md): 改变文件的属性，可读，可写，SUID 等

## file

- determine file type

```bash
file *
```
determine the type of all file in current directory

查看当前目录下所有文件的类型


## chown

`chown [OPTION] ... [OWNER][:[GROUP]] FILE ...`

修改文件的所有者为owner，所属群组为group

```bash
chown username:groupname file
```

options

- `-R`: 递归处理，将指定目录下的所有文件及子目录一并处理

## ln

- make links between files

default create hard link

- hard link: 目标必须存在
- Symbolic link: 可以指向任意文本

SYNOPSIS

`ln [OPTION]... [-T] TARGET LINK_NAME`

create file1 link to file2

```bash
ln -s file2 file1
```
