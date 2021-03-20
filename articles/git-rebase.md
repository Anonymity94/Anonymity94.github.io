---
createTime: 2019-12-24T15:39:53+08:00
tags:
  - Git
---

# Git Rebase



`commit` 记录太丑，想用 `rebase` 命令合并一下~

```bash
commit 9cd421b930234be192fd09453b7dfe235ed9ce72 (HEAD -> v2, origin/v2)
Merge: dafad2b 4b3a3de
Author: wangfucheng <wangfucheng@machloop.com>
Date:   Tue Dec 24 16:17:08 2019 +0800

    Merge branch 'v2' of github.com:Anonymity94/Anonymity94.github.io into v2

commit dafad2b1ff4a47b32a990b3a98ee72339fd0928d
Author: wangfucheng <wangfucheng@machloop.com>
Date:   Tue Dec 24 15:03:44 2019 +0800

    feat: 新增GitHub Actions功能

commit 4b3a3dec764da2e04a1d890989922c7260fb2005
Author: wangfucheng <wangfucheng@machloop.com>
Date:   Tue Dec 24 15:57:25 2019 +0800

    fix: use PERSONAL_TOKEN

commit 396b18a9b5d3ced2484b0568d3aca5aedc6d520d
Author: wangfucheng <wangfucheng@machloop.com>
Date:   Tue Dec 24 15:50:45 2019 +0800

    feat: use actions-gh-pages

commit 8553718508fc608fa614cc427dcf0076951f4933
Author: wangfucheng <wangfucheng@machloop.com>
Date:   Tue Dec 24 15:43:35 2019 +0800

    fix: change output directory

commit 781bf5f18d4ac314313adeea8f1b55b6cc6d149f
Author: wangfucheng <wangfucheng@machloop.com>
Date:   Tue Dec 24 15:40:13 2019 +0800

    fix: change output directory

commit 0be9ba6f336772de218e0a02722a32930f632fca
Author: wangfucheng <wangfucheng@machloop.com>
Date:   Tue Dec 24 15:34:45 2019 +0800

    fix: change output directory

commit d0632eac64a50e30eb1fa96b972f447493c97f11
Author: wangfucheng <wangfucheng@machloop.com>
Date:   Tue Dec 24 15:09:10 2019 +0800

    fix: Deploy Folder

commit 783de83b309a1e3cca81d541c10c1a016947c3c3
Author: wangfucheng <wangfucheng@machloop.com>
Date:   Tue Dec 24 15:03:44 2019 +0800

    feat: 新增GitHub Actions功能

```

## 选择历史提交记录

- 可以选择前几次提交记录

```bash
git rebase -i HEAD~2
```

- 也可以指定 `commit ID`

```bash
git rebase -i 2e59ef617b7e15246cbe5ee4cbd3835cad68496a
```

得到以下结果：

```bash
pick dafad2b feat: 新增GitHub Actions功能
pick 783de83 feat: 新增GitHub Actions功能
pick d0632ea fix: Deploy Folder
pick 0be9ba6 fix: change output directory
pick 781bf5f fix: change output directory
pick 8553718 fix: change output directory
pick 396b18a feat: use actions-gh-pages
pick 4b3a3de fix: use PERSONAL_TOKEN

# 变基 2e59ef6..9cd421b 到 4b3a3de（8 个提交）
#
# 命令:
# p, pick <提交> = 使用提交
# r, reword <提交> = 使用提交，但修改提交说明
# e, edit <提交> = 使用提交，进入 shell 以便进行提交修补
# s, squash <提交> = 使用提交，但融合到前一个提交
# f, fixup <提交> = 类似于 "squash"，但丢弃提交说明日志
# x, exec <命令> = 使用 shell 运行命令（此行剩余部分）
# b, break = 在此处停止（使用 'git rebase --continue' 继续变基）
# d, drop <提交> = 删除提交
# l, label <label> = 为当前 HEAD 打上标记
# t, reset <label> = 重置 HEAD 到该标记
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       创建一个合并提交，并使用原始的合并提交说明（如果没有指定
# .       原始提交，使用注释部分的 oneline 作为提交说明）。使用
# .       -c <提交> 可以编辑提交说明。
#
# 可以对这些行重新排序，将从上至下执行。
#
# 如果您在这里删除一行，对应的提交将会丢失。
#
# 然而，如果您删除全部内容，变基操作将会终止。
#
# 注意空提交已被注释掉
```

## 合并提交

保留第一行的 `pick`，将第二行以后的 `pick` 修改为 `f`(fixup <提交> = 类似于 "squash"，但丢弃提交说明日志)
保存，退出。

```bash
pick dafad2b feat: 新增GitHub Actions功能
f 783de83 feat: 新增GitHub Actions功能
f d0632ea fix: Deploy Folder
f 0be9ba6 fix: change output directory
f 781bf5f fix: change output directory
f 8553718 fix: change output directory
f 396b18a feat: use actions-gh-pages
f 4b3a3de fix: use PERSONAL_TOKEN
```

## 编辑提交信息

```bash
git commit -a
```

将之前的提交描述信息，修改合并后保存。


## 合并冲突

```{4,5}
$ git commit -m "rebase"
[分离头指针 eae0801] rebase
 1 file changed, 1 insertion(+), 1 deletion(-)
$ git rebase --continue
自动合并 .github/workflows/ci.yml
冲突（内容）：合并冲突于 .github/workflows/ci.yml
error: 不能应用 396b18a... feat: use actions-gh-pages
Resolve all conflicts manually, mark them as resolved with
"git add/rm <conflicted_files>", then run "git rebase --continue".
You can instead skip this commit: run "git rebase --skip".
To abort and get back to the state before "git rebase", run "git rebase --abort".
不能应用 396b18a... feat: use actions-gh-pages
```

当合并提交存在文件有冲突时，需要执行手动合并冲突。合并完成后执行下述命令，继续进行变基操作。

```bash
git rebase --continue
```

直到完成所有的操作，得到以下输出。

```bash
$ git rebase --continue
Successfully rebased and updated refs/heads/v2.
```

## 强制push

```
git push origin master -f
```

## 参考

- [Git 笔记：将两个提交合并为一个](https://blog.csdn.net/jerechen/article/details/89556281)