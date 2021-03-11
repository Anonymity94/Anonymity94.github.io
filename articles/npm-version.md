---
createTime: 2021-03-11T14:34:00+08:00
tags:
  - Git
---

# npm version

<ArticleMeta />

## 语义化版本

版本号格式: `主版本号.次版本号.修订号`

版本号递增规则如下：

- 主版本号：当你做了不兼容的 API 修改，
- 次版本号：当你做了向下兼容的功能性新增，
- 修订号：当你做了向下兼容的问题修正。

先行版本号及版本编译元数据可以加到 `主版本号.次版本号.修订号` 的后面，作为延伸。

## npm version

命令行中输入 `npm version -h` 查看可以使用的命令

```sh
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]
(run in package dir)

'npm -v' or 'npm --version' to print npm version (7.6.1)
'npm view <pkg> version' to view a package's published version
'npm ls' to inspect current package/dependency versions

alias: verison
```



```
major: 主版本号
premajor: 预主版本
minor: 次版本号
preminor: 预次版本
patch: 修订号
prepatch: 预修订版
prerelease: 预发布版本
```


| 命令                     | 描述                                                         | 结果                                                 |
| ------------------------ | ------------------------------------------------------------ | ---------------------------------------------------- |
| `npm version prerelease` | 预发布版本                                                   | `v1.0.0` => `v1.0.1-0`<br />`v1.0.1-0` => `v1.0.1-1` |
| `npm version prepatch`   | 预修订号<br />直接升级修订号，增加预发布号为0                | `v1.0.1-1` => `v1.0.2-0`                             |
| `npm run preminor`       | 预次版本<br />直接升级次版本，修订号置为0，增加预发布号为0   | `v1.0.2-0` => `v1.1.0-0`                             |
| `npm version premajor`   | 预主版本<br />直接升级主版本号，次版本号、修订号置为0，增加预发布号为0 | `v1.1.0-0` => `v2.0.0-0`                             |
| `npm version patch`      | 升级修订号                                                   | `v2.0.0-0` => `v2.0.0`<br />`v2.0.0` => `v2.0.1`     |
| `npm version minor`      | 升级次版本号                                                 | `v2.0.1` => `v2.1.0`                                 |
| `npm version major`      | 升级主版本                                                   | `v2.1.0` => `v3.0.0`                                 |




## 参考

- [语义化版本2.0.0](https://semver.org/lang/zh-CN/)
- [npm-version](https://docs.npmjs.com/cli/v7/commands/npm-version)
- [npm version](https://www.axihe.com/api/npm/cli/npm-version.html)

