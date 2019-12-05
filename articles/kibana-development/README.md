---
createTime: 2019-11-21T10:11:40+08:00
tags:
  - kibana
---

# Kibana 源码解析

<ArticleMeta />

Kibana是开源的，我们可以从[elastic/kibana](https://github.com/elastic/kibana)中找到相关源码，这里我们选择`7.4.2`版本。

## 基本架构
[贡献指南](https://www.elastic.co/guide/cn/kibana/current/development.html)

## 技术栈

- 整体架构：`React` 和 `Angular` 结合使用。通过 [ngReact](https://github.com/ngReact/ngReact) 库将 `React` 内嵌在 `Angular` 中。

- UI框架：[eui](https://github.com/elastic/eui)

- 可视化：[D3](https://d3js.org/) 和 [Vega](https://vega.github.io/vega/)

`D3` 主要用于常规图表的配置和展示。

`Vega` 主要用于让用户使用`json`数据的形式配置图表，另外`Vega`也支持多种数据源，用户可以利用URL的形式导入非ES里面的数据源。

- 拖拽库：[React-Grid-Layout](https://github.com/STRML/react-grid-layout)

- 词云：[d3-cloud](https://github.com/jasondavies/d3-cloud)

## 主要功能

[Kibana 功能](https://www.elastic.co/cn/products/kibana/features)


TODO