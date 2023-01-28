# apt

## `apt-get`

- update: 更新服务器与客户端的套件表头清单
- install: 后加套件名，安装套件
- upgrage: 进行已安装套件升级
- dist-upgrade:
- clean: 清除已下载到`/var/cache/apt/archives/`的套件档案
- remove: 移除某个套件

模拟安装, 查看package信息

```bash
apt-get -s <package>
```

## `apt-cache` 搜寻项目

- pkgnames: 列出本系统上面的所有套件名称
- dump: 列出所有的套件标头以及其相关的相依属性套件
- search: 后接要搜寻的字符串
- show:
- showpkg:
- depends: