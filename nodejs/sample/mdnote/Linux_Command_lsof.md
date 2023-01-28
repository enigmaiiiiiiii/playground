# lsof

- `lsof [option] filename`
- 列出当前系统所有打开文件的
- 需要root账户来执行

<table>
    <tr>
        <td>COMMAND</td>
        <td>进程名称</td>
    </tr>
    <tr>
        <td>PID</td>
        <td>进程名称</td>
    </tr>
    <tr>
        <td>FD</td>
        <td></td>
    </tr>
    <tr>
        <td>TYPE</td>
        <td>文件类型</td>
    </tr>
    <tr>
        <td>DEVICE</td>
        <td>磁盘名称</td>
    </tr>
    <tr>
        <td>SIZE</td>
        <td>文件大小</td>
    </tr>
    <tr>
        <td>NODE</td>
        <td>索引节点</td>
    </tr>
    <tr>
        <td>NAME</td>
        <td>打开文件的路径全名称</td>
    </tr>
</table>

- `lsof filename` 显示打开指定文件的所有进程
- `lsof -c string` 像是COMMAND列中包含指定字符的进程所有打开的文件
- `lsof -u username` 显示所有属于user进程打开的文件
- `lsof -i PID`