# linux find

- `find [path] [option] [action]`
- 时间相关参数
  - `atime n` : n为数字, a为acess
  - `ctime n` : n为数字, c为change
  - `mtime n` : n为数字, m为modification
  - `newer file` : file 为一个存在的文件， 查找比file还要新的文件
- 与用户，群组相关的参数  
  - `-uid n`: 
  - `-gid n`: 
  - `-user name`: 
  - `-group name`: 
- 文件权限和名称相关参数 
  - `-name filename`
  - `-size +/-[size]`
