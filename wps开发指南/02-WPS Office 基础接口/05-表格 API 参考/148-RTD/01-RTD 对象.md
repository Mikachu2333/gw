# RTD 对象

代表一个实时数据对象。

## 说明


使用 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象的 **[RTD](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/RTD)** 属性可返回一个 **RTD** 对象。


## 示例


```JavaScript
/*本示例设置实时数据更新的时间间隔。*/
function test() {
    Application.RTD.ThrottleInterval = 1500
}
```


```JavaScript
/*本示例重新连接实时数据服务器。*/
function test() {
    Application.RTD.RestartServers()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [RefreshData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RTD/member/RefreshData) | 请求对实时数据服务器中的实时数据进行更新。 |
| [RestartServers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RTD/member/RestartServers) | 与实时数据服务器 (RTD) 重新连接。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ThrottleInterval](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RTD/member/ThrottleInterval) | 返回或设置一个 **Long** 类型的数值，该数值表示更新的时间间隔。可读写。 |