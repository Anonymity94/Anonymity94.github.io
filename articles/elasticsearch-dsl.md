---
createTime: 2020-08-06T18:10:00+08:00
tags:
  - Elasticsearch
---

# Elasticsearch 搜索语句

<ArticleMeta />

## `sum`

> https://www.elastic.co/guide/en/elasticsearch/reference/7.8/search-aggregations-metrics-sum-aggregation.html#

```json
GET /i_test_index-2020-08-06/_search
{
	"query": {
		"match_all": {}
	},
	"size": 0,
	"track_total_hits": true,
	"aggs": {
		"total_packets": {
			"sum": {
				"field": "total_packets"
			}
		}
	}
}
```

## `histogram`

> https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-histogram-aggregation.html

```json
GET /i_test_index-2020-08-06/_search
{
	"query": {
		"match_all": {}
	},
	"size": 0,
	"track_total_hits": true,
	"aggs": {
		"total_packets": {
			"histogram": {
				"field": "total_packets",
				"interval": 50
			}
		}
	}
}
```

## `date_histogram`

> https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-datehistogram-aggregation.html

```json
GET /i_test_index-2020-08-06/_search
{
	"query": {
		"match_all": {}
	},
	"size": 0,
	"track_total_hits": true,
	"aggs": {
		"sales_over_time": {
			"date_histogram": {
				"field": "start_time",
				"calendar_interval": "hour"
			}
		}
	}
}
```