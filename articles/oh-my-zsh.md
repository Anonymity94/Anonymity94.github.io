---
createTime: 2021-02-23T16:49:00+08:00
tags:
---

# Oh my zsh



## 安装 `oh-my-zsh`

- `clone` 仓库

```bash
git clone https://gitee.com/mirrors/oh-my-zsh.git  ~/.oh-my-zsh
```

- 复制 `.zshrc`

```bash
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

- 更改默认的 `Shell`

```bash
chsh -s /bin/zsh
```

## 主题配置

修改 `~/.zshrc` 文件。

大多数内置主题查看 👉 [Themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)


## 自动补全

- 下载 [inc](https://mimosa-pudica.net/zsh-incremental.html)
- 将文件放在插件目录下
```bash
cd ~/.oh-my-zsh/plugins
mkdir incr
cp <PATH>/incr-*.zsh ~/.oh-my-zsh/plugins/incr/
```

- 刷新配置文件
```bash
source ~/.oh-my-zsh/plugins/incr/incr*.zsh
```

![](https://mimosa-pudica.net/img/zsh.gif)


## 修复问题

解决 `mac` 系统报 `zsh: command not found: npm` 问题

1. 检查 `.bash_profile` 文件
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
```

2. 在 `~/.zshrc` 文件中添加
```bash
source ~/.bash_profile
```

3. 刷新配置文件
```bash
source ~/.zshrc
```
