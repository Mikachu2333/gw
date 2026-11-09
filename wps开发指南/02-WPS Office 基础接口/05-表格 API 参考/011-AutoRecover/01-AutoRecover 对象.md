# AutoRecover 对象

代表工作簿的自动恢复功能。

## 说明


 **AutoRecover** 对象的属性确定备份所有文件的路径和时间间隔。

使用 **Application** 对象的 **AutoRecover** 属性可返回 **AutoRecover** 对象。

使用 **AutoRecover** 对象的 **Path** 属性可设置“自动恢复”文件的保存路径。


## 示例


```JavaScript
/*本示例将“自动恢复”文件的路径设置为驱动器 D。*/
function test() {
    Application.AutoRecover.Path = "D:\\"
}
```
使用 **AutoRecover** 对象的 **Time** 属性可设置备份所有文件的时间间隔。 **Time** 属性的单位是分钟。



```JavaScript
/*本示例将“自动恢复”的时间间隔设置为 5 分钟。*/
function test() {
    Application.AutoRecover.Time = 5
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoRecover/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoRecover/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Enabled](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoRecover/member/Enabled) | 如果启用对象，则为 **True** 。 **Boolean** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoRecover/member/Parent) | 返回指定对象的父对象。只读。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoRecover/member/Path) | 返回或设置一个 **String** 值，它代表 ET 将要存储“自动恢复”临时文件的位置的完整路径。 |
| [Time](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AutoRecover/member/Time) | 设置或返回 **AutoRecover** 对象的时间间隔。允许的值为从 1 到 120 分钟的整数。默认值为 10 分钟。 **Long** 类型，可读写。 |