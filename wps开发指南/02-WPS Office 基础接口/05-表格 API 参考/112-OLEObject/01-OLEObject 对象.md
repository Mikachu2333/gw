# OLEObject 对象

代表工作表上的一个 ActiveX 控件或链接或嵌入的 OLE 对象。

## 说明


 **OLEObject** 对象是 **[OLEObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/obj)** 集合的成员。 **OLEObjects** 集合在一张工作表上包含所有的 OLE 对象。

使用 **[OLEObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/obj)** ( *索引* )（其中 *index* 是对象名称或编号）可返回一个 **OLEObject** 对象。

工作表上的 ActiveX 控件的 **OLEObject** 对象的属性和方法是相同的。这样，通过使用控件名称，JavaScript 代码即可访问这些属性。


## 示例


```JavaScript
/*下例删除 Sheet1 上的第一个 OLE 对象。*/
function test() {
    Application.Worksheets.Item("Sheet1").OLEObjects(1).Delete()
}
```


```JavaScript
/*以下示例删除名为 ListBox1 的 OLE 对象。*/
function test() {
    Application.Worksheets.Item("Sheet1").OLEObjects("ListBox1").Delete()
}
```


```JavaScript
/*以下示例选择名为 MyCheckBox 的复选框控件，将其与活动单元格对齐，然后激活该控件。*/
function test() {
    let object = ActiveSheet.OLEObjects("MyCheckBox")
    object.Value = true
    object.Top = ActiveCell.Top
    object.Activate()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Activate) | 激活对象。 |
| [BringToFront](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/BringToFront) | 将对象放到 z-次序前面。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Copy) | 将对象复制到剪贴板。 |
| [CopyPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/CopyPicture) | 将所选对象作为图片复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Cut) | 将对象剪切到剪贴板，或者将其粘贴到指定的目的地。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Delete) | 删除对象。 |
| [Duplicate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Duplicate) | 复制对象，并返回对新复制对象的引用。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Select) | 选择对象。 |
| [SendToBack](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/SendToBack) | 将对象放到 z-次序的后面。 |
| [Verb](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Verb) | 向指定的 OLE 对象服务器发送动词。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AutoLoad](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/AutoLoad) | 如果打开包含指定 OLE 对象的工作簿时自动载入该 OLE 对象，则为 **True** 。 **Boolean** 类型，可读写。 |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Border) | 返回一个 **[Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/obj)** 对象，它代表对象的边框。 |
| [BottomRightCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/BottomRightCell) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表位于该对象右下角下方的单元格。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Enabled](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Enabled) | 如果启用对象，则为 **True** 。 **Boolean** 类型，可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Height) | 返回或设置一个 **Double** 值，它代表对象的高度（以磅为单位）。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Index) | 返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。 |
| [Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Interior) | 返回一个 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/obj)** 对象，它代表指定对象的内部。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Left) | 返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。 |
| [LinkedCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/LinkedCell) | 返回或设置指向控制值的工作表区域。如果为这些单元格赋值，则指定控制也会取得相应的值。与此类似，如果更改控制的值，则单元格的值也作相应变动。 **String** 型，可读写。 |
| [ListFillRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/ListFillRange) | 返回或设置用于填充指定列表框的工作表区域。对该属性进行设置将破坏列表框中的所有列表项。 **String** 型，可读写。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Locked) | 返回或设置一个 **Boolean** 值，它指明对象是否已被锁定。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Name) | 返回或设置一个 **String** 值，它代表对象的名称。 |
| [OLEType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/OLEType) | 返回 OLE 对象类型。可为以下 **XlOLEType** 常量之一： **xlOLELink** 或 **xlOLEEmbed** 。如果对象是链接的（对象存储于文件之外），则本属性返回 **xlOLELink** ，如果对象是内嵌的（对象完全包含于文件之内），则返回 **xlOLEEmbed** 。 **Long** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Parent) | 返回指定对象的父对象。只读。 |
| [Placement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Placement) | 返回或设置一个包含 **[XlPlacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPlacement)** 常量的 **Variant** 值，它代表对象附加到它所在的单元格的方式。 |
| [PrintObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/PrintObject) | 如果打印文档时也打印指定对象，则为 **True** 。 **Boolean** 类型，可读写。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Shadow) | 返回或设置一个 **Boolean** 值，它确定对象是否有阴影。 |
| [ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/ShapeRange) | 返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象，它代表指定的一个或多个对象。只读。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Top) | 返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。 |
| [TopLeftCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/TopLeftCell) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表位于指定对象左上角下方的单元格。只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Visible) | 返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/Width) | 返回或设置一个 **Double** 值，它代表对象的宽度（以磅为单位）。 |
| [progID](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/member/progID) | 返回对象的程序标识符。 **String** 型，只读。 |