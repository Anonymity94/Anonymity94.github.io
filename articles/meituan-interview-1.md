---
createTime: 2021-04-08T20:30:00+08:00
sidebar: false
hide: true
tags:
    - 面试
---

# 美团面试（一）

-   自我介绍

-   介绍项目经历

-   介绍在项目中自己担任的工作

-   介绍自己在项目中做了哪些优化，对项目有反哺作用

-   对 `React Router` 有了解吗，前端路由的原理介绍一下

-   在 `Antd Design Pro` 上有哪些改造？路由权限怎么实现的？

-   hash 模式下，如何实现锚点？

-   对 webpack 的优化改动

-   按需加载，`import` 被 `babel` 转成了什么，为什么可以实现按需加载？

-   编程题

```js
//两个函数的组合
var compose = function() {
    // TODO:
};
var compose = (f, g) => (x) => f(g(x));
var add1 = (x) => x + 1;
var mul5 = (x) => x * 5;

compose(mul5, add1)(2); // =>15
```

::: details 答案

```js
var compose = function() {
    var _arguments = arguments;
    var length = _arguments.length;
    if (length === 0) {
        throw new Error('必须传入一个参数');
    }
    var i = legnth;
    while (i--) {
        if (typeof _arguments[i] !== 'function') {
            throw new TypeError('not a funciton');
        }
    }

    return function() {
        var j = length - 1;
        var result = length
            ? _arguments[index].apply(this, arguments)
            : arguments[0];

        while (j--) {
            result = _arguments[j].call(this, result);
        }

        return result;
    };
};
```

:::
