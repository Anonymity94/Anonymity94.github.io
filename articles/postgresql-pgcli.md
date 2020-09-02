---
createTime: 2020-09-02T15:04:07+08
tags: 
	- PostgreSQL
---

# PostgreSQL命令行工具 - pgcli

<ArticleMeta />

## 连接数据库


```sh
psql -U <user> -d <database>
```

## 列出数据库

```sh
\l
```

## 切换数据库

```sh
\c <数据库>
```

## 列出表名

```sh
\d
```

## 展示表格中的数据

```sh
select * from <表名>
```

```sh
table <表名>
```

## 参考

- [pgcli](https://www.pgcli.com/)