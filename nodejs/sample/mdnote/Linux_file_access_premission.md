# 文件权限

<table>
<tr>
<td>S_ISUID</td>     
<td>04000</td>   
<td>set-user-ID bit (see execve(2))</td>
</tr>
<tr><td>S_ISGID</td>
<td>02000</td>   
<td>set-group-ID bit (see below)</td>
</tr>
<tr>
<td>S_ISVTX</td>     
<td>01000</td>   
<td>sticky bit (see below)</td>
</tr>
<tr>
<td>S_IRWXU</td>
<td>00700</td>
<td>owner has read, write, and execute permission</td>
</tr>
<tr>
<td>S_IRUSR</td>
<td>00400</td>
<td>owner has read permission</td>
</tr>
<tr>
<td>S_IWUSR</td>
<td>00200</td>
<td>owner has write permission</td>
</tr>
<tr>
<td>S_IXUSR</td>
<td>00100</td>
<td>owner has execute permission</td>
</tr>
<tr>
<td>S_IRWXG</td>
<td>00070</td>
<td>group has read, write, and execute permission</td>
</tr>
<tr>
<td>S_IRGRP</td>
<td>00040</td>
<td>group has read permission</td></tr>
<tr>
<td>S_IWGRP</td>
<td>00020</td>
<td>group has write permission</td></tr>
<tr>
<td>S_IXGRP</td>
<td>00010</td>
<td>group has execute permission</td></tr>
<tr>
<td>S_IRWXO</td>
<td>00007</td>
<td>others (not in group) have read,  write,  and</td>
</tr>
<tr>
<td>S_IROTH</td>
<td>00004</td>
<td>others have read permission</td></tr>
<tr>
<td>S_IWOTH</td>
<td>00002</td>
<td>others have write permission</td></tr>
<tr>
<td>S_IXOTH</td>
<td>00001</td>
<td>others have execute permission</td></tr>
<table>

- S_ISUID: 参考[execve()函数](Linux_Process_API_execve().md)