# semid_ds

- 信号量集合结构体

```c
struct semid_ds {
    struct ipc_perm sem_perm;  /* Ownership and permissions */
    time_t          sem_otime; /* Last semop time */
    time_t          sem_ctime; /* Last change time */
    unsigned long   sem_nsems; /* No. of semaphores in set */
};
```

- 成员
  - sem_perm: [[ipc_perm结构体]]
  - sem_otime: 最后一次操作时间
  - sem_ctime: 最后一次改变的时间
  - sem_nsems: 集合中信号量个数
  
## [[信号量结构体]]
