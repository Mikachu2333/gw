# COMAddIn 对象

代表 WPS Office 宿主应用程序中的一个 COM 加载项。 **COMAddIn** 对象是 **COMAddIns** 集合的成员。

## 说明


可以使用 **COMAddIns.Item(index)** ，其中 index 既可以是一个能够返回 **COMAddIns** 集合中相应位置的加载项的序数值，也可以是代表指定 COM 加载项的 ProgID 的 **String** 值。


## 示例


```JavaScript
/*本示例运行于各组件，显示指定 COM 加载项的说明文本。*/
function test() {
    alert(Application.COMAddIns.Item("example.Test1").Description)
}
```
使用 **COMAddin** 对象的 **ProgID** 属性返回 COM 加载项的编程标识符，并使用 **Guid** 属性返回加载项的全局唯一标识符（GUID）。



```JavaScript
/*本示例运行于各组件，显示 COMAddIns 集合中第一个 COM 加载项的 ProgID 和 CLSID。*/
function test() {
    let comAddin = Application.COMAddIns.Item(1)
    alert(`My ProgID is ${comAddin.ProgId} and my CLSID is ${comAddin.Guid}`)
}
```
使用 **Connect** 属性设置或返回与指定 COM 加载项的连接状态。



```JavaScript
/*本示例运行于各组件，判断第一个 COM 加载项的连接状态，并通知用户。*/
function test() {
    if (Application.COMAddIns.Item(1).Connect) {
        alert("The add-in is connected.")
    } else {
        alert("The add-in is not connected.")
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIn/member/Application) | 获取一个 **Application** 对象，代表 **COMAddIn** 对象的容器应用程序（可以使用 **Automation** 对象的此属性返回该对象的容器应用程序）。只读。 |
| [Connect](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIn/member/Connect) | 获取或设置指定的 **COMAddIn** 对象的连接状态。可读/写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIn/member/Creator) | 获取一个 32 位整数，指示创建 **COMAddIn** 对象时所使用的应用程序。只读。 |
| [Description](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIn/member/Description) | 获取或设置指定的 **COMAddin** 对象的说明性 **String** 值。可读/写。 |
| [Guid](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIn/member/Guid) | 获取指定 **COMAddIn** 对象的类标识符（CLSID）。只读。 |
| [Object](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIn/member/Object) | 获取或设置一个对象引用。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIn/member/Parent) | 获取 **COMAddIn** 对象的 **Parent** 对象。只读。 |
| [ProgId](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/COMAddIn/member/ProgId) | 获取指定 **COMAddIn** 对象的编程标识符（ProgID）。只读。 |