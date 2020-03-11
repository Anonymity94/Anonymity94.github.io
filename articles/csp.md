---
createTime: 2020-03-10T11:41:20+08:00
tags:
---

# CSP 策略

<ArticleMeta />

CSP（Content Security Policy），"网页安全政策"，限制的是客户端可加载和执行资源的范围。

## 一. 设置内容

```json
Content-Security-Policy: default-src 'self'
```

这个是总体来说比较严格的，限制了所有的外部资源(`js`/`css`/`font`字体/`image`图片等)，都只能从当前域名加载。
如果同时设置某个单项限制（比如`font-src`）和`default-src`，前者会覆盖后者，即字体文件会采用 font-src 的值，其他资源依然采用`default-src`的值。

当然也可以只限制 js 脚本的加载范围，不关心`css`/`font`字体等资源

```json
Content-Security-Policy: script-src 'self'
```

## 二. 设置方法

前后端都是可以进行设置的。两者二选一即可。

- 前端在 meta 中可以设置

```
<meta http-equiv="Content-Security-Policy" content="default-src 'self';">
```

- 服务器设置

暂无


--- 

参考资料:

1. [Content Security Policy 入门教程 阮一峰](http://www.ruanyifeng.com/blog/2016/09/csp.html)
2. [前端安全配置之 Content-Security-Policy(csp)](https://www.cnblogs.com/heyuqing/p/6215761.html)
