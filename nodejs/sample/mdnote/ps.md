# ps

- 类似windows的任务管理器
- `ps -ef|grep dhcp` 找出包含dhcp的进程
- `ps [options]`
  - `-l`
  - `-A` 列出所有进程
  - `-a` 列出和本终端无关的进程
  - `-w` 显示加宽
  - `-u` 显示有效使用者相关进程
  - `-aux`  显示包含其他使用者的进程
  - 用户定制输出列
- PID: 进程ID
- `pstree` 可以查看父子程序的关系
- PPID: 父进程ID
- `ps -l`输出内容
<table>
    <tr>
        <td>字段</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>F</td>
        <td>程序的flag</td>
    </tr>
    <tr>
        <td>S</td>
        <td>程序的状态</td>
    </tr>
    <tr>
        <td>PID</td>
        <td>程序进程ID</td>
    </tr>
    <tr>
        <td>PPID</td>
        <td>父进程ID</td>
    </tr>
    <tr>
        <td>C</td>
        <td>CPU使用资源百分比</td>
    </tr>
    <tr>
        <td>PRI</td>
        <td>优先级</td>
    </tr>
    <tr>
        <td>NI</td>
        <td>nice值</td>
    </tr>
    <tr>
        <td>ADDR</td>
        <td>在内存的哪个部分</td>
    </tr>
    <tr>
        <td>SZ</td>
        <td>使用掉的内存大小</td>
    </tr>
    <tr>
        <td>WCHAN</td>
        <td>程序是否在运作中</td>
    </tr>
    <tr>
        <td>TTY</td>
        <td>登入者的终端机位置</td>
    </tr>
    <tr>
        <td>TIME</td>
        <td>使用掉的CPU时间</td>
    </tr>
    <tr>
        <td>CMD</td>
        <td>下达的命令</td>
    </tr>
</table>
