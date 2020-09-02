(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{323:function(t,s,a){t.exports=a.p+"assets/img/JDBC-interpreter.3cb4f0af.png"},324:function(t,s,a){t.exports=a.p+"assets/img/create-Interpreter-01.d649d32a.png"},325:function(t,s,a){t.exports=a.p+"assets/img/create-Interpreter-02.9921dc21.png"},326:function(t,s,a){t.exports=a.p+"assets/img/postgresql-notebook-result-table.fea3538c.png"},327:function(t,s,a){t.exports=a.p+"assets/img/postgresql-notebook-result-chart.211bdd1d.png"},375:function(t,s,a){"use strict";a.r(s);var e=a(24),r=Object(e.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"zeppelin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zeppelin","aria-hidden":"true"}},[t._v("#")]),t._v(" Zeppelin")]),t._v(" "),e("ArticleMeta"),t._v(" "),e("h2",{attrs:{id:"jdbc-通用解释器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jdbc-通用解释器","aria-hidden":"true"}},[t._v("#")]),t._v(" JDBC 通用解释器")]),t._v(" "),e("p",[t._v("JDBC解释器允许您无缝地创建到任何数据源的JDBC连接。")]),t._v(" "),e("p",[t._v("在运行每个语句后，将立即应用插入，更新和升级。")]),t._v(" "),e("p",[t._v("到目前为止，已经通过以下测试：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(323),alt:"JDBC通用解释器"}})]),t._v(" "),e("h3",{attrs:{id:"创建一个新的jdbc解释器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建一个新的jdbc解释器","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建一个新的JDBC解释器")]),t._v(" "),e("p",[t._v("如果你的"),e("code",[t._v("Zeppelin")]),t._v("有多个不同的数据源，此时你可以依托"),e("code",[t._v("JDBC")]),t._v("通用解释器创建不同的解释器，来更好的操作数据。")]),t._v(" "),e("p",[t._v("下面我们将创建一个"),e("code",[t._v("PostgreSQL")]),t._v("解释器。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(324),alt:"创建PostgreSQL解释器 - 图1"}})]),t._v(" "),e("h3",{attrs:{id:"填写解释器参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#填写解释器参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 填写解释器参数")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Interpreter Name")]),t._v("：任何你想要用作别名的填充字段（如"),e("code",[t._v("postgresql")]),t._v(", "),e("code",[t._v("mysql")]),t._v("等）。请注意，此别名将用于"),e("code",[t._v("%interpreter_name")]),t._v("在段落中调用解释器")]),t._v(" "),e("li",[e("code",[t._v("Interpreter group")]),t._v("：新建解释器的所属分组，这里选择"),e("code",[t._v("jdbc")])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(325),alt:"创建PostgreSQL解释器 - 图2"}})]),t._v(" "),e("h3",{attrs:{id:"填写解释器properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#填写解释器properties","aria-hidden":"true"}},[t._v("#")]),t._v(" 填写解释器"),e("code",[t._v("Properties")])]),t._v(" "),e("h4",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("default.url")]),t._v(" "),e("td",[t._v("jdbc:postgresql://10.0.0.162:5432/test")])]),t._v(" "),e("tr",[e("td",[t._v("default.user")]),t._v(" "),e("td",[t._v("***")])]),t._v(" "),e("tr",[e("td",[t._v("default.password")]),t._v(" "),e("td",[t._v("***")])])])]),t._v(" "),e("h4",{attrs:{id:"dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependencies","aria-hidden":"true"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Artifact")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Excludes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("org.postgresql:postgresql:9.4.1211")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),e("h2",{attrs:{id:"postgresql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgresql","aria-hidden":"true"}},[t._v("#")]),t._v(" PostgreSQL")]),t._v(" "),e("blockquote",[e("p",[t._v("不建议使用Postgresql解释器，并将其合并到"),e("a",{attrs:{href:"http://zeppelin.apache.org/docs/0.8.2/interpreter/jdbc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JDBC Interpreter中"),e("OutboundLink")],1),t._v("。您可以将它与JDBC Interpreter用作相同的功能。有关更多详细信息，请参见"),e("a",{attrs:{href:"http://zeppelin.apache.org/docs/0.8.2/interpreter/jdbc.html#postgres",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postgresql设置示例"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("h3",{attrs:{id:"运行段落"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行段落","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行段落")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("postgresql\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" fpc_system_monitor_metric "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" metric_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs_data_total_byte'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs_data_used_byte'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs_cache_used_byte'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs_cache_total_byte'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:a(326),alt:"运行结果表格"}}),t._v(" "),e("img",{attrs:{src:a(327),alt:"运行结果图表"}})]),t._v(" "),e("h2",{attrs:{id:"elasticsearch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch","aria-hidden":"true"}},[t._v("#")]),t._v(" Elasticsearch")]),t._v(" "),e("h3",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("elasticsearch.cluster.name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("elasticsearch")]),t._v(" "),e("td",[t._v("群集名称")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("elasticsearch.host")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.0.0.188")]),t._v(" "),e("td",[t._v("集群中节点的主机")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("elasticsearch.port")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("9200")]),t._v(" "),e("td",[t._v("连接端口 "),e("strong",[t._v("（重要提示：它取决于客户端类型，传输或http）")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("elasticsearch.client.type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("http")]),t._v(" "),e("td",[t._v("Elasticsearch（transport或http）的客户端类型 "),e("strong",[t._v("（Important：端口取决于此值）")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("elasticsearch.basicauth.password")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",[t._v("基本认证密码（http）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("elasticsearch.basicauth.username")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",[t._v("基本认证用户名（http）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("elasticsearch.result.size")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),e("td",[t._v("搜索查询结果集的大小")])])])]),t._v(" "),e("h3",{attrs:{id:"运行段落-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行段落-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行段落")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("help")])])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("%elasticsearch\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("Elasticsearch interpreter:\nGeneral format: "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("command"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("indices"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("types"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("option"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("JSON"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  - indices: list of indices separated by commas "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("depends on the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  - types: list of document types separated by commas "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("depends on the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nCommands:\n  - search /indices/types "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" indices and types can be omitted "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("at least, you have to provide "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" a query is either a JSON-formatted query, nor a lucene query\n  - size "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" defines the size of the result "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default value is "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" used, this "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" must be declared before a search "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v("\n  - count /indices/types "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" same comments as "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the search\n  - get /index/type/id\n  - delete /index/type/id\n  - index /index/type/id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("json-formatted document"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" the "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" can be omitted, elasticsearch will generate one\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br")])]),e("ul",[e("li",[t._v("查看某个文档详情："),e("code",[t._v("get /index/type/id")])])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("%elasticsearch\nget /i_npb-protocol-http-log-record-2019-12-04/_doc/uccFz24B6OCuWO87ZXRo\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"referer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request_data_len"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("852")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"origin"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response_data_len"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("160")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src_ip"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"172.18.0.102"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"set_cookie"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content_type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content_type_base64"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2NoYXJzZXQ9VVRGLTg\\u003d"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apilocate.amap.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accept_language"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dest_port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user_agent"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1575431265000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uri_base64"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"L21vYmlsZS9iaW5hcnk/b3V0cHV0PWJpbiZwb2xpY3k9MzEwMw\\u003d\\u003d"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request_data_context"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src_mac"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a8:9c:ed:88:3e:be"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cookie"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cookie_base64"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"policy_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"session_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2658387873"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uri"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/mobile/binary?output\\u003dbin\\u0026policy\\u003d3103"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"set_cookie_base64"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dst_mac"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e0:cc:7a:39:af:46"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user_agent_base64"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QU1BUF9Mb2NhdGlvbl9TREtfQW5kcm9pZCAzLjUuMA\\u003d\\u003d"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src_port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("38112")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dest_ip"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"106.11.249.212"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"xff"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response_data_context"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br")])]),e("ul",[e("li",[t._v("搜索："),e("code",[t._v("search /indices/types <query>")])])]),t._v(" "),e("p",[t._v("执行时会报错，错误如下，原因还没有找到。")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",[t._v('Error : JSONObject["total"] is not a long.')])]),t._v(" "),e("ul",[e("li",[t._v("插入文档："),e("code",[t._v("index /index/type <json-formatted document>")])])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("%elasticsearch\nindex /zeppelin/users "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好啊派大星"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ul",[e("li",[t._v("更新文档："),e("code",[t._v("index /index/type/id <json-formatted document>")])])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("%elasticsearch\nindex /zeppelin/users/Tsx3z24B6OCuWO87x2zE "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好啊派大星编辑"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ul",[e("li",[t._v("删除文档："),e("code",[t._v("delete /index/type/id")])])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("%elasticsearch\ndelete /zeppelin/users/Tsx3z24B6OCuWO87x2zE\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ul",[e("li",[e("code",[t._v("search /indices/types {query}")])])]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.bookstack.cn/books/Zeppelin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Zeppelin 0.7.2 中文文档"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zeppelin.apache.org/docs/0.7.2/interpreter/jdbc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Generic JDBC Interpreter for Apache Zeppelin"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://zeppelin.apache.org/docs/0.8.2/interpreter/postgresql.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostgreSQL, Apache HAWQ (incubating) Interpreter for Apache Zeppelin"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://zeppelin.apache.org/docs/0.8.2/interpreter/elasticsearch.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elasticsearch Interpreter for Apache Zeppelin"),e("OutboundLink")],1)])])],1)},[],!1,null,null,null);s.default=r.exports}}]);