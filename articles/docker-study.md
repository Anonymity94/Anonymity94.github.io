---
createTime: 2020-01-06T14:22:20+08:00
sidebar: false
tags:
  - Docker
---

# Docker常用命令

## 镜像常用命令

```
docker pull [镜像名称:版本] 拉取镜像
docker images  镜像列表
docker rmi [镜像名称:版本] 删除镜像
docker history [镜像名称] 镜像操作记录
docker tag [镜像名称:版本][新镜像名称:新版本]
docker inspect [镜像名称:版本] 查看镜像详细
docker search [关键字] 搜索镜像
docker login 镜像登陆
```

## 容器常用命令

```
docker ps -a 容器列表(所有容器)
docker ps  查看所有(运行的)容器
docker exec -ti <id> bash  以 bash 命令进入容器内
docker run -ti --name [容器名称][镜像名称:版本] bash 启动容器并进入
docker logs 查看容器日志
docker top <container_id> 查看容器最近的一个进程
docker run -ti --name [容器名称] -p 8080:80 [镜像名称:版本] bash  端口映射
docker rm <container_id> 删除容器
docker stop <container_id> 停止容器
docker start <container_id> 开启容器
docker restart <container_id> 重启容器
docker inspect <container_id> 查看容器详情
docker commit [容器名称] my_image:v1.0  容器提交为新的镜像	
```

## docker rmi 删除镜像报错

- 查看镜像列表

```bash
$ docker images

REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
<none>              <none>              0f891379b0c4        2 weeks ago         1.13GB
node                8-stretch           bd2f9f8fa54d        2 weeks ago         901MB
```

- 删除某个镜像
```bash
$ docker rmi bd2f9f8fa54d

Error response from daemon: conflict: unable to delete bd2f9f8fa54d (cannot be forced) - image has dependent child images
```


解决思路：

- 查看是否有启动的容器
```bash
$ docker ps -a

CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                     PORTS               NAMES
8ffe78219809        0f891379b0c4        "/bin/sh -c 'npm ins…"   2 weeks ago         Exited (254) 2 weeks ago                       sleepy_faraday
```

- 删除容器
```bash
$ docker rm 8ffe78219809
```

- 删除镜像
```bash
$ docker rmi 0f891379b0c4

Deleted: sha256:0f891379b0c4c8923305add12db25f0f32a7a8e8eddc8f296e65926a7b5956b2
Deleted: sha256:731c12fc791453ec20b91b3ed610fd73d88c2fa360cf20854e981f521df0824a
Deleted: sha256:d58f59264f177f6c04d4201262940048f545125ae1eaacebbf807ed024dc3960
Deleted: sha256:507dd86995329e9a95635ab3ccdd7a32bd0405c60360df683e32a4351e6d811a
Deleted: sha256:737d443e1875eaef104232ed2da8e78223c2eeedb58794101465828a0778dc35
Deleted: sha256:206633657c068527b2108b267b65cc922669e90160d05573cf57f3f4c63762ec
Deleted: sha256:d70a1ddf03f84327cfb8e18a3179a21c461b1ccfda39e96a8e06e243dfbfeb66
Deleted: sha256:9ecca997c4defd6647e1d7ccd5c3093f28f6dcca224f2a142d9187229b6bf199
Deleted: sha256:cc29284acbcd5c37cff0c13d5d37b89084d4d50edae444e47bc9d76cb55c6941
Deleted: sha256:20386b883e13bd69c1dc6d25225c4b89aa9ea42d8b6b5e86f9fecc60d2002d98
Deleted: sha256:2bdbd8eacb3645992ca3c91fcd32ad181d5a8eb33e524f8b42d3162e0246064e
Deleted: sha256:51c5dea11fe58b3a0320bebd4d4080ff63dd64766e0ef9b8c676004c3e5e6da1
Deleted: sha256:dc6adb4f25d0cd50172cd32b667d3b1bb37ef54527f93bd5b9c3debdec6aeeb4
Deleted: sha256:fd8333f2e4cc97cd6157cc1fa9b479da7631bcdf5e995e0d83abb97cfbc39982
Deleted: sha256:090d8a18f6115353eef56bfd881f34b87fcaf2f43a061e3be7c9f5dea7bb4855
Deleted: sha256:2c6aa28c8c62e178b09e5d2c9c285c80725042a1e54767fc67977878be2db4f3
Deleted: sha256:6104c5eaaf1a932cf70b3715012c0a308f6332896ab8104e34ab48cfff59656a
```
