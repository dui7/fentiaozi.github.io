(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{431:function(s,e,a){"use strict";a.r(e);var r=a(17),t=Object(r.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker中redis导出数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker中redis导出数据"}},[s._v("#")]),s._v(" docker中redis导出数据")]),s._v(" "),a("h2",{attrs:{id:"查看redis文件存放目录位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看redis文件存放目录位置"}},[s._v("#")]),s._v(" 查看redis文件存放目录位置")]),s._v(" "),a("p",[s._v("1.进入redis-cli或用rdm工具进入console\n2.查看redis文件存放目录位置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("CONFIG GET "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("local:0>CONFIG GET dir")]),s._v(" "),a("ol",[a("li",[s._v("dir")]),s._v(" "),a("li",[s._v("/data")])]),s._v(" "),a("p",[s._v("我的是在/data目录")]),s._v(" "),a("h2",{attrs:{id:"导出数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出数据"}},[s._v("#")]),s._v(" 导出数据")]),s._v(" "),a("p",[s._v("1.进入redis-cli或用rdm工具进入console\n2."),a("a",{attrs:{href:"#%E6%9F%A5%E7%9C%8Bredis%E6%96%87%E4%BB%B6%E5%AD%98%E6%94%BE%E7%9B%AE%E5%BD%95%E4%BD%8D%E7%BD%AE"}},[s._v("查看redis文件存放目录位置")]),s._v("\n执行导出命令，会在/data目录下生成一个dump.rdb")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("save\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"导入数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入数据"}},[s._v("#")]),s._v(" 导入数据")]),s._v(" "),a("p",[s._v("1.进入redis-cli或用rdm工具进入console\n2."),a("a",{attrs:{href:"#%E6%9F%A5%E7%9C%8Bredis%E6%96%87%E4%BB%B6%E5%AD%98%E6%94%BE%E7%9B%AE%E5%BD%95%E4%BD%8D%E7%BD%AE"}},[s._v("查看redis文件存放目录位置")]),s._v("\n我的是/data\n3.停止redis容器"),a("br"),s._v("\n4.把dump.rdb 通过docker cp 复制到需要导入的redis容器的/data目录下")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" dump.rdb redis:/data/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4.启动容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker start redis  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);