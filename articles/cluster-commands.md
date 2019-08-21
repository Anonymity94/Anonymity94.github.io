---
createTime: 2019-04-29T14:38:53+08:00
tags:
  - etcd
  - mongo
  - redis
---

# 集群常用命名汇总

<ArticleMeta />

## Mongo

### 连接
```bash
[root@localhost ~]# /opt/mongo/mongodb-linux-x86_64-4.0.6/bin/mongo -u[username] -p[password] --authenticationDatabase admin admin
```

### 集群状态
```bash
replset:SECONDARY> rs.status()
```

## Redis
> 命令参考：[http://redisdoc.com/index.html](http://redisdoc.com/index.html)

### 连接

```bash
[root@localhost ~]# /usr/bin/redis-cli -a [password] -h [host] -p 6379
```

### 集群状态

```bash
127.0.0.1:6379>  info
```

### 查看所有客户端

```bash
127.0.0.1:6379> client list
```

### 连接哨兵

```bash
[root@localhost ~]# /usr/bin/redis-cli -a [password] -h [host] -p 26379
```

### 查看哨兵的主人

```bash
127.0.0.1:26379> sentinel master mymaster
```

## ETCD

> [etcd ctl 官方文档](https://github.com/etcd-io/etcd/tree/master/etcdctl#etcdctl)

### 查看所有的Key

```bash
[root@localhost ~]# ETCDCTL_API=3 /opt/etcd/etcd-v3.3.12-linux-amd64/etcdctl --endpoints=127.0.0.1:2379 get / --prefix
```

### 查看集群成员

```bash
[root@localhost ~]# ETCDCTL_API=3 /opt/etcd/etcd-v3.3.12-linux-amd64/etcdctl --endpoints=127.0.0.1:2379 member list
```

### 查看节点运行状态

```bash
[root@localhost ~]# ETCDCTL_API=3 /opt/etcd/etcd-v3.3.12-linux-amd64/etcdctl --endpoints=127.0.0.1:2379 endpoint --cluster health
```

### 查看集群状态
```bash
[root@localhost ~]# ETCDCTL_API=3 /opt/etcd/etcd-v3.3.12-linux-amd64/etcdctl --endpoints=127.0.0.1:2379 -w table endpoint --cluster status
```
