(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{353:function(e,a,s){"use strict";s.r(a);var n=s(24),t=Object(n.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"docker常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker常用命令","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker常用命令")]),e._v(" "),s("h2",{attrs:{id:"镜像常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像常用命令","aria-hidden":"true"}},[e._v("#")]),e._v(" 镜像常用命令")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker pull [镜像名称:版本] 拉取镜像\ndocker images  镜像列表\ndocker rmi [镜像名称:版本] 删除镜像\ndocker history [镜像名称] 镜像操作记录\ndocker tag [镜像名称:版本][新镜像名称:新版本]\ndocker inspect [镜像名称:版本] 查看镜像详细\ndocker search [关键字] 搜索镜像\ndocker login 镜像登陆\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("h2",{attrs:{id:"容器常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器常用命令","aria-hidden":"true"}},[e._v("#")]),e._v(" 容器常用命令")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker ps -a 容器列表(所有容器)\ndocker ps  查看所有(运行的)容器\ndocker exec -ti <id> bash  以 bash 命令进入容器内\ndocker run -ti --name [容器名称][镜像名称:版本] bash 启动容器并进入\ndocker logs 查看容器日志\ndocker top <container_id> 查看容器最近的一个进程\ndocker run -ti --name [容器名称] -p 8080:80 [镜像名称:版本] bash  端口映射\ndocker rm <container_id> 删除容器\ndocker stop <container_id> 停止容器\ndocker start <container_id> 开启容器\ndocker restart <container_id> 重启容器\ndocker inspect <container_id> 查看容器详情\ndocker commit [容器名称] my_image:v1.0  容器提交为新的镜像\t\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("h2",{attrs:{id:"docker-rmi-删除镜像报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-rmi-删除镜像报错","aria-hidden":"true"}},[e._v("#")]),e._v(" docker rmi 删除镜像报错")]),e._v(" "),s("ul",[s("li",[e._v("查看镜像列表")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker images\n\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("              "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("              0f891379b0c4        "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" weeks ago         "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(".13GB\nnode                "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v("-stretch           bd2f9f8fa54d        "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" weeks ago         901MB\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("ul",[s("li",[e._v("删除某个镜像")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker rmi bd2f9f8fa54d\n\nError response from daemon: conflict: unable to delete bd2f9f8fa54d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("cannot be forced"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" - image has dependent child images\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("解决思路：")]),e._v(" "),s("ul",[s("li",[e._v("查看是否有启动的容器")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v(" -a\n\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                     PORTS               NAMES\n8ffe78219809        0f891379b0c4        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/bin/sh -c \'npm ins…"')]),e._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" weeks ago         Exited "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("254")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" weeks ago                       sleepy_faraday\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("ul",[s("li",[e._v("删除容器")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" 8ffe78219809\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("删除镜像")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker rmi 0f891379b0c4\n\nDeleted: sha256:0f891379b0c4c8923305add12db25f0f32a7a8e8eddc8f296e65926a7b5956b2\nDeleted: sha256:731c12fc791453ec20b91b3ed610fd73d88c2fa360cf20854e981f521df0824a\nDeleted: sha256:d58f59264f177f6c04d4201262940048f545125ae1eaacebbf807ed024dc3960\nDeleted: sha256:507dd86995329e9a95635ab3ccdd7a32bd0405c60360df683e32a4351e6d811a\nDeleted: sha256:737d443e1875eaef104232ed2da8e78223c2eeedb58794101465828a0778dc35\nDeleted: sha256:206633657c068527b2108b267b65cc922669e90160d05573cf57f3f4c63762ec\nDeleted: sha256:d70a1ddf03f84327cfb8e18a3179a21c461b1ccfda39e96a8e06e243dfbfeb66\nDeleted: sha256:9ecca997c4defd6647e1d7ccd5c3093f28f6dcca224f2a142d9187229b6bf199\nDeleted: sha256:cc29284acbcd5c37cff0c13d5d37b89084d4d50edae444e47bc9d76cb55c6941\nDeleted: sha256:20386b883e13bd69c1dc6d25225c4b89aa9ea42d8b6b5e86f9fecc60d2002d98\nDeleted: sha256:2bdbd8eacb3645992ca3c91fcd32ad181d5a8eb33e524f8b42d3162e0246064e\nDeleted: sha256:51c5dea11fe58b3a0320bebd4d4080ff63dd64766e0ef9b8c676004c3e5e6da1\nDeleted: sha256:dc6adb4f25d0cd50172cd32b667d3b1bb37ef54527f93bd5b9c3debdec6aeeb4\nDeleted: sha256:fd8333f2e4cc97cd6157cc1fa9b479da7631bcdf5e995e0d83abb97cfbc39982\nDeleted: sha256:090d8a18f6115353eef56bfd881f34b87fcaf2f43a061e3be7c9f5dea7bb4855\nDeleted: sha256:2c6aa28c8c62e178b09e5d2c9c285c80725042a1e54767fc67977878be2db4f3\nDeleted: sha256:6104c5eaaf1a932cf70b3715012c0a308f6332896ab8104e34ab48cfff59656a\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br")])])])},[],!1,null,null,null);a.default=t.exports}}]);