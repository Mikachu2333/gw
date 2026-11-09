# Application.RTD

返回一个 **[RTD](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RTD/obj)** 对象。



## 语法

express.**RTD**

express   一个代表 **Application** 对象的变量。

## 类型

RTD

## 示例


```JavaScript
/*本示例重新连接实时数据服务器 。*/
function test() {
    Application.RTD.RestartServers()
}
```


```JavaScript
/*本示例显示实时数据更新的时间间隔。*/
function test() {
    alert(Application.RTD.ThrottleInterval)
}
```
