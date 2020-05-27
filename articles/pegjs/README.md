---
createTime: 2020-05-26T10:16:20+08:00
tags:
  - AST
  - DSL
---

# PEG.js

<ArticleMeta />

## 语法介绍


```
Integer
  = [0-9]+ {
    return parseInt(text());
  }
```

- `=` 符合后面表示对非终结符号的定义
- `+` 符合表示匹配一个或多个。`[0-9]+` 表示需要由一个到多个 0 到 9 的整数组成（语义和正则表达式类似）
- `{...}` 包裹的块状语句是一个 JavaScript 函数片段，用以处理前面得到的解析结果
- `text()` 用来获取解析到的文本

---

```
Value
  = Object
  / Array
  / String
  / Number
  / Boolean
  / Null
```
- `/` 是选择操作符。
在不满足前者的匹配条件时，会使用后面的匹配规则，类似于正则表达式中的 `|` 操作符

---

- 支持空白符号分隔
- 规则名称必须符合JavaScript的[标识符规则](https://developer.mozilla.org/zh-CN/docs/Glossary/Identifier)

---

```
{
  function makeInteger(o) {
    return parseInt(o.join(""), 10);
  }
}
integer "integer"
  = digits:[0-9]+ { return makeInteger(digits); }
```

- 第一个规则之前可以设置一个初始化器, 初始化器由花括号 (`{`和 `}`) 和花括号内的 `JavaScript` 代码组成。初始化器会在 `parser` 开始解析之前被执行。初始器里定义的变量和方法可以被后续的 `rule` 访问到。初始器可以通过访问 `options` 参数访问到传递给 `parser` 的参数。初始化器必须由大括号括起来, 缺一不可。
- `a:b`，可以理解为设置别名，`a`可以来代替`b`。
- `"integer"` 是描述信息，当你写的字符串不符合文法定义的时候，会根据描述信息生成对应的错误。

---


TODO


## 参考
- [解析表达语法](https://en.wikipedia.org/wiki/Parsing_expression_grammar)
- [PEG.js 文档 [译]](https://zhuanlan.zhihu.com/p/123294460)
- [PEG.js Demo](https://github.com/pegjs/pegjs/tree/master/examples)
- [通过 PEG.js 实现一个 JSON Parser](https://www.codercto.com/a/45502.html)
- [正则表达式的回溯](https://www.cnblogs.com/leeego-123/p/11119416.html)