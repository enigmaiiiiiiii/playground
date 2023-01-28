# linux中的提取命令

```bash
grep [OPTION...] PATTERNS [FILE...]
grep [OPTION...] -e PATTERNS ... [FILE...]
grep [OPTION...] -f PATTERN_FILE ... [FILE...]
```

- 打印匹配PATTERNS的行

- 在原命令所列信息中提取含有关键字的信息
- `grep [-a/c/i/n/v] 'string' filename`
  - `-a`:
  - `-c`:
  - `-i`:
  - `-n`:
  - `-v`: 反向选择
- 通常组合使用
