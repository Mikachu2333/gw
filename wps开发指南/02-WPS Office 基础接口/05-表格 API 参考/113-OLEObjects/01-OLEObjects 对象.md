# OLEObjects 对象

指定工作表中所有 **[OLEObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/obj)** 对象的集合。

## 说明


每一个 **OLEObject** 对象都代表一个 ActiveX 控件或一个链接或嵌入的 OLE 对象。
在 JS 环境中添加到工作表上的控件不是ActiveX 控件，所以 **OLEObjects** 集合中不包括这些JS控件。

工作表上的 ActiveX 控件有两个名称：一个是包含该控件的形状（Shape）对象的名称（查看工作表时，可在选择窗格中看到此名称）；另一个是控件的代码名称（在“属性”窗口的“(名称)”右侧单元格中可看到此名称）。第一次向工作表添加控件时，形状名称和代码名称是一致的。但是，如果您更改这两个名称中的任意一个，另一个不会随之自动更改。

使用 **[OLEObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/obj)** 方法可返回 **OLEObjects** 集合。

## 示例


```JavaScript
/*下例在第一个工作表上隐藏所有 OLE 对象。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Visible = false
}
```
使用 [ **Add** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Add) 方法可创建一个新 OLE 对象并将它添加到 **OLEObjects** 集合中。



```JavaScript
/*下例在第一个工作表中创建表示图片文件 Arcade.gif 的新 OLE 对象。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Add("", "arcade.gif")
}
```


```JavaScript
/*下例在第一张工作表中新建一个 ActiveX 控件（一个列表框）。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Add("Forms.ListBox.1")
}
```
在控件事件函数名中使用的是控件的代码名称，但是，当您从工作表的 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/obj)** 或 **OLEObjects** 集合中返回控件时，必须使用形状名称而不是代码名称，以便按名称引用控件。另外，在 JS 环境中添加的控件（非ActiveX 控件）只允许修改形状名称，不允许修改代码名称。例如，假定您给工作表添加一个复选框，而默认的形状名称和代码名称都是 CheckBox1。如果您修改了该复选框的形状名称，但在控件事件函数名中仍须使用 CheckBox1，如下例所示



```JavaScript
/*此示例假定存在名为CheckBox1的JS控件，单击此控件触发如下事件，则显示JS控件对应的shape_chk1（改过的形状名称）左上角单元格地址*/
function CheckBox1_Click() {
    alert(ActiveSheet.Shapes.Item("shape_chk1").TopLeftCell.Address())
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Add) | 向工作表中添加新的 OLE 对象。 |
| [BringToFront](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/BringToFront) | 将对象放到 z-次序前面。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Copy) | 将对象复制到剪贴板。 |
| [CopyPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/CopyPicture) | 将所选对象作为图片复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Cut) | 将对象剪切到剪贴板。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Delete) | 删除对象。 |
| [Duplicate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Duplicate) | 复制对象，并返回对新复制对象的引用。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Item) | 从集合中返回一个对象，它代表集合包含的某个对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Select) | 选择对象。 |
| [SendToBack](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/SendToBack) | 将对象放到 z-次序的后面。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Border) | 返回一个 **[Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/obj)** 对象，它代表对象的边框。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Enabled](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Enabled) | 如果启用对象，则为 **True** 。 **Boolean** 类型，可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Height) | 返回或设置一个 **Double** 值，它代表对象的高度（以磅为单位）。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Left) | 返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Locked) | 返回或设置一个 **Boolean** 值，它指明对象是否已被锁定。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Parent) | 返回指定对象的父对象。只读。 |
| [Placement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Placement) | 返回或设置一个包含 **[XlPlacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPlacement)** 常量的 **Variant** 值，它代表对象附加到它所在的单元格的方式。 |
| [PrintObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/PrintObject) | 如果打印文档时也打印指定对象，则为 **True** 。 **Boolean** 类型，可读写。 |
| [ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/ShapeRange) | 返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象，它代表指定的一个或多个对象。只读。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Top) | 返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Visible) | 返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/Width) | 返回或设置一个 **Double** 值，它代表对象的宽度（以磅为单位）。 |
| [ZOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/member/ZOrder) | 返回指定对象的 z-次序位置。 **Long** 型，只读。 |