---
createTime: 2021-01-28T15:41:20+08:00
tags: 
 - map
---

# 制作离线地图

<ArticleMeta />

## 地图服务器

- [GeoServer](http://geoserver.org/)

- 

## WebGIS

- [OpenLayer]([http://openlayers.org/](https://link.zhihu.com/?target=http%3A//openlayers.org/))
- [MapGuide](http://mapguide.osgeo.org/)
- [AntV - L7](https://antv-l7.gitee.io/zh/examples/gallery)


## 安装GeoServer

> https://www.cnblogs.com/yangzhengier/archive/2020/03/31/12606606.html

- 安装 `java`

```sh
# 检查
rpm -qa | grep java
# 安装
yum -y install java-1.8.0-openjdk*
# 检查
java -version
javac
```
  

- 安装 `tomcat`

```sh
# 安装
yum -y install tomcat

# 启动服务
systemctl start tomcat
# 检查服务
systemctl status tomcat.service

# 安装web
yum install tomcat-webapps tomcat-admin-webapps

# 修改ManagerApp的用户名密码
vi /usr/share/tomcat/conf/tomcat-users.xml

<role rolename="manager-gui"/>
<user username="root" password="root" roles="manager-gui"/>


# 重启
systemctl restart tomcat
```

  

- 安装 `Geoserver`

```sh
scp -r  /Users/wangfucheng/Downloads/geoserver-2.18.2-war.zip root@10.0.0.209:/var/lib/tomcat/webapps

unzip geoserver-2.18.2-war.zip -d .


# 访问地址
http://10.0.0.209:8080/geoserver/web/?7
# 默认用户名密码
admin/geoserver
```

- 添加数据集

  `https://www.osgeo.cn/post/3872g`

  `https://www.pianshen.com/article/4133531901/`

  获取中国地图

- https://blog.csdn.net/semian7633/article/details/108072482

## OpenStreetMap

> https://www.openstreetmap.org/

下载中国地图的shp文件，然后导入到 `Geoserver`中
这里的地图不包括中国台湾、藏南地区。慎用！

https://download.geofabrik.de/asia/china.html



## Openlayer

