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

### 3.5 操作符

#### 3.5.5 指数操作符

`Math.pow()` 现在有了自己的操作符 `**`，结果是一样的:

```js
console.log(Math.pow(3, 2); // 9
console.log(3 ** 2); // 9
```

指数赋值操作符 `**=`

```js
let squared = 3;
squared **= 2;
console.log(squared); // 9
```

## 第 6 章 集合引用类型

### 6.2 Array

#### 6.2.1 创建数组

`from()` 用于将类数组结构转换为数组实例。

```js
// 字符串会被拆分为单字符数组
console.log(Array.from('Matt')); // ["M", "a", "t", "t"]

// Array.from()对现有数组执行浅复制
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);
console.log(a1); // [1, 2, 3, 4]
alert(a1 === a2); // false

// Array.from()还接收第二个可选的映射函数参数
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1, (x) => x ** 2);
// 可以接收第三个可选参数，用于指定映射函 数中 this 的值。但这个重写的 this 值在箭头函数中不适用
const a3 = Array.from(
    a1,
    function(x) {
        return x ** this.exponent;
    },
    { exponent: 2 }
);
console.log(a2); // [1, 4, 9, 16]
console.log(a3); // [1, 4, 9, 16]
```

`of()` 用于将一组参数转换为数组实例。

```js
console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
```

```js
function list() {
    return Array.prototype.slice.call(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

#### 6.2.5 迭代器方法

-   `keys()` 返回数组索引的迭代器
-   `values()` 返回数组元素的迭代器
-   `entries()` 返回索引/值对的迭代器

```js
const a = ['foo', 'bar', 'baz', 'qux'];
// 因为这些方法都返回迭代器，所以可以将它们的内容
// 通过Array.from()直接转换为数组实例
const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aEntries = Array.from(a.entries());
console.log(aKeys); // [0, 1, 2, 3]
console.log(aValues); // ["foo", "bar", "baz", "qux"]
console.log(aEntries); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]
```

#### 6.2.6 复制和填充方法

-   `fill()`

```js
const zeroes = [0, 0, 0, 0, 0];
// 用 5 填充整个数组
zeroes.fill(5);
console.log(zeroes); // [5, 5, 5, 5, 5]
zeroes.fill(0); // 重置
// 用 6 填充索引大于等于 3 的元素
zeroes.fill(6, 3);
console.log(zeroes); // [0, 0, 0, 6, 6]
zeroes.fill(0); // 重置
// 用7填充索引大于等于1且小于3的元素
zeroes.fill(7, 1, 3);
console.log(zeroes); // [0, 7, 7, 0, 0];
zeroes.fill(0); // 重置
// 用8填充索引大于等于1且小于4的元素
// (-4 + zeroes.length = 1)
// (-1 + zeroes.length = 4)
zeroes.fill(8, -4, -1);
console.log(zeroes); // [0, 8, 8, 8, 0];
```

-   `copyWithin()`

会按照指定范围浅复制数组中的部分内容，然后将它们插入到指 定索引开始的位置

#### 转换方法

> 如果数组中某一项是 null 或 undefined，则在 join()、toLocaleString()、 toString()和 valueOf()返回的结果中会以空字符串表示。

-   `toLocaleString()`
-   `toString()`
-   `valueOf()`
-   `join()`
