---
createTime: 2019-02-28T14:28:53+08:00
category: article
tags:
  - etcd
---

# ETCD测试

<ArticleMeta />

## 下载

```shell
https://github.com/etcd-io/etcd/releases
```

> 下载 [etcd-v3.3.12-linux-amd64.tar.gz](https://github.com/etcd-io/etcd/releases/download/v3.3.12/etcd-v3.3.12-linux-amd64.tar.gz)



## 解压

```shell
tar xzvf etcd-v3.3.12-linux-amd64.tar.gz -C /tmp/etcd-download-test --strip-components=1
```

## 启动

```shell
/tmp/etcd-download-test/etcd
```

## 查看版本

```shell
$ /tmp/etcd-download-test/etcd --version
$ ETCDCTL_API=3 /tmp/etcd-download-test/etcdctl version

$ curl 127.0.0.1:2379/version
```

## 操作

### Put

```shell
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl put test1 value1
OK
```

### GET

```shell
 # 新增，put方法如果key之前存在，则默认会先删除，再新建一个key
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl put a 测试
 
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl get a
```

```shell
# JSON输出
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl --write-out="json" get a

{"header":{"cluster_id":14841639068965178418,"member_id":10276657743932975437,"revision":5,"raft_term":2},"kvs":[{"key":"YQ==","create_revision":3,"mod_revision":5,"version":2,"value":"5rWL6K+VMg=="}],"count":1}
```

```shell
# get --prefix
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl put web1 value1
OK
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl put web2 value2
OK
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl put web3 value3
OK
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl get web --prefix
web1
value1
web2
value2
web3
value3
[root@localhost tmp]#
```

### DEL

```shell
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl del web1
1
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl get web1
[root@localhost tmp]# 
```

### Watch

```shell
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl put web1 newweb1
OK
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl put web1 newweb2
OK
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl put web1 new
OK
[root@localhost tmp]# ETCDCTL_API=3 etcd-download-test/etcdctl put web1 'new web2'
OK

```

```shell
[root@localhost ~]#  ETCDCTL_API=3 /tmp/etcd-download-test/etcdctl watch web1
PUT
web1
newweb1
PUT
web1
newweb2
PUT
web1
new
PUT
web1
new web2
```

