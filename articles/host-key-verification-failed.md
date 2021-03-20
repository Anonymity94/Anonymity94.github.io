---
createTime: 2020-07-27T09:55:20+08:00
tags:
    - Git
---

# Host key verification failed



公司切换了代码托管平台，连接远程仓库的时候出现了下述错误

```sh
$ git pull
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:Xb/borON**************************agv+/ik.
Please contact your system administrator.
Add correct host key in /Users/wangfucheng/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /Users/wangfucheng/.ssh/known_hosts:19
ECDSA host key for [**.*.*.***]:10022 has changed and you have requested strict checking.
Host key verification failed.
fatal: 无法读取远程仓库。

请确认您有正确的访问权限并且仓库存在。
```

重置过服务器后，就会出现这个问题。
使用`ssh-keygen`删除远程仓库的缓存和密钥信息。
文档见[这里](http://www.jinbuguo.com/openssh/ssh-keygen.html)。

```sh
ssh-keygen -R hostname
```

```sh
$ git pull
The authenticity of host '[**.*.*.***]:10022 ([**.*.*.***]:10022)' can't be established.
ECDSA key fingerprint is SHA256:************************.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '[**.*.*.***]:10022' (ECDSA) to the list of known hosts.
已经是最新的。
```