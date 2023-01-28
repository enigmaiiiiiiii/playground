# alternatives

## what for

假设有两个版本的java, java8(java-1.8.0-openjdk)和java17(java-17-openjdk), 通过alternatives可以设置默认的java版本

当运行java命令时, 实际上是运行的/usr/bin/java, 该命令是一个链接, 指向了alternatives的一个版本

查看java命令指向的文件

```bash
which java
```

查看/usr/bin/java的文件类型

```bash
file /usr/bin/java
```

输出内容

/usr/bin/java:  symbolic link to **/etc/alternatives/java**

- symbolic link 表示是一个链接, 连接到实际执行的文件或另一个连接
- 这个实例中, /usr/bin/java是一个链接, 指向的/etc/alternatives/java仍然是一个连接

```bash
file /etc/alternatives/java
```

/etc/alternatives/java: symbolic link to **/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64/jre/bin/java**

```bash
file /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64/jre/bin/java
```

/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64/jre/bin/java: **ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, ...**

- ELF 64-bit LSB executable 表示是一个可执行文件
- 所以java命令最终执行的是/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64/jre/bin/java

当/usr/lib/jvm下有多个版本的java时, 可以通过alternatives设置默认的java版本

```bash
alternatives --config java
```

## 结论

- java命令 $\rightarrow$ /usr/bin/java $\rightarrow$ /etc/alternatives/java $\rightarrow$ /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64/jre/bin/java
- **alternatives/java**介于**java命令**和**实际执行的java文件之间**
- `alternatives`命令可以设置默认的java版本

## 使用

```bash
man alternatives
```