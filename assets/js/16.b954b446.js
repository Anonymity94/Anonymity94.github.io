(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{287:function(s,t,a){s.exports=a.p+"assets/img/add-a-new-secret.542b2989.png"},288:function(s,t,a){s.exports=a.p+"assets/img/deploy-log.73d3d7c1.png"},357:function(s,t,a){"use strict";a.r(t);var n=a(24),e=Object(n.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"使用-github-actions-自动发布博客"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-github-actions-自动发布博客","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 GitHub Actions 自动发布博客")]),s._v(" "),n("ArticleMeta"),s._v(" "),n("h2",{attrs:{id:"设置-github-仓库的-secrets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置-github-仓库的-secrets","aria-hidden":"true"}},[s._v("#")]),s._v(" 设置 "),n("code",[s._v("GitHub")]),s._v(" 仓库的 "),n("code",[s._v("Secrets")])]),s._v(" "),n("p",[s._v("按照"),n("a",{attrs:{href:"https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),n("OutboundLink")],1),s._v("，生成一个密钥。然后，将这个密钥储存到当前仓库的 "),n("code",[s._v("Settings/Secrets")]),s._v(" 里面。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(287),alt:"Add a new secret"}})]),s._v(" "),n("h2",{attrs:{id:"修改-package-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改-package-json","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改 "),n("code",[s._v("package.json")])]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br")]),n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"less"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^3.10.1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"less-loader"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^5.0.0"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"homepage"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://anonymity94.github.io/"')]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"调整vuepress构建后的输出目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调整vuepress构建后的输出目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 调整"),n("code",[s._v("vuepress")]),s._v("构建后的输出目录")]),s._v(" "),n("p",[s._v("参考："),n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/#dest",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress配置#dest"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  dest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'build'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"创建-ci-yml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-ci-yml","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建 "),n("code",[s._v("ci.yml")])]),s._v(" "),n("p",[s._v("在仓库的根目录创建文件 "),n("code",[s._v(".github/workflows/ci.yml")]),s._v("。"),n("em",[n("code",[s._v("ci.yml")]),s._v("文件名可以随意取")])]),s._v(" "),n("p",[s._v("这里使用 "),n("a",{attrs:{href:"https://github.com/peaceiris/actions-gh-pages",target:"_blank",rel:"noopener noreferrer"}},[s._v("peaceiris/actions-gh-pages@v2"),n("OutboundLink")],1),s._v("。")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" GitHub Actions Build GitHub.io Page\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 源码分支v2")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" v2\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build-and-deploy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@master\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm ci\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm run build  \n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" peaceiris/actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("gh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages@v2\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("PERSONAL_TOKEN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.ACCESS_TOKEN "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建后的文件发布到master分支上")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("PUBLISH_BRANCH")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里和vuepress构建输出的目录有关")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("PUBLISH_DIR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./build\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BUILD_SCRIPT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm install && npm run build\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h2",{attrs:{id:"推送仓库到-github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#推送仓库到-github","aria-hidden":"true"}},[s._v("#")]),s._v(" 推送仓库到 GitHub")]),s._v(" "),n("p",[n("img",{attrs:{src:a(288),alt:"发布日志"}})]),s._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("阮一峰的网络日志 - GitHub Actions 入门教程"),n("OutboundLink")],1)])]),s._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/93030651",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vuepress + GitHub Actions 静态博客全攻略"),n("OutboundLink")],1)])])])],1)},[],!1,null,null,null);t.default=e.exports}}]);