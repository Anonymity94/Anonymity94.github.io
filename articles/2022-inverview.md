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
- 算法题： 求数组交集
- 反问环节
  - 部门业务：大数据、可视化、自检、巡检
  - 根据面试过程，麻烦给出建议：知识面很广，底子很好，希望能保持对源码的深入，成为某个领域的专家
  - 是否方便给面试过程打分：技术 7 分，表达能力满分

```js
// 求交集
// 输入: [[1,3],[2,4],[2,4],[10,11]]
// [1,3] 表示 从 1 到 3，[2,4] 表示从 2 到 4，这 2 个能连起来，所以可以合并为成[1,4]....
// 所以最后输出为：[[1,4],[10,11]]

function test(arr) {
  // 数组里只有第一个
  let result = [arr[0]];

  // 从第二个开始
  for (let index = 1; index < arr.length; index++) {
    const item = arr[index];

    let findRage = false;
    for (let j = 0; j < result.length; j++) {
      const resultItem = result[j];
      // 如果不在范围内，就比较下一个
      if (item[0] > resultItem[1]) {
        continue;
      } else {
        findRage = true;
        resultItem[1] = item[1];
        break;
      }
    }

    // 如果都没有找到，就新增进去一个
    if (!findRage) {
      result.push(item);
    }
  }

  return result;
}

console.log(
  test([
    [1, 3],
    [2, 4],
    [2, 4],
    [10, 11]
  ])
);
```

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
