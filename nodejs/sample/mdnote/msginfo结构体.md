# msginfo

```c
struct msginfo {
  int msgpool; /* Size in kibibytes of buffer pool
                  used to hold message data;
                  unused within kernel */
  int msgmap;  /* Maximum number of entries in message
                  map; unused within kernel */
  int msgmax;  /* Maximum number of bytes that can be
                  written in a single message */
  int msgmnb;  /* Maximum number of bytes that can be
                  written to queue; used to initialize
                  msg_qbytes during queue creation
                  (msgget(2)) */
  int msgmni;  /* Maximum number of message queues */
  int msgssz;  /* Message segment size;
                  unused within kernel */
  int msgtql;  /* Maximum number of messages on all queues
                  in system; unused within kernel */
  unsigned short int msgseg;
               /* Maximum number of segments;
                  unused within kernel */
};
```

