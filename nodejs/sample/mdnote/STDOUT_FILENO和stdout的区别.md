# difference between stdout and STDOUT_FILENO

- stdout是FILE* , 文件指针，参考[[Linux_IO_Stream]]
- STDOUT_FILENO是[[Linux_File_Descriptor]]
- `fprintf(stdout, "x=%d\n", x)` 对应`printf("x=%d\n", x)
- `STDOUT_FILENO == fileno(stdout)`
