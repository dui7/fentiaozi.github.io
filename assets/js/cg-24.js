(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{415:function(e,n,s){"use strict";s.r(n);var r=s(17),i=Object(r.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"docker安装jenkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker安装jenkins"}},[e._v("#")]),e._v(" Docker安装Jenkins")]),e._v(" "),s("ol",[s("li",[e._v("拉取镜像"),s("br"),e._v(" "),s("code",[e._v("docker pull jenkins")])]),e._v(" "),s("li",[e._v("在宿主机创建目录/data/jenkins/"),s("br"),e._v(" "),s("code",[e._v("sudo mkdir -p /data/jenkins")])]),e._v(" "),s("li",[e._v("修改目录权限"),s("br"),e._v(" "),s("code",[e._v("sudo chown -R 1000 /data/jenkins/")])]),e._v(" "),s("li",[e._v("运行镜像"),s("br"),e._v(" "),s("code",[e._v("sudo docker run -itd -p 7070:8080 -p 50000:50000 --name jenkins --privileged=true -v /data/jenkins:/var/jenkins_home jenkins")])]),e._v(" "),s("li",[e._v("查看密码"),s("br"),e._v(" "),s("code",[e._v("cat /data/jenkins/secrets/initialAdminPassword")]),s("br"),e._v(" "),s("img",{attrs:{src:"/assets/note/jenkins/docker_jenkins_01-9b6cc6695fdd4b6ea7ed5bb5f6ef0b78.png",alt:"docker_jenkins_01"}})]),e._v(" "),s("li",[e._v("登录ip:7070,输入密码，点击Continue"),s("br"),e._v(" "),s("img",{attrs:{src:"/assets/note/jenkins/docker_jenkins_03-28aabaebe2b34d25926308fbf806f6e9.png",alt:"docker_jenkins_03"}})]),e._v(" "),s("li",[e._v("我不默认安装插件，所以点X关闭，要是默认安装，选择Install suggested plugins"),s("br"),e._v(" "),s("img",{attrs:{src:"/assets/note/jenkins/docker_jenkins_02-90cf9993bdf247d6b583ca0390c8080b.png",alt:"docker_jenkins_02"}})])]),e._v(" "),s("h1",{attrs:{id:"更新为最新版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新为最新版本"}},[e._v("#")]),e._v(" 更新为最新版本")]),e._v(" "),s("ol",[s("li",[e._v("将下载好的jenkins.war 放在宿主机/data/jenkins/目录下"),s("br"),e._v(" "),s("img",{attrs:{src:"/assets/note/jenkins/docker_jenkins_04-1bb6b615d4f64dd689df0276d2385214.png",alt:"docker_jenkins_04"}})]),e._v(" "),s("li",[e._v("进入容器"),s("br"),e._v(" "),s("code",[e._v("docker exec -it -u root 69bf3354fade bash")])])]),e._v(" "),s("blockquote",[s("p",[e._v("69bf3354fade为容器id")])]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("查看容器中jenkins war包的位置，并备份原来的war包\n"),s("ul",[s("li",[e._v("3.1 查看jenkins位置"),s("br"),e._v(" "),s("code",[e._v("whereis jenkins")])]),e._v(" "),s("li",[e._v("3.2 进入到jenkins文件目录"),s("br"),e._v(" "),s("code",[e._v("cd /usr/share/jenkins")])]),e._v(" "),s("li",[e._v("3.3 备份之前的jenkins.war"),s("br"),e._v(" "),s("code",[e._v("cp jenkins.war jenkinsBAK.war")])])])]),e._v(" "),s("li",[e._v("将/data/jenkins/下的jenkins.jar  复制到容器 /usr/share/jenkins下覆盖"),s("br"),e._v(" "),s("code",[e._v("sudo docker cp /data/jenkins/jenkins.war 69bf3354fade://usr/share/jenkins")])]),e._v(" "),s("li",[e._v("退出容器"),s("br"),e._v(" "),s("code",[e._v("exit")])]),e._v(" "),s("li",[e._v("重启容器"),s("br"),e._v(" "),s("code",[e._v("docker restart 69bf3354fade")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);