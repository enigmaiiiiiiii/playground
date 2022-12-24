# Linux系统日志

- 系统日志rsyslogd
- rsyslogd主配置文件`etc/rsyslog.conf`
- 相关头文件`<syslog.h>`
- `syslog()`: 生成用户进程系统日志, 生成在`/dev/log`中
- `printk()`：打印内核日志至内核的环状缓存, 环状缓存的内容在`/proc/kmsg`中
- rsyslogd在接收到用户进程或内核输入的日志后，会把他们输出至某些特定的日志文件
  - 调试信息保存至`/var/log/debug`文件
  - 普通信息保存至`/var/log/messages`文件
  - 内核消息保存至`/var/log/kern.log`文件
  
  ## syslog函数
  
  
  ```c++
  #include <syslog.h>
  void syslog(int priority, const char* message, ...);
  ```
  
- 参数`priority`，设施值与日志级别的按位或，设施值的默认值是LOG_USER,
   LOG_USER设施值下的日志级别
    
    ```c++
    #include <syslog.h>
    #define LOG_EMERG     0 // 系统不可用
    #define LOG_ALERT     1 // 报警，须立即采取动作
    #define LOG_CRIT      2 // 
    #define LOG_ERR       3 //
    #define LOG_WARNING   4 // 
    #define LOG_NOTICE    5 // 
    #define LOG_INFO      6 // 信息
    #define LOG_DEBUG     7 // 调试
    ```
    
-  函数`void openlog(const char* ident, int logopt, int facility);`， 改变syslog的默认输出方式
      -  参数`ident`, 将被添加到日治消息的日期和时间之后的字符串，
      -  logopt参数对后续的syslog调用的行为进行配置, 取下列值的按位或 
      ```c++
      #define LOG_PID      0x01  // 在日志消息中包含程序PID
      #define LOG_CONS     0x02  // 如果消息不能记录到日志文件，则打印至终端
      #define LOG_ODELAY   0x04  // 延迟打开日志功能直到第一次调用syslog
      #define LOG_NDELAY   0x08  // 不延迟打开日志功能
      ```
      
     - `facility`参数: 修改syslog函数默认设施值
- 函数`int setlogmask(int maskpri);`, 用来过滤日志
  - 参数`maskpri`, 之地日志掩码值 
- 函数`void closelog();`, 关闭日志功能