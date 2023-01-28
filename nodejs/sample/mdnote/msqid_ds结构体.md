# msqid_ds
- 消息队列的权限，时间， 进程id，长度等信息

```c
struct msqid_ds {
  struct ipc_perm msg_perm;     /* Ownership and permissions */
  time_t          msg_stime;    /* Time of last msgsnd(2) */
  time_t          msg_rtime;    /* Time of last msgrcv(2) */
  time_t          msg_ctime;    /* Time of last change */
  unsigned long   __msg_cbytes; /* Current number of bytes in
                                   queue (nonstandard) */
  msgqnum_t       msg_qnum;     /* Current number of messages
                                   in queue */
  msglen_t        msg_qbytes;   /* Maximum number of bytes
                                   allowed in queue */
  pid_t           msg_lspid;    /* PID of last msgsnd(2) */
  pid_t           msg_lrpid;    /* PID of last msgrcv(2) */
};
```

- 权限信息储存在[[ipc_perm结构体]]中