# tar

## 示例

将文件file1和目录dir2**压缩**为package.tar, 列出详细信息

```bash
tar -cvf package.tar file1 dir2
```

**提取**package.tar中的文件, 并输出到/tmp目录

```bash
tar -xvf package.tar -C /tmp
```

**解压**并提取package.tar.gz中的文件, 并输出到/tmp目录

```bash
tar -zxvf package.tar.gz -C /tmp
```

列出package.tar.gz或package.tar中的文件

```bash
tar -tf package.tar.gz
tar -tf package.tar
```

## 选项

- `tar -A [OPTIONS] ARCHIVE ARCHIVE`
- `tar -c [-f ARCHIVE] [OPTIONS] [FILE...]`: 用文件`[file...]`创建为档案ARCHIVE
- `tar -d [-f ARCHIVE] [OPTIONS] [FILE...]`
- `tar -t [-f ARCHIVE] [OPTIONS] [MEMBER...]`: 列出档案ARCHIVE中的内容
- `tar -r [-f ARCHIVE] [OPTIONS] [FILE...]`
- `tar -u [-f ARCHIVE] [OPTIONS] [FILE...]`
- `tar -x [-f ARCHIVE] [OPTIONS] [MEMBER...]`
- `-v` or `--verbose`: 列出详细信息
- `-z` or `--compress`: 使用gzip指令处理备份文件
- `-C` or `--directory=DIR`
  - 之后的任何操作更改对"DIR"目录生效
  - 顺序敏感，即影响接下来的所有option
