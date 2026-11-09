# Windows 对象

ET 中所有 **[Window](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/obj)** 对象的集合。

## 说明


 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象的 **Windows** 集合包含应用程序中的所有窗口，而 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象的 **Windows** 集合只包含指定工作簿中的窗口。

使用 **Windows** 属性可返回 **Windows** 集合。


## 示例


```JavaScript
/*此示例层叠当前在 ET 中显示的所有窗口。*/
function test() {
    Application.Windows.Arrange(xlCascade)
}
```
使用 **[NewWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/NewWindow)** 方法可返回一个新窗口并将它添加到集合。



```JavaScript
/*此示例在活动工作簿新建一个窗口。*/
function test() {
    Application.ActiveWorkbook.NewWindow()
}
```
使用 **Windows** (*index*)（其中 *index* 是窗口名称或索引号）可返回一个 **Window** 对象。

注意，活动窗口总是 `Windows(1)`。



```JavaScript
/*此示例将活动窗口最大化。*/
function test() {
    Application.Windows.Item(1).WindowState = xlMaximized
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Arrange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/member/Arrange) | 对屏幕上的窗口进行排列。 |
| [BreakSideBySide](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/member/BreakSideBySide) | 使用此方法可结束两个窗口的并排模式。返回一个表明此方法是否成功的 **Boolean** 值。 |
| [CompareSideBySideWith](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/member/CompareSideBySideWith) | 以并排模式打开两个窗口。返回一个 **Boolean** 值。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/member/Item) | 从集合中返回一个对象。 |
| [ResetPositionsSideBySide](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/member/ResetPositionsSideBySide) | 重置正在进行并排比较的两个工作表窗口的位置。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [SyncScrollingSideBySide](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/member/SyncScrollingSideBySide) | 如果为 **True** ，在对文档进行并排比较的同时启用窗口内容的滚动功能。若为 **False** ，则在对文档进行并排比较的同时禁用窗口内容的滚动功能。 |