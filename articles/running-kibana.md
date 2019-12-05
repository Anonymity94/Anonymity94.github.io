---
createTime: 2019-08-27T11:38:10+08:00
tags:
  - kibana
---

# 本地运行 Kibana

<ArticleMeta />

## github仓库
[elastic/kibana](https://github.com/elastic/kibana/)

## 本地准备
- yarn
- nvm
- Node-`v10.15.2`

```json
{
  "engines": {
    "node": "10.15.2",
    "yarn": "^1.10.1"
  }
}
```

## 构建

```bash
wangfuchengdeMac-mini:kibana-7.0.1 wangfucheng$ yarn kbn bootstrap
yarn run v1.17.3
$ node scripts/kbn bootstrap
Running [bootstrap] command from [/Users/wangfucheng/coading/elk/kibana-7.0.1]:

Found [26] projects:

kibana
├── packages
│   ├── elastic-datemath (@elastic/datemath)
│   ├── eslint-config-kibana (@elastic/eslint-config-kibana)
│   ├── kbn-babel-code-parser (@kbn/babel-code-parser)
│   ├── kbn-babel-preset (@kbn/babel-preset)
│   ├── kbn-config-schema (@kbn/config-schema)
│   ├── kbn-dev-utils (@kbn/dev-utils)
│   ├── kbn-es-query (@kbn/es-query)
│   ├── kbn-es (@kbn/es)
│   ├── kbn-eslint-import-resolver-kibana (@kbn/eslint-import-resolver-kibana)
│   ├── kbn-eslint-plugin-eslint (@kbn/eslint-plugin-eslint)
│   ├── kbn-expect (@kbn/expect)
│   ├── kbn-i18n (@kbn/i18n)
│   ├── kbn-interpreter (@kbn/interpreter)
│   ├── kbn-plugin-generator (@kbn/plugin-generator)
│   ├── kbn-plugin-helpers (@kbn/plugin-helpers)
│   ├── kbn-pm (@kbn/pm)
│   ├── kbn-test-subj-selector (@kbn/test-subj-selector)
│   ├── kbn-test (@kbn/test)
│   └── kbn-ui-framework (@kbn/ui-framework)
├── test/plugin_functional/plugins
│   ├── kbn_tp_custom_visualizations
│   ├── kbn_tp_sample_app_plugin
│   ├── kbn_tp_sample_panel_action
│   └── kbn_tp_visualize_embedding
└── x-pack (x-pack)
    └── plugins/infra

Running installs in topological order:


Installing dependencies in [kibana]:

$ node ./preinstall_check
[1/5] 🔍  Validating package.json...
[2/5] 🔍  Resolving packages...
success Already up-to-date.
Skipping workspace project: @elastic/datemath
Skipping workspace project: @elastic/eslint-config-kibana
Skipping workspace project: @kbn/babel-code-parser
Skipping workspace project: @kbn/babel-preset
Skipping workspace project: @kbn/config-schema
Skipping workspace project: @kbn/dev-utils
Skipping workspace project: @kbn/es-query
Skipping workspace project: @kbn/es
Skipping workspace project: @kbn/eslint-import-resolver-kibana
Skipping workspace project: @kbn/eslint-plugin-eslint
Skipping workspace project: @kbn/expect
Skipping workspace project: @kbn/i18n
Skipping workspace project: @kbn/interpreter
Skipping workspace project: @kbn/plugin-generator
Skipping workspace project: @kbn/plugin-helpers
Skipping workspace project: @kbn/pm
Skipping workspace project: @kbn/test-subj-selector
Skipping workspace project: @kbn/test
Skipping workspace project: @kbn/ui-framework
Skipping workspace project: kbn_tp_custom_visualizations
Skipping workspace project: kbn_tp_sample_app_plugin
Skipping workspace project: kbn_tp_sample_panel_action
Skipping workspace project: kbn_tp_visualize_embedding
Skipping workspace project: x-pack
Skipping workspace project: infra

Installs completed, linking package executables:

[x-pack] plugin-helpers -> ../packages/kbn-plugin-helpers/bin/plugin-helpers.js

Linking executables completed, running `kbn:bootstrap` scripts

@elastic/datemath: $ yarn build --quiet
@kbn/config-schema: $ yarn build
@kbn/config-schema: $ tsc
@elastic/datemath: $ babel src --out-dir target --copy-files --quiet
@kbn/babel-code-parser: $ yarn build --quiet
@kbn/dev-utils: $ yarn build --quiet
@kbn/babel-code-parser: $ babel src --out-dir target --quiet
@kbn/dev-utils: $ babel src --out-dir target --quiet
@kbn/es-query: $ node scripts/build --source-maps
@kbn/i18n: $ node scripts/build --source-maps
@kbn/test: $ yarn build
@kbn/es-query:  info Deleting old output
@kbn/i18n:  info Deleting old output
@kbn/i18n:  info Starting babel and typescript
@kbn/es-query:  info Starting babel and typescript
@kbn/i18n:  info [babel:web ] > babel src --config-file /Users/wangfucheng/coading/elk/kibana-7.0.1/packages/kbn-i18n/babel.config.js --out-dir /Users/wangfucheng/coading/elk/kibana-7.0.1/packages/kbn-i18n/target/web --extensions .ts,.js,.tsx --quiet --source-map inline
@kbn/es-query:  info [babel:public] > babel src --config-file /Users/wangfucheng/coading/elk/kibana-7.0.1/packages/kbn-es-query/babel.config.js --out-dir /Users/wangfucheng/coading/elk/kibana-7.0.1/packages/kbn-es-query/target/public --extensions .js,.ts,.tsx --quiet --source-map inline
@kbn/i18n:  info [babel:node] > babel src --config-file /Users/wangfucheng/coading/elk/kibana-7.0.1/packages/kbn-i18n/babel.config.js --out-dir /Users/wangfucheng/coading/elk/kibana-7.0.1/packages/kbn-i18n/target/node --extensions .ts,.js,.tsx --quiet --source-map inline
@kbn/test: $ babel src --out-dir target --delete-dir-on-start --extensions .ts,.js,.tsx
@kbn/es-query:  info [babel:server] > babel src --config-file /Users/wangfucheng/coading/elk/kibana-7.0.1/packages/kbn-es-query/babel.config.js --out-dir /Users/wangfucheng/coading/elk/kibana-7.0.1/packages/kbn-es-query/target/server --extensions .js,.ts,.tsx --quiet --source-map inline
@kbn/i18n:  info [tsc       ] > tsc --emitDeclarationOnly --declarationMap true
@kbn/i18n:  proc [babel:web ] Browserslist: caniuse-lite is outdated. Please run next command `yarn upgrade caniuse-lite browserslist`
@kbn/es-query:  proc [babel:public] Browserslist: caniuse-lite is outdated. Please run next command `yarn upgrade caniuse-lite browserslist`
@kbn/test: Successfully compiled 21 files with Babel.
@kbn/i18n:  proc [babel:node] Successfully compiled 17 files with Babel.
@kbn/i18n:  info [babel:node] exited with 0 after a few seconds
@kbn/i18n:  proc [babel:web ] Successfully compiled 17 files with Babel.
@kbn/i18n:  info [babel:web ] exited with 0 after a few seconds
@kbn/es-query:  proc [babel:public] Successfully compiled 59 files with Babel.
@kbn/es-query:  info [babel:public] exited with 0 after a few seconds
@kbn/es-query:  proc [babel:server] Successfully compiled 59 files with Babel.
@kbn/es-query:  info [babel:server] exited with 0 after a few seconds
@kbn/es-query:  succ Complete
@kbn/i18n:  info [tsc       ] exited with 0 after a few seconds
@kbn/i18n:  succ Complete
@kbn/interpreter: $ node scripts/build --dev
@kbn/interpreter:  info Deleting old output
@kbn/interpreter:  info Starting babel and webpack
@kbn/interpreter:  info [babel  ] > babel src --ignore *.test.js --out-dir target --copy-files --source-maps inline --quiet
@kbn/interpreter:  info [webpack] > webpack --config tasks/build/webpack.config.js --env.sourceMaps true
@kbn/interpreter:  info [babel  ] exited with 0 after a few seconds
@kbn/interpreter:  info [webpack] exited with 0 after a few seconds
@kbn/interpreter:  succ Complete
kibana: $ yarn build:types && node scripts/register_git_hook
kibana: $ tsc --p tsconfig.types.json
kibana: Registering Kibana pre-commit git hook...
kibana: success Kibana pre-commit git hook was installed successfully.

Bootstrapping completed!

✨  Done in 24.42s.
```

## 出现的问题

**Q1: chromedriver: Command failed.**

```bash
error /Users/wangfucheng/coading/elk/kibana-7.0.1/node_modules/chromedriver: Command failed.
Exit code: 1
Command: node install.js
Arguments: 
Directory: /Users/wangfucheng/coading/elk/kibana-7.0.1/node_modules/chromedriver
Output:
Current existing ChromeDriver binary is unavailable, proceding with download and extraction.


[bootstrap] failed:

Error: Command failed: yarn install --non-interactive
    at makeError (/Users/wangfucheng/coading/elk/kibana-7.0.1/packages/kbn-pm/dist/index.js:14155:9)
    at Promise.all.then.arr (/Users/wangfucheng/coading/elk/kibana-7.0.1/packages/kbn-pm/dist/index.js:14259:16)
    at process._tickCallback (internal/process/next_tick.js:68:7)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

**处理办法：** 升级chromedriver版本：`"chromedriver": "^76.0.0"`


**Q2: `pre-commit`导致的问题**

```bash
kibana: fail Kibana pre-commit git hook was not installed as an error occur.
kibana: ERROR fatal: 不是一个 git 仓库（或者任何父目录）：.git
✖ kibana: fatal: 不是一个 git 仓库（或者任何父目录）：.git
kibana: info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
✖ kibana: error Command failed with exit code 1.

[bootstrap] failed:

Error: Command failed: yarn run kbn:bootstrap
fatal: 不是一个 git 仓库（或者任何父目录）：.git

error Command failed with exit code 1.

$ yarn build:types && node scripts/register_git_hook
$ tsc --p tsconfig.types.json
Registering Kibana pre-commit git hook...

fail Kibana pre-commit git hook was not installed as an error occur.

ERROR fatal: 不是一个 git 仓库（或者任何父目录）：.git

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

    at makeError (/Users/wangfucheng/coading/elk/kibana-7.0.1/packages/kbn-pm/dist/index.js:14155:9)
    at Promise.all.then.arr (/Users/wangfucheng/coading/elk/kibana-7.0.1/packages/kbn-pm/dist/index.js:14259:16)
    at process._tickCallback (internal/process/next_tick.js:68:7)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

**处理办法：** 本地的代码不是通过`git clone`下来的，没有 git 仓库的信息，无法通过 `pre-commit` 检查。这时通过`git init`初始化一下即可。

## 修改配置文件

修改`config/kibana.yml`配置文件

> 标准配置：[Configuring Kibana](https://www.elastic.co/guide/en/kibana/current/settings.html)

```yaml
server.port: 5601
server.host: "localhost"
elasticsearch.hosts: ["http://localhost:9200"]
i18n.locale: "zh-CN"
```

## 启动

`yarn run start`