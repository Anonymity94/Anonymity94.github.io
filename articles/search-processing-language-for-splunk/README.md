---
createTime: 2020-06-29T16:35:20+08:00
tags:
  - DSL
---

# Splunk的SPL

<ArticleMeta />

::: warning
未完成
:::

## 管道符`|`

`|` 表示上一个命令的输出作为下一个命令的输入

```
sourcetype=access _ combined error | top 5 uri
```

## Common Search Commands



| Command              | Description                                                  |      |
| -------------------- | ------------------------------------------------------------ | ---- |
| **chart/ timechart** | Returns results in a tabular output for (time-series) charting. |      |
| **dedup**            | Removes subsequent results that match a specified criterion. |      |
| **eval**             | Calculates an expression.See COMMON EVAL                     |      |
| **fields**           | FUNCTIONS.Removes fields from search results.                |      |




## 参考
- [SQLtoSplunk](https://docs.splunk.com/Documentation/Splunk/6.5.0/SearchReference/SQLtoSplunk)
