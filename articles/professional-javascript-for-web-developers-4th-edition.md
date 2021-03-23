---
createTime: 2021-03-20T22:04:07+08
tags: 
	- JS基础
---

# JavaScript 高级程序设计(第 4 版)

## 第三章 语言基础

### 3.4 数据类型

#### 3.4.3 Null 类型

> Null 类型同样只有一个值，即特殊值 null。
>
> 逻辑上讲，null 值表示一个空对象指针，这也是给 typeof 传一个 null 会返回"object"的原因

```js
typeof null; // "object"
```

#### 3.4.5 Number 类型

```js
parseInt('1234blue'); // 1234
parseInt(''); // NaN

parseInt('10', 2); // 2，按 2 进制解析
```

#### 3.4.6 String 类型

```js
let num = 10;
console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"
console.log(num.toString(8)); // "12"
console.log(num.toString(10)); // "10"
console.log(num.toString(16)); // "a"
```
