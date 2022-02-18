---
createTime: 2021-04-17T18:00:00+08:00
hide: true
tags:
    - 面试题
---

# 前端面试题

## 前端缓存

> https://mp.weixin.qq.com/s/EyQKu3I_B71XKAzNWRKSgw

-   强缓存

由请求头中的 `Cache-Control` 和 `Expire` 两个字段控制。

我们会设置 Cache-Control 的值为 “public, max-age=xxx”，表示在 xxx 秒内再次访问该资源，均使用本地的缓存，不再向服务器发起请求。

-   协商缓存

有 ETag 和 Last-Modified 两个字段。Nginx 官方默认的 ETag 计算方式是为"文件最后修改时间 16 进制-文件长度 16 进制"。Express 中先判断 etag，再判断 last-modified

协商缓存最大的问题就是每次都要向服务器验证一下缓存的有效性。

对于大部分的场景都可以使用强缓存配合协商缓存解决，但是在一些特殊的地方可能需要选择特殊的缓存策略

- 对于某些不需要缓存的资源，可以使用 Cache-control: no-store ，表示该资源不需要缓存
- 对于频繁变动的资源，可以使用 Cache-Control: no-cache 并配合 ETag 使用，表示该资源已被缓存，但是每次都会发送请求询问资源是否更新。
- 对于代码文件来说，通常使用 Cache-Control: max-age=31536000 并配合策略缓存使用，然后对文件进行指纹处理，一旦文件名变动就会立刻下载新的文件

强缓存：200
协商缓存：如果没有更新返回304，如果有更新返回200

## webpack 中的 hash 模式

-   hash：跟整个项目的构建相关，构建生成的文件 hash 值都是一样的，只要项目里有文件更改，整个项目构建的 hash 值都会更改。
-   chunkhash：根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的 hash 值。
-   contenthash：由文件内容产生的 hash 值，内容不同产生的 contenthash 值也不一样。

## 懒加载

-   webpack + es6 的 import（原理是返回的一个 Promise）

原理：**webpack_require**.e，根据传入的 chunkId，去加载这个 chunkId 对应的异步 chunk 文件，它返回一个 promise。通过 jsonp 的方式使用 script 标签去加载。这个函数调用多次，还是只会发起一次请求 js 的请求。若已加载完成，这时候异步的模块文件已经被注入到立即执行函数的入参 modules 变量中了，这个时候和同步执行 import 调用**webpack_require**的效果就一样了（这个注入由 webpackJsonpCallback 函数完成）。此时，在 promise 的回调中再调用**webpack_require**.bind(null, "./src/asyncCommon1.js")(1) 就能拿到对应的模块，并且执行相关逻辑了(2)。

-   React.lazy + Suspense
-   webpack + ensure，已经被 import 取代了

## 单例模式

单例模式之所以这么叫，是因为它限制一个类只能有一个实例化对象。经典的实现方式是，创建一个类，这个类包含一个方法，这个方法在没有对象存在的情况下，将会创建一个新的实例对象。如果对象存在，这个方法只是返回这个对象的引用。

目的是为了预防全局污染，全局命名冲突的问题

```js
var mySingleton = (function() {
    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        // Singleton

        // Private methods and variables
        function privateMethod() {
            console.log('I am private');
        }

        var privateVariable = 'Im also private';

        var privateRandomNumber = Math.random();

        return {
            // Public methods and variables
            publicMethod: function() {
                console.log('The public can see me!');
            },

            publicProperty: 'I am also public',

            getRandomNumber: function() {
                return privateRandomNumber;
            },
        };
    }

    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function() {
            if (!instance) {
                instance = init();
            }

            return instance;
        },
    };
})();
```

## commonjs 和 es module 区别

-   commonJs 是被加载的时候运行，esModule 是编译的时候运行
-   commonJs 输出的是值的浅拷贝，esModule 输出值的引用
-   commentJs 具有缓存。在第一次被加载时，会完整运行整个文件并输出一个对象，拷贝（浅拷贝）在内存中。下次加载文件时，直接从内存中取值

## exports 和 module.exports 的区别

-   module.exports 默认值为{}
-   exports 是 module.exports 的引用
-   exports 默认指向 module.exports 的内存空间
-   require() 返回的是 module.exports 而不是 exports
-   若对 exports 重新赋值，则断开了 exports 对 module.exports 的指向

## tree sharking 原理

## compose

```js
var compose = function() {
    // TODO:
    var _arguments = arguments;
    console.log(arguments);
    var length = _arguments.length;
    if (length === 0) {
        throw new Error('必须传入一个参数');
    }
    var i = length;
    while (i--) {
        if (typeof _arguments[i] !== 'function') {
            throw new TypeError('not a funciton');
        }
    }

    return function() {
        var j = length - 1;
        console.log('arguments', arguments);
        var result = length
            ? _arguments[j].apply(this, arguments)
            : arguments[0];

        while (j--) {
            result = _arguments[j].call(this, result);
        }

        return result;
    };
};
var add1 = (x) => x + 1;
var mul5 = (x) => x * 5;

compose(mul5, add1)(2);
```

## 模拟 new 的实现

```js
function objectFactory(_Constructor, ...args) {
    console.log('1');
    var obj = Object.create(null);
    obj.__proto__ = _Constructor.prototype;
    var ret = _Constructor.apply(obj, args);
    return typeof ret === 'object' ? rest || obj : obj;
}

function Otaku(name, age) {
    this.name = name;
    this.age = age;
}

var person = new objectFactory(Otaku, 'zhangsan', 14);
```

## 模拟 call

```js
Function.prototype.call2 = function(context) {
    var context = context || window;
    context.fn = this;
    console.log(this);

    var args = [];
    for (let index = 1; index < arguments.length; index++) {
        args.push('arguments[' + index + ']');
    }

    var result = eval('context.fn(' + args + ')');
    delete context.fn;
    return result;
};

var value = 2;
var obj = { value: 1 };
function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age,
    };
}
bar.call2(null);
bar.call2(obj, 'zhangsan', 10);
```

## 模拟 apply

```js
Function.prototype.apply2 = function(context, arr) {
    var context = context || window;
    context.fn = this;
    var result = undefined;
    if (!arr) {
        result = context.fn();
    } else {
        var args = [];
        for (let index = 0; index < arr.length; index++) {
            args.push('arr[' + index + ']');
        }
        result = eval('context.fn(' + args + ')');
    }
    delete context.fn;
    return result;
};
var foo = function(name) {
    console.log(arguments);
    console.log(name);
};
foo.apply2({}, ['李四']);
```

## 模拟 bind

```js
Function.prototype.bind2 = function(ctx) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function() {
        var bindArrs = Array.prototype.slice.call(arguments);
        self.apply(this instanceof fBound ? this : ctx, args.concat(bindArrs));
    };

    fBound.prototype = self.prototype;

    return fBound;
};

function bar() {}

var bindFoo = bar.bind2(null);
bindFoo.prototype.value = 1;
console.log(bar);
```

## 模拟模版的实现

```js
function render(template, data) {
    const ks = Object.keys(data);
    const vs = ks.map((k) => data[k]);

    const t = `return \`${template}\``;

    const f = new Function(...ks, t);
    return f(...vs);
}

const template = '${ name }, ${value}(${percent} | Top ${array[2]})';

const data = {
    name: 'Hangzhou',
    value: 1200,
    percent: '13%',
    array: [1, 2, 3, 4],
};

console.log(render(template, data));
```

## instanceof 的原理

用于判断某个实例是否属于某构造函数

在继承关系中用来判断一个实例是否属于它的父类型或者祖先类型的实例

```js
// L表示对象实例，R表示构造函数或者父类型实例
function instance_of(L, R) {
    // 取R的显式原型，取L的隐式原型
    var O = R.prototype;
    L = L.__proto__;
    // 循环遍历，进行判断②中的两个值是否相等，相等返回true，不相等继续查找L的原型链
    while (true) {
        if (L === null) return false;
        if (O === L) return true;
        L = L.__proto__;
    }
}
```

## 设计模式

> https://juejin.cn/post/6844903503266054157

## webpack 的 loader 和 plugin 的区别是什么？

-   对于 loader，它是一个转换器，将 A 文件进行编译形成 B 文件，这里操作的是文件，比如将 A.scss 转换为 A.css，单纯的文件转换过程
-   plugin 是一个扩展器，它丰富了 webpack 本身，针对是 loader 结束后，webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点，执行广泛的任务

## 数组去重

```js
function uniqueArray(array) {
    return array.filter((item, index, array) => {
        return array.indexOf(item) === index;
    });
}
```

```js
function uniqueArray(array) {
    return arr.reduce(
        (prev, cur) => (prev.includes(cur) ? prev : [...prev, cur]),
        []
    );
}
```

```js
function uniqueArray(array) {
    // return [...new Set(array)];
    return Array.from(new Set(array));
}
```

## 函数科里化

```js
function curry(fn, args) {
    var length = fn.length;

    args = args || [];

    return function() {
        var _args = args.slice(0),
            arg,
            i;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];

            _args.push(arg);
        }
        if (_args.length < length) {
            return curry.call(this, fn, _args);
        } else {
            return fn.apply(this, _args);
        }
    };
}

var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
});

fn('a', 'b', 'c'); // ["a", "b", "c"]
fn('a', 'b')('c'); // ["a", "b", "c"]
fn('a')('b')('c'); // ["a", "b", "c"]
fn('a')('b', 'c'); // ["a", "b", "c"]

// =======
var curry = (fn) =>
    (judge = (...args) =>
        args.length === fn.length ? fn(...args) : (arg) => judge(...args, arg));
```

## 偏函数

```js
var _ = {};

function partial(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        var position = 0,
            len = args.length;
        for (var i = 0; i < len; i++) {
            args[i] = args[i] === _ ? arguments[position++] : args[i];
        }
        while (position < arguments.length) args.push(arguments[position++]);
        return fn.apply(this, args);
    };
}
```

## 防抖

> https://github.com/mqyqingfeng/Blog/issues/22

```js
function debounce(func, wait, immediate) {
    var timeout, result;

    var debounced = function() {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function() {
                timeout = null;
            }, wait);
            if (callNow) result = func.apply(context, args);
        } else {
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        }
        return result;
    };

    debounced.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}
```

## Promise 实现

[实现一个完美符合 Promise/A+规范的 Promise](https://github.com/forthealllight/blog/issues/4)
