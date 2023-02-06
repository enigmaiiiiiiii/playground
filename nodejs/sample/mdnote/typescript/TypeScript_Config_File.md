# TSConfig

- TSConfig File可以命名为**tsconfig.json**或者**jsconfig.js**
- TSConfig file文件**所在的目录**表明该目录是一个TypeScript或JavaScript**项目的根目录**
TSConfig file in a directory indicate that the directory is the root of a TypeScript or JavaScript project.

初始化一个TSConfig file

```bash
tsc --init
```

## strict

```json
{
    "compilerOptions": {
        "strict": true
    }
}
```

- true: all on
- noImplicitAny:
- strictNullChecks: 是否处理null和undefined

