---
createTime: 2019-05-08T14:23:53+08:00
tags: 
	- mongo
---

# Mongo副本集

<ArticleMeta />

> 安装参考：
> [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/)


> 测试服务器
```
10.0.0.155
10.0.0.156
10.0.0.157
```

## 添加 `yum` 源

Configure the package management system (yum).
Create a `/etc/yum.repos.d/mongodb-org-4.0.repo` file so that you can install MongoDB directly using yum:

````shell
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
````

## 安装

````shell
sudo yum install -y mongodb-org
````

## 查看安装的位置

```shell
[root@localhost ~]# whereis mongod
mongod: /usr/bin/mongod /etc/mongod.conf /usr/share/man/man1/mongod.1
```

## 每台服务器建立副本集测试文件夹

````shell
#存放整个mongodb文件
mkdir -p /data/mongodbtest/replset

# 配置文件
touch /data/mongodbtest/replset/mongod.conf
 
# 存放mongodb数据文件
mkdir -p /data/mongodbtest/replset/data

# 存放mongodb日志文件
mkdir -p /data/mongodbtest/replset/log
touch /data/mongodbtest/replset/log/mongodbtest.log
 
````

## 修改配置文件

```bash
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path: /data/mongodbtest/replset/log/mongodbtest.log # 日志位置

# Where and how to store data.
storage:
  dbPath: /data/mongodbtest/replset/data # 数据库数据文件
  journal:
    enabled: true
#  engine:
#  mmapv1:
#  wiredTiger:

# how the process runs
processManagement:
  fork: true  # fork and run in background
  pidFilePath: /var/run/mongodb/mongod.pid  # location of pidfile
  timeZoneInfo: /usr/share/zoneinfo

# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1  # Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.


#security:

#operationProfiling:
replication:
    replSetName: replset # 副本集名称

#sharding:

## Enterprise-Only Options

#auditLog:

#snmp:
```

## 每台服务器启动 `mongodb`

```
# 启动服务
$ /usr/bin/mongod -f /data/mongodbtest/replset/mongod.conf

# 停止服务
$ use admin
$ db.shutdownServer()
```

## 初始化副本集

> [https://www.cnblogs.com/ljai/p/4898475.html](https://www.cnblogs.com/ljai/p/4898475.html)

```shell
$ mongo
> use admin
# 定义副本集配置
# 键“_id”对应的值必须与配置文件中的replicaction.replSetName一致
# priority代表权重[1,100]，大的被分配为主服务器，0永久不会变为主服务器
# arbiterOnly:true 代表其为仲裁节点

# 初始化副本集配置
> rs.initiate();
# 查看设置
> rs.conf();
# 添加节点
> rs.add("10.0.0.156:27017");
> rs.add("10.0.0.157:27017");

# 查看状态
> rs.status();

# 出问题的话可以重置配置，副本集重置
> conf=rs.conf()
> conf.members[0].host="10.0.0.155:27017";
> rs.reconfig(conf,{"force":true});

```

## 查看副本集状态

```shell
replset:PRIMARY> rs.status()
{
	"set" : "replset",
	"date" : ISODate("2019-02-21T08:24:43.540Z"),
	"myState" : 1,
	"term" : NumberLong(2),
	"syncingTo" : "",
	"syncSourceHost" : "",
	"syncSourceId" : -1,
	"heartbeatIntervalMillis" : NumberLong(2000),
	"optimes" : {
		"lastCommittedOpTime" : {
			"ts" : Timestamp(1550737479, 1),
			"t" : NumberLong(2)
		},
		"readConcernMajorityOpTime" : {
			"ts" : Timestamp(1550737479, 1),
			"t" : NumberLong(2)
		},
		"appliedOpTime" : {
			"ts" : Timestamp(1550737479, 1),
			"t" : NumberLong(2)
		},
		"durableOpTime" : {
			"ts" : Timestamp(1550737479, 1),
			"t" : NumberLong(2)
		}
	},
	"lastStableCheckpointTimestamp" : Timestamp(1550737423, 1),
	"members" : [
		{
			"_id" : 0,
			"name" : "10.0.0.155:27017",
			"health" : 1,
			"state" : 1,
			"stateStr" : "PRIMARY", # 主节点
			"uptime" : 714,
			"optime" : {
				"ts" : Timestamp(1550737479, 1),
				"t" : NumberLong(2)
			},
			"optimeDate" : ISODate("2019-02-21T08:24:39Z"),
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"electionTime" : Timestamp(1550736771, 1),
			"electionDate" : ISODate("2019-02-21T08:12:51Z"),
			"configVersion" : 91697,
			"self" : true,
			"lastHeartbeatMessage" : ""
		},
		{
			"_id" : 1,
			"name" : "10.0.0.156:27017",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY", # 副本节点
			"uptime" : 11,
			"optime" : {
				"ts" : Timestamp(1550737479, 1),
				"t" : NumberLong(2)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1550737479, 1),
				"t" : NumberLong(2)
			},
			"optimeDate" : ISODate("2019-02-21T08:24:39Z"),
			"optimeDurableDate" : ISODate("2019-02-21T08:24:39Z"),
			"lastHeartbeat" : ISODate("2019-02-21T08:24:41.964Z"),
			"lastHeartbeatRecv" : ISODate("2019-02-21T08:24:42.982Z"),
			"pingMs" : NumberLong(1),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"configVersion" : 91697
		},
		{
			"_id" : 2,
			"name" : "10.0.0.157:27017",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY", # 副本节点
			"uptime" : 3,
			"optime" : {
				"ts" : Timestamp(1550737479, 1),
				"t" : NumberLong(2)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1550737479, 1),
				"t" : NumberLong(2)
			},
			"optimeDate" : ISODate("2019-02-21T08:24:39Z"),
			"optimeDurableDate" : ISODate("2019-02-21T08:24:39Z"),
			"lastHeartbeat" : ISODate("2019-02-21T08:24:41.963Z"),
			"lastHeartbeatRecv" : ISODate("2019-02-21T08:24:42.789Z"),
			"pingMs" : NumberLong(1),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"configVersion" : 91697
		}
	],
	"ok" : 1,
	"operationTime" : Timestamp(1550737479, 1),
	"$clusterTime" : {
		"clusterTime" : Timestamp(1550737479, 1),
		"signature" : {
			"hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
			"keyId" : NumberLong(0)
		}
	}
}

```

# 测试数据同步

```shell
# ==========================================================================
#  测试一，PRIMARY(1)上写数据，然后关闭PRIMARY（1）
#  从新的PRIMARY（2）主机上查看，看数据是否同步
# ==========================================================================
# 1.1 进入 10.0.0.155
$ mongo

$ replset:PRIMARY> db.person.insert({"name": "张三", "age": 26})
# 输出 WriteResult({ "nInserted" : 1 })

$ replset:PRIMARY> db.person.insert({"name": "李四", "age": 23})
# 输出 WriteResult({ "nInserted" : 1 })

# 1.2 查看插入到 155 的数据
$ replset:PRIMARY> db.person.find()
{ "_id" : ObjectId("5c6e653c1a3a9f9119c3c24f"), "name" : "张三", "age" : 26 }
{ "_id" : ObjectId("5c6e65851a3a9f9119c3c250"), "name" : "李四", "age" : 23 }

# 1.3 停掉155数据库，连接156数据库,查看状态发现156 变成了PRIMARY
$ mongo
> rs.status();
# 1.4 156上查询数据，发现数据已经同步过来了
> db.person.find();
{ "_id" : ObjectId("5c6e653c1a3a9f9119c3c24f"), "name" : "张三", "age" : 26 }
{ "_id" : ObjectId("5c6e65851a3a9f9119c3c250"), "name" : "李四", "age" : 23 }

# ==========================================================================
#  测试二，在PRIMARY(2) 上写数据，然后关闭PRIMARY(2)
#  观察PRIMARY(1)是否会重新恢复成PRIMARY
#  观察PRIMARY(2)上写的数据是否会同步到PRIMARY(1)上
# ==========================================================================
# 2.1 156上插入新数据
$ replset:PRIMARY> db.person.insert({"name": "王五", "age": 25})
# 输出 WriteResult({ "nInserted" : 1 })
$ replset:PRIMARY> db.person.find()
{ "_id" : ObjectId("5c6e653c1a3a9f9119c3c24f"), "name" : "张三", "age" : 26 }
{ "_id" : ObjectId("5c6e65851a3a9f9119c3c250"), "name" : "李四", "age" : 23 }
{ "_id" : ObjectId("5c6e690375369bb4020815d7"), "name" : "王五", "age" : 25 }

# 2.2 启动155数据库，关闭156数据库，发现155数据库回重新变成在PRIMARY身份
# 2.3 进入155数据库，查询，发现156上新增的数据也被同步过来了
$ replset:PRIMARY> db.person.find()
{ "_id" : ObjectId("5c6e653c1a3a9f9119c3c24f"), "name" : "张三", "age" : 26 }
{ "_id" : ObjectId("5c6e65851a3a9f9119c3c250"), "name" : "李四", "age" : 23 }
{ "_id" : ObjectId("5c6e690375369bb4020815d7"), "name" : "王五", "age" : 25 }

# ==========================================================================
#  测试三，写入大量数据，观察数据同步是否成功
# ==========================================================================
# 3.1 155上新建一个集合 peopleTest-155
# 3.2 执行写库脚本,写入 100W 条数据
$ node index.js
# 3.3 关闭155数据库
# 3.4 去156查看副本集状态，发现157变成主节点
$ rs.status()
# 3.5 去157上查看数据状态
$ use person # 切换到person库
$ show tables # 展示所有的集合
# 输出
# people
# peopleTest-155
# 3.6 查询数据是否同步过来了
$ db.peopleTest.find().count()
# 输出
# 1000000
# 结论：155 上写的数据已经被成功同步到了157上

# ==========================================================================
#  测试四，三个节点，1主2备，关闭2个节点，观察是否还可用
#  结果：3个节点 => 2个节点(可用) => 1个节点(不可用)
# ==========================================================================
# 4.1
# 
```



### 1主2备：只停掉主节点

测试结果：**正常**

2个 `Secondary` 中会选出来一个 `PRIMARY`



### 1主2备：停掉2个节点

测试结果：**无法提供服务**

<u>测试1：依次停掉主、从节点</u>

① 先停掉 `PRIMARY`，2个 `SECONDARY` 中会选出来一个 `PRIMARY` 。**正常**

② 再停掉一个 `SECONDARY`，`PRIMARY` 最终会变成 `SECONDARY`。**没有主节点，副本集无法提供写服务**



<u>测试2：依次停掉从、主节点</u>

① 先停掉一个 `SECONDARY`。**正常**

② 再停掉 `PRIMARY`，剩余的一个 `SECONDARY` 不会变成 `PRIMARY`。**没有主节点，副本集无法提供写服务**



<u>测试3：停掉2个从节点</u>

① 先停掉一个 `SECONDARY`。**正常**

② 再停掉一个 `SECONDARY`，`PRIMARY` 最终会变成 `SECONDARY`。**没有主节点，副本集无法提供写服务**



### 1主1备：停掉一个节点

```shell
# 在3个节点的情况下，移除 10.0.0.155
$ rs.remove("10.0.0.155:27017")
 { "ok" : 1 }

# 剩余2个节点，1主1备
# 10.0.0.156 SECONDARY
# 10.0.0.157 PRIMARY
```

<u>测试1：</u>停掉 `PRIMARY`，`SECONDARY` 不会变成 `PRIMARY`。**没有主节点，副本集无法提供写服务**

<u>测试2：</u>停掉 `SECONDARY`，`PRIMARY` 最终会变成 `SECONDARY`。**没有主节点，副本集无法提供写服务**



### 1主1备1仲裁

```shell
# 在1主1备2个节点的情况下，添加一个仲裁节点
# 仲裁节点，监控其他节点状态，参与选主投票，不参与数据保存
# 方法一
$ rs.add({host:"10.0.0.155:27017",arbiterOnly:true})
# 或方法二
$ rs.addArb("10.0.0.155:27017")
$ rs.addArb("10.0.0.101:27017")
$ rs.addArb("10.0.0.102:27017")
# 查看是否添加成功
$ replset:ARBITER> rs.status()
{
	"set" : "replset",
	"date" : ISODate("2019-02-25T08:02:53.717Z"),
	"myState" : 7,
	"term" : NumberLong(14),
	"syncingTo" : "",
	"syncSourceHost" : "",
	"syncSourceId" : -1,
	"heartbeatIntervalMillis" : NumberLong(2000),
	"optimes" : {
		"lastCommittedOpTime" : {
			"ts" : Timestamp(1551081765, 1),
			"t" : NumberLong(14)
		},
		"readConcernMajorityOpTime" : {
			"ts" : Timestamp(1551081765, 1),
			"t" : NumberLong(14)
		},
		"appliedOpTime" : {
			"ts" : Timestamp(1551081765, 1),
			"t" : NumberLong(14)
		},
		"durableOpTime" : {
			"ts" : Timestamp(0, 0),
			"t" : NumberLong(-1)
		}
	},
	"lastStableCheckpointTimestamp" : Timestamp(1551081735, 1),
	"members" : [
		{
			"_id" : 1,
			"name" : "10.0.0.156:27017",
			"health" : 1,
			"state" : 1,
			"stateStr" : "PRIMARY",
			"uptime" : 149,
			"optime" : {
				"ts" : Timestamp(1551081765, 1),
				"t" : NumberLong(14)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1551081765, 1),
				"t" : NumberLong(14)
			},
			"optimeDate" : ISODate("2019-02-25T08:02:45Z"),
			"optimeDurableDate" : ISODate("2019-02-25T08:02:45Z"),
			"lastHeartbeat" : ISODate("2019-02-25T08:02:52.755Z"),
			"lastHeartbeatRecv" : ISODate("2019-02-25T08:02:53.322Z"),
			"pingMs" : NumberLong(1),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"electionTime" : Timestamp(1551081143, 1),
			"electionDate" : ISODate("2019-02-25T07:52:23Z"),
			"configVersion" : 91701
		},
		{
			"_id" : 2,
			"name" : "10.0.0.157:27017",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 149,
			"optime" : {
				"ts" : Timestamp(1551081765, 1),
				"t" : NumberLong(14)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1551081765, 1),
				"t" : NumberLong(14)
			},
			"optimeDate" : ISODate("2019-02-25T08:02:45Z"),
			"optimeDurableDate" : ISODate("2019-02-25T08:02:45Z"),
			"lastHeartbeat" : ISODate("2019-02-25T08:02:52.754Z"),
			"lastHeartbeatRecv" : ISODate("2019-02-25T08:02:53.337Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "10.0.0.156:27017",
			"syncSourceHost" : "10.0.0.156:27017",
			"syncSourceId" : 1,
			"infoMessage" : "",
			"configVersion" : 91701
		},
		{
			"_id" : 3,
			"name" : "10.0.0.155:27017",
			"health" : 1,
			"state" : 7,
			"stateStr" : "ARBITER", # 仲裁节点
			"uptime" : 151,
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"configVersion" : 91701,
			"self" : true,
			"lastHeartbeatMessage" : ""
		}
	],
	"ok" : 1
}

```

<u>测试1：</u>停掉 `PRIMARY`，`SECONDARY` 会自动变成 `PRIMARY`。**正常**

<u>测试2：</u>停掉 `SECONDARY`，`PRIMARY` 保持主节点的状态。**正常**

<u>测试3：</u>停掉 `ARBITER`。**正常**



### 1主1备3仲裁

```sh
# 初始情况：
10.0.0.155 仲裁节点
10.0.0.156 主节点
10.0.0.157 副本节点
10.0.0.101 仲裁节点
10.0.0.102 仲裁节点
```

<u>测试1：</u>**（结论：停掉2个仲裁节点就不行了）**

① 先停掉主节点，副本节点会自动变成主节点。**正常**

② 再停掉一个仲裁节点（10.0.0.155）。**正常**

③ 再停掉一个仲裁节点（10.0.0.101），主节点会变成副本节点。**没有主节点，副本集无法提供写服务**

<u>测试2：</u>**（结论：停掉2个仲裁节点就不行了）**

① 先停掉副本节点，主节点保持不变。**正常**

② 再停掉一个仲裁节点（10.0.0.155）。**正常**

③ 再停掉一个仲裁节点（10.0.0.101），主节点会变成副本节点。**没有主节点，副本集无法提供写服务**

<u>测试3：</u>**（结论：停掉2个仲裁节点就不行了）**

① 先停掉1个仲裁节点（10.0.0.155）。**正常**

② 再停掉1个仲裁节点（10.0.0.101）。主节点服务器会直接down掉，退出ssh连接。

再次启动主节点mongo时会报错：由于异常退出数据库导致的错误。**异常**

```shell
[root@localhost data]# /usr/bin/mongod -f /data/mongodbtest/replset/mongod.conf
about to fork child process, waiting until server is ready for connections.
forked process: 2041
ERROR: child process failed, exited with error number 48
To see additional information in this output, start without the "--fork" option.
```


## 附录

```js
/**
 * file：index.js
 * 
 * npm i
 * node index.js
*/

'use strict'

const mongoose = require('mongoose')
const async = require('async')
mongoose.connect('mongodb://10.0.0.156:27017/person', { useNewUrlParser: true })
const con = mongoose.connection

// 随机生成字符串
function randomString(
  length,
  chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
) {
  var result = ''
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)]
  return result
}

// 写入的 Collection
const COLLECTION = 'peopleTest-156'
// 写入数据的总条数
const TOTAL = 1000000
// 并发控制，每次批量写1万条
const LIMIT = 10000

con.on('error', console.error.bind(console, '连接数据库失败'))
con.once('open', () => {
  const schema = new mongoose.Schema({ name: String, age: Number })
  // 第三个参数，为实际的 collection 的名字，避免自动转复数
  const personModel = mongoose.model(COLLECTION, schema, COLLECTION)

  // 每1万数据归为1组
  let peopleArr = []
  for (let i = 0; i < TOTAL; i++) {
    let index = Math.floor(i / LIMIT)
    if (!peopleArr[index]) peopleArr[index] = []
    peopleArr[index].push({
      name: `person_${randomString(32)}`,
      age: Math.floor(Math.random() * 99 + 1) + 1
    })
  }

  // 控制并发，每次写1组数据（1W条），写完再写下一组
  let index = 1
  const startTime = new Date()
  async.mapLimit(
    peopleArr,
    1,
    function(item, callback) {
      const time1 = new Date()
      // 批量写
      personModel.insertMany(item, function(err, docs) {
        if (err) {
          callback(err, null)
          throw err
        }
        console.log(`第${index}组，耗时：${new Date() - time1}ms`)
        index++
        console.log('===========')
        callback(null, docs.length)
      })
    },
    function(err, result) {
      if (err) throw err
      console.log(`${TOTAL}条数据写入完成，总耗时:${new Date() - startTime}ms`)
    }
  )
})

```

