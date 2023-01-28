# 文件ID

- UID: 用户ID
- GID: 组ID
- SUID: 可以理解为一个属性，只能用于二进制文件, 二进制文件在执行过程中拥有文件拥有者权限
- EUID: 执行程序时的ID，若文件有SetUID属性，则EUID可能不等于UID
- Setuid是指对文件执行[Chmod](Linux_Command_Chmod.md) +s命令
- 理解EUID概念可以参考[用户更改密码的过程](Linux_How_TO_Change_Password.md)
- 每个文件至少有两个ID，使用者`ID-UID`和群组`ID-GID`
- `-rwxr-xr-x`
- `-rwsr-sr-x`
