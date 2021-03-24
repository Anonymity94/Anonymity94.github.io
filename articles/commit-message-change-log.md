---
createTime: 2021-03-11T11:46:00+08:00
tags:
  - Git
---

# 优化 Commit message 和 Change log


- [husky](https://www.npmjs.com/package/husky): git hooks工具

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)

使用 `conventional-changelog-cli` 在约定式提交的几处上生成 `changelog`。

不会覆盖以前任何的日志，基于上次提交生成新的 `changelog。`

```bash
conventional-changelog -p angular -i CHANGELOG.md -s
```
如果是第一次使用该工具，想生成历史所有的 changelog，你可以

```bash
conventional-changelog -p angular -i CHANGELOG.md -s -r 0
```

测试源码[commit-message-change-log](https://github.com/Anonymity94/commit-message-change-log)

## 参考
- [阮一峰 - Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)