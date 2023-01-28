# ipc_perm结构

```c
struct ipc_perm {
  key_t          __key;       /* Key supplied to msgget(2) */
  uid_t          uid;         /* Effective UID of owner */
  gid_t          gid;         /* Effective GID of owner */
  uid_t          cuid;        /* Effective UID of creator */
  gid_t          cgid;        /* Effective GID of creator */
  unsigned short mode;        /* Permissions */
  unsigned short __seq;       /* Sequence number */
};
```

- mode的最低9位设置为flag参数的最低9位
