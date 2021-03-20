---
createTime: 2020-05-26T10:16:20+08:00
tags:
  - AST
  - DSL
---

# PEG.js



## 解析表达式类型

### `"literal"`、`'literal'`

匹配确切的文字字符串并返回。字符串语法与 `JavaScript中` 的相同。追加 `i` 字面使得比赛不区分大小写之后。

### `.`

精确匹配一个字符并将其作为字符串返回。

### `[characters]`

匹配一组字符，并将其作为字符串返回。可以使用与 `JavaScript` 字符串完全相同的方式对列表中的字符进行转义。字符列表还可以包含范围（例如，`[a-z]` 表示“所有小写字母”）。在字符前面加上 `^` 反转的字符集（例如，`[^a-z]` 表示“除小写字母外的所有字符”）。追加 `i` 字面使得比赛不区分大小写之后。


### `rule`

在表达式中引用其他rule, 然后与引用的rule进行匹配, 然后返回引用rule的匹配结果.

### `( expression )`

匹配子表达式并返回其匹配结果。

### `expression *`

匹配表达式的零个或多个重复，并在数组中返回其匹配结果。匹配是贪婪的，即解析器尝试尽可能多地匹配表达式。与正则表达式不同，没有回溯。

### `expression +`

匹配表达式的一个或多个重复，然后将其匹配结果返回到数组中。匹配是贪婪的，即解析器尝试尽可能多地匹配表达式。与正则表达式不同，没有回溯。

### `expression ?`

尝试匹配表达式。如果匹配成功，则返回其匹配结果，否则返回null。与正则表达式不同，没有回溯。

### `& expression`

尝试匹配表达式。如果匹配成功，则返回 undefined并且不消耗任何输入，否则认为匹配失败。

### `! expression`

尝试匹配表达式。如果undefined匹配失败，则返回 并且不消耗任何输入，否则认为匹配失败。

### `& { predicate }`

The predicate is a piece of JavaScript code that is executed as if it was inside a function. It gets the match results of labeled expressions in preceding expression as its arguments. It should return some JavaScript value using the return statement. If the returned value evaluates to true in boolean context, just return undefined and do not consume any input; otherwise consider the match failed.

The code inside the predicate can access all variables and functions defined in the initializer at the beginning of the grammar.

The code inside the predicate can also access location information using the location function. It returns an object like this:

```
{
  start: { offset: 23, line: 5, column: 6 },
  end:   { offset: 23, line: 5, column: 6 }
}
```

The start and end properties both refer to the current parse position. The offset property contains an offset as a zero-based index and line and column properties contain a line and a column as one-based indices.

The code inside the predicate can also access options passed to the parser using the options variable.

Note that curly braces in the predicate code must be balanced.

### `! { predicate }`

The predicate is a piece of JavaScript code that is executed as if it was inside a function. It gets the match results of labeled expressions in preceding expression as its arguments. It should return some JavaScript value using the return statement. If the returned value evaluates to false in boolean context, just return undefined and do not consume any input; otherwise consider the match failed.

The code inside the predicate can access all variables and functions defined in the initializer at the beginning of the grammar.

The code inside the predicate can also access location information using the location function. It returns an object like this:

```
{
  start: { offset: 23, line: 5, column: 6 },
  end:   { offset: 23, line: 5, column: 6 }
}
```

The start and end properties both refer to the current parse position. The offset property contains an offset as a zero-based index and line and column properties contain a line and a column as one-based indices.

The code inside the predicate can also access options passed to the parser using the options variable.

Note that curly braces in the predicate code must be balanced.

### `$ expression`

尝试匹配表达式。如果匹配成功，则返回匹配的文本而不是匹配结果。

### `label : expression`

匹配表达式, 然后将匹配结果存储在 `label` 里. `label`必须是一个 `JavaScript` 标识符.

### <code><em>expression<sub>1</sub></em> <em>expression<sub>2</sub></em> ... <em>expression<sub>n</sub></em></code>

匹配一系列表达式，然后将它们的匹配结果返回到数组中。

### `expression { action }`

Match the expression. If the match is successful, run the action, otherwise consider the match failed.

The action is a piece of JavaScript code that is executed as if it was inside a function. It gets the match results of labeled expressions in preceding expression as its arguments. The action should return some JavaScript value using the return statement. This value is considered match result of the preceding expression.

To indicate an error, the code inside the action can invoke the expected function, which makes the parser throw an exception. The function takes two parameters — a description of what was expected at the current position and optional location information (the default is what location would return — see below). The description will be used as part of a message of the thrown exception.

The code inside an action can also invoke the error function, which also makes the parser throw an exception. The function takes two parameters — an error message and optional location information (the default is what location would return — see below). The message will be used by the thrown exception.

The code inside the action can access all variables and functions defined in the initializer at the beginning of the grammar. Curly braces in the action code must be balanced.

The code inside the action can also access the text matched by the expression using the text function.

The code inside the action can also access location information using the location function. It returns an object like this:

```
{
  start: { offset: 23, line: 5, column: 6 },
  end:   { offset: 25, line: 5, column: 8 }
}
```

The start property refers to the position at the beginning of the expression, the end property refers to position after the end of the expression. The offset property contains an offset as a zero-based index and line and column properties contain a line and a column as one-based indices.

The code inside the action can also access options passed to the parser using the options variable.

Note that curly braces in the action code must be balanced.

### <code><em>expression<sub>1</sub></em> / <em>expression<sub>2</sub></em> / ... / <em>expression<sub>n</sub></em></code>

尝试匹配第一个表达式，如果不成功，请尝试第二个，以此类推。返回第一个成功匹配的表达式的匹配结果。如果没有表达式匹配，则认为匹配失败。

## 语法案例

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
- 规则名称必须符合 JavaScript 的[标识符规则](https://developer.mozilla.org/zh-CN/docs/Glossary/Identifier)

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

## 常用解析语句

### 空白
```
Whitespace
  = [ \t\n\r]*
```

### Boolean
```
Boolean
  = 'true' { return true; }
  / 'false' { return false; }
```

### 数字
```
Integer "Integer"
  = digits:[0-9]+ { return parseInt(digits.join(""), 10); }
```

## Splunk Quick Reference Guide
> [pdf在线预览](https://www.splunk.com/pdfs/solution-guides/splunk-quick-reference-guide.pdf)

TODO

## 使用

[Splunk的SPL转ElasticSearch的DSL](https://github.com/Anonymity94/splunk-to-es)

## 参考

- [解析表达语法](https://en.wikipedia.org/wiki/Parsing_expression_grammar)
- [PEG.js 文档 [译]](https://zhuanlan.zhihu.com/p/123294460)
- [PEG.js Demo](https://github.com/pegjs/pegjs/tree/master/examples)
- [PEG Online](https://pegjs.org/online)
- [通过 PEG.js 实现一个 JSON Parser](https://www.codercto.com/a/45502.html)
- [正则表达式的回溯](https://www.cnblogs.com/leeego-123/p/11119416.html)
