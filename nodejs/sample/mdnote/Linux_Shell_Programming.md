# shell

## basic

[Echo](Linux_Shell_Echo.md)

[Variable](Linux_Shell_Variable.md)

[运算符](Linux_Shell_Operator.md)

## execute

```sh
bash script.sh
```

## shell脚本片段

1. 从FTP服务器下载文件

```sh
HOST = "192.168.0.104"      # Server's hostname
USER = "lapowner"           # Server login username
PASSWORD = "1234asdf@Z"     # Server login password

SOURCE = $1  # $1 脚本的第一个参数
ALL_FILES="${@:2}"  # ${@:2} 除第一个参数以外的参数

# Begin input to FTP
ftp -inv $HOST <<EOF
user $USER $PASSWORD
cd $SOURCE
mget $ALL_FILES
bye
EOF  # End input to FTP
```

```sh
./script.sh file1  # 下载file1
./script.sh *.c file1 # 下载file1和*.c
```

