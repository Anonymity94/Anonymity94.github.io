---
createTime: 2020-11-23T16:51:20+08:00
tags:
  - 可视化
  - BI
---

# Superset


## 安装
```sh
git clone https://gitee.com/mirrors/Superset.git
# or
# git clone https://github.com/apache/incubator-superset.git

cd Superset/

docker-compose up -d
```

## Connecting to Elasticsearch

```
https://superset.apache.org/docs/databases/elasticsearch
```


## 使用中发现的问题
- 时间范围选择相对时间时，存在问题，无法正确显示为本地时区的时间
- 图表单位计算，可以格式化处理数字、百分比，但是无法进行带宽、流量大小（`Bytes`）的计算，可选择的换算方式有限
- 图表 `ToolTip` 提示中，无法指定数字后面的单位
- 无法建立双 Y 轴图表
