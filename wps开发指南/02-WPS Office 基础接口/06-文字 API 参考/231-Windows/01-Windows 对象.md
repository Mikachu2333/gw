# Windows 对象

 **[Window](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/obj)** 对象的集合，这些对象代表所有可用的窗口。 **Application** 对象的 **Windows** 集合包含应用程序中的所有窗口，而 **Document** 对象的 **Windows** 集合仅包含显示指定文档的窗口。

## 说明


使用 **Windows** 属性可返回 **Windows** 集合。


## 示例


```JavaScript
/*本示例将所有窗口平铺以避免相互重叠。*/
function test() {
    Windows.Arrange(wdTiled)
}
```
使用 **Add** 方法或 **NewWindow** 方法可向 **Windows** 集合添加新窗口。



```JavaScript
/*本示例每个语句都可为活动窗口中的文档创建一个新窗口。*/
function test() {
    ActiveDocument.ActiveWindow.NewWindow()
    NewWindow()
    Windows.Add()
}
```
使用 **Windows** (_Index_) 可返回一个 **Window** 对象，其中 _Index_ 为窗口名称或索引号。



```JavaScript
/*本示例将第一个窗口最大化。*/
function test() {
    Windows.Item(1).WindowState = wdWindowStateMaximize
}
```
索引号是 **“窗口”** 菜单中窗口名称左侧的数字。



```JavaScript
/*本示例显示第一个窗口的标题。*/
function test() {
    alert(Windows.Item(1).Caption)
}
```
对同一文档打开多个窗口时，窗口标题中将出现一个冒号 (:) 和一个数字。

在将视图切换到打印预览时，会创建一个新窗口。关闭打印预览时，该窗口从 **Windows** 集合中删除。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/member/Add) | 返回一个 **Window** 对象，该对象代表文档的新窗口。 |
| [Arrange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/member/Arrange) | 在应用程序工作区排列所有打开的文档窗口。 |
| [BreakSideBySide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/member/BreakSideBySide) | 如果两个窗口以并排方式排列，则终止该模式。返回一个代表该方法是否成功的 **Boolean** 类型的值。 |
| [CompareSideBySideWith](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/member/CompareSideBySideWith) | 打开两个窗口并以并排方式排列。返回一个 **Boolean** 类型的值。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/member/Item) | 返回集合中的单个 **Window** 对象。 |
| [ResetPositionsSideBySide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/member/ResetPositionsSideBySide) | 重置 **“并排比较”** 查看模式中的两个文档窗口。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中窗口的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Windows** 对象的父对象。 |
| [SyncScrollingSideBySide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/member/SyncScrollingSideBySide) | 如果为 **True** ，则启用同时滚动窗口内容。 **Boolean** 类型，可读写。 |