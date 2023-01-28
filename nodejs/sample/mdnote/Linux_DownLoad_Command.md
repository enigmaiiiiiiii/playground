# 软件下载

## curl

- 不使用UI界面, 向url发送数据的工具
- if use `curl` with no options, it will do a GET request and display the result to Screen

语法:

`curl [options] [url]`

输出文件名是远程文件名

```bash
curl -O [url]
```

或指定文件名

```bash
curl -o [filename] [url]
```

### handle url redirect

下载文件时, 若url被重定向, 即[响应状态码为302](/sorted/Network/Http_Response_Message.md#状态行), 返回内容不是想要的

- 可以先使用`-I`选项, 查看返回的头信息
- 或使用`-v`选项, 查看详细信息

```bash
curl -I [url]
```
可能看到这样的信息

```
HTTP/2 302
server: GitHub.com
date: Thu, 08 Dec 2022 09:43:52 GMT
content-type: text/html; charset=utf-8
vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Encoding, Accept, X-Requested-With
location: https://someurl
```

说明url被重定向到了`https://someurl`

- 使用`-L`选项, 自动跟随重定向, 可以下载到想要的文件

```bash
curl -L [url]
```

### download file with authentication

- 使用`-u`选项, 指定用户名和密码

```bash
curl -u username:password https://someurl
```

