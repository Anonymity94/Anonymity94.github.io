---
createTime: 2022-03-31T18:00:00+08:00
tags:
  - 面经
---

# 2022 年面试过程

## 百度

### 一面

> 岗位：ACG 智慧工业事业部
>
> 结果：通过，但 HC 被锁不再推进了。GoodGame

- 自我介绍
- 聊下 React Hooks 原理
- 聊下跨域，如何发送 cookie
- 聊下 webpack 优化
- React 源码
- React 16.8 之前之后的对比
- 算法题：[LeetCode-56. 合并区间](https://leetcode-cn.com/problems/merge-intervals/)
- 反问环节
  - 部门业务：大数据、可视化、自检、巡检
  - 根据面试过程，麻烦给出建议：知识面很广，底子很好，希望能保持对源码的深入，成为某个领域的专家
  - 是否方便给面试过程打分：技术 7 分，表达能力满分

## 字节跳动

### 一面

> 岗位：（资深）前端开发工程师-销售系统-EA customer 360
>
> 结果：通过

- 自我介绍
- 技术选型是怎么考虑的
- 团队管理是怎么考虑的，举一个 case
- 长期需求问题和短期需求问题碰到了哪些
- 你是如何安排开发工作的，请详细聊聊
- 怎么把控开发进度、评估风险
- 如何采集用户行为
- React 和 Vue 的对比：我是从性能角度分析的
- 小程序
- H5
- 场景题：现在有一个网页打开很慢，要这么定位
- 编程题：实现 `EventEmitter`
- 反问环节：
  - 大厂主要看中候选人的哪些品质：技术深度、广度、项目管理、项目理解力
  - 是否方便给打分：不是很方便，不过可以透露一些，由于工作的原因有些技术实践不了之外，看得出来是有意识的在积累技术，很有潜力。

### 二面

- 自我介绍
- 看你简历，你说用 Hooks 替换 Function，用 TS 重构 js，请详细聊一下你是怎么想的
- inline 元素中哪些属性生效：width、height、padding、margin
- relative 元素是怎么定位的
- 一个非定高、非定宽的元素如何实现在窗口垂直居中、左右居中
- content-length 的含义
- cookie 和 localStorage 的区别
- addEventListener 的执行顺序
- 如果使用 `useCapture = true`, 一个 div 里面包含一个 Button，2 个元素都绑定点击事件，点击 Button 的时候，执行顺序是什么
- 编程题

```js
for (var i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 问题1：输出结果是什么？为什么
// 问题2：请改造成正确的输出
// 问题3：请改造成 1->2->3->4->5 每个输出都等待 1s
```

- 编程题

```
标题找旋转数组的中位数题目描述有一个有序数组如：1，2，3，4，5，6，7，
随机选一个点比如 5，反转变成：5，6，7，1，2，3，4
对于上面翻转后的数组，求它的中位数。
```

### 三面

- 自我介绍
- 介绍项目中的前端部分
- 看输出

```js
var length = 10;
function fn() {
  return this.length + 1;
}
var obj = {
  length: 5,
  test1: function() {
    return fn();
  }
};
obj.test2 = fn;

console.log(obj.test1.call());
console.log(obj.test1());
console.log(obj.test2.call());
console.log(obj.test2());
```

- 编程题

```
回溯 + 剪枝
实现 `fn([['a','b'],['m','n'],['0','1']])` 排列
输出结果不是全排列，字符串重复的只保留一个，例如 'am0' 'ma0' 属于重复
```

- 编程题：[42. 接雨水](https://leetcode-cn.com/problems/trapping-rain-water/)
- 从 URL 输入到页面渲染全过程
- TCP 和 UDP 的区别
- 生成 DOM 树 + CSS 树之后的过程，越详细越好（没太明白问的什么）
- 如何减少回流、重绘，充分利用 GPU 加速渲染？
- 设计一个前端架构会考虑什么？换个角度问：考虑产品的可迭代性会考虑哪些因素？
- 自己的职业发展
