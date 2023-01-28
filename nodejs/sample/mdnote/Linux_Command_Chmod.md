# chmod

- 改变[文件权限](Linux_File_Permission.md)

## 数字修改权限

`chmod [-R] nnn`:  nnn表示八进制数字

- r:4(100), w:2(010), x:1(001), rw: 6(110), rwx: 7(111)

> 括号中对应的二进制数

比如: 文件权限变为所有人可读可写可执行

```bash
chmod 777 file
```

- 字符类型改变档案权限

  <table>
    <tr>
        <td>chmod</td>
        <td>u(user)<br>g(group)<br>o(other)<br>a(all)<br></td>
        <td>+(加入）<br>-(除去)<br>=(设定)<td>
        <td>r<br>w<br>x<br>s<br>t<td>
        <td>file</td>
    </tr>
  </table>

## 符号修改权限

ugoa: user, group, other, all
rwx: read, write, execute

```bash
chmod g+rwx file
```

组用户添加rwx权限