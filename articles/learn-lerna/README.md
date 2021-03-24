---
createTime: 2021-03-10T14:14:20+08:00
tags:
  - 工具
---

# 使用 `Lerna` 管理项目


## monorepo 项目管理模式


```
.
├── lerna.json
├── node_modules
├── package.json
├── packages
│   ├── module-1
│   ├── module-2
│   └── module-3
└── yarn.lock

```


## Lerna 命令介绍

- 初始化项目

```bash
lerna init
```

- 创建新的包
```bash
lerna create <package-name>
```

```bash
$ lerna create @test-module/log

info cli using local version of lerna
lerna notice cli v4.0.0
lerna info versioning independent
```

- 显示 `package` 列表

```bash
lerna list
```

```
# 输出
info cli using local version of lerna
lerna notice cli v4.0.0
lerna info versioning independent
@test-module/cli
@test-module/utils
lerna success found 2 packages
```

- 安装依赖

```bash
lerna bootstrap
```

- 会把所有的包安装到根 `node_modules`
- 链接相互依赖的库到具体的目录



## 参考

- https://danluu.com/monorepo/
- https://lernajs.bootcss.com/