---
createTime: 2019-05-09T22:10:53+08:00
tags:
  - Linux
---

# 关闭 SELinux

<ArticleMeta />

## 问题起源

`Redis` 中的哨兵节点突然无法启动了，查看日志发现是没有权限信息。

经排查，发现是服务器重启过，`SELinux` 处于强制模式，导致 `Redis` 主节点进程无法修改哨兵节点的配置文件。

*不要用百度，百度根本查不多相关资料*

## SELinux

### 作用

SELinux 主要作用就是最大限度地减小系统中服务进程可访问的资源（最小权限原则）。

### 查看状态

执行命令 `getenforce` 查看 SELinux 当前的模式。

```bash
getenforce
```

### 模式

- enforcing：强制模式。违反 SELinux 规则的行为将被阻止并记录到日志中。
- permissive：宽容模式。违反 SELinux 规则的行为只会记录到日志中。一般为调试用。
- disabled：关闭

### 临时关闭
```bash
# 临时关闭 SELinux（不需要重启服务器）
setenforce 0
```

### 永久关闭
```bash
# 永久关闭 SELinux（机器重启后会生效）
sed -i "s/SELINUX=enforcing/SELINUX=disabled/g" /etc/selinux/config
sed -i "s/SELINUX=enforcing/SELINUX=disabled/g" /etc/sysconfig/selinux
```


