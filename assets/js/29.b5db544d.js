(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{352:function(s,a,e){"use strict";e.r(a);var t=e(24),r=Object(t.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"关闭-selinux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭-selinux","aria-hidden":"true"}},[s._v("#")]),s._v(" 关闭 SELinux")]),s._v(" "),e("ArticleMeta"),s._v(" "),e("h2",{attrs:{id:"问题起源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题起源","aria-hidden":"true"}},[s._v("#")]),s._v(" 问题起源")]),s._v(" "),e("p",[s._v("\b\b"),e("code",[s._v("Redis")]),s._v(" 中的哨兵节点突然无法启动了，查看日志发现是没有权限信息。")]),s._v(" "),e("p",[s._v("经排查，发现是服务器重启过，"),e("code",[s._v("SELinux")]),s._v(" 处于强制模式，导致 "),e("code",[s._v("Redis")]),s._v(" 主节点进程无法修改哨兵节点的配置文件。")]),s._v(" "),e("p",[e("em",[s._v("不要用百度，百度根本查不多相关资料")])]),s._v(" "),e("h2",{attrs:{id:"selinux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selinux","aria-hidden":"true"}},[s._v("#")]),s._v(" SELinux")]),s._v(" "),e("h3",{attrs:{id:"作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用","aria-hidden":"true"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),e("p",[s._v("SELinux 主要作用就是最大限度地减小系统中服务进程可访问的资源（最小权限原则）。")]),s._v(" "),e("h3",{attrs:{id:"查看状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看状态","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看状态")]),s._v(" "),e("p",[s._v("执行命令 "),e("code",[s._v("getenforce")]),s._v(" 查看 SELinux 当前的模式。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("getenforce\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 模式")]),s._v(" "),e("ul",[e("li",[s._v("enforcing：强制模式。违反 SELinux 规则的行为将被阻止并记录到日志中。")]),s._v(" "),e("li",[s._v("permissive：宽容模式。违反 SELinux 规则的行为只会记录到日志中。一般为调试用。")]),s._v(" "),e("li",[s._v("disabled：关闭")])]),s._v(" "),e("h3",{attrs:{id:"临时关闭"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#临时关闭","aria-hidden":"true"}},[s._v("#")]),s._v(" 临时关闭")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 临时关闭 SELinux（不需要重启服务器）")]),s._v("\nsetenforce "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"永久关闭"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#永久关闭","aria-hidden":"true"}},[s._v("#")]),s._v(" 永久关闭")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久关闭 SELinux（机器重启后会生效）")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/SELINUX=enforcing/SELINUX=disabled/g"')]),s._v(" /etc/selinux/config\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/SELINUX=enforcing/SELINUX=disabled/g"')]),s._v(" /etc/sysconfig/selinux\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])],1)},[],!1,null,null,null);a.default=r.exports}}]);