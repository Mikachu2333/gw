# COMAddIns 对象

 **[COMAddIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIn/obj)** 对象的集合，这些对象提供有关在 Windows 注册表中注册的 COM 加载项的信息。

## 说明


使用 **Application** 对象的 **COMAddIns** 属性可返回 WPS Office 宿主应用程序的 **COMAddIns** 集合。此集合包含了某个给定的 Office 宿主应用程序中所有可用的 COM 加载项，而 **COMAddins** 集合的 **Count** 属性可返回可用的 COM 加载项的数目。


## 示例


```JavaScript
/*本示例运行于各组件，显示 COM 加载项的数量。*/
function test() {
    alert(Application.COMAddIns.Count)
}
```
使用 **COMAddins** 集合的 **Update** 方法可刷新 Windows 注册表中 COM 加载项的列表。



```JavaScript
/*本示例运行于各组件，将根据保存在 Windows 注册表中的加载项列表更新 COMAddIns 集合的内容。*/
function test() {
    Application.COMAddIns.Update()
}
```
可以使用 **COMAddIns.Item(*index*)** ，其中 *index* 既可以是一个能够返回 **COMAddIns** 集合中相应位置的加载项的序数值，也可以是代表指定 COM 加载项的 ProgID 的 **String** 值。



```JavaScript
/*本示例运行于各组件，显示编程标识符（ProgId）为“example.Test1”的 COMAddIn 对象的说明文本。*/
function test() {
    alert(Application.COMAddIns.Item("example.Test1").Description)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIns/member/Item) | 获取指定的 **COMAddIns** 集合的成员。 |
| [Update](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIns/member/Update) | 根据保存在 Windows 注册表中的加载项列表更新 COMAddIns 集合的内容。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIns/member/Application) | 获取一个 **Application** 对象，代表 **COMAddIns** 对象的容器应用程序（可以使用 **Automation** 对象的此属性返回该对象的容器应用程序）。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIns/member/Count) | 获取宿主应用程序中 COM 加载项的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIns/member/Creator) | 获取一个 32 位整数，指示创建 **COMAddIns** 对象时所使用的应用程序。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIns/member/Parent) | 获取 **COMAddIns** 对象的 **Parent** 对象。只读。 |