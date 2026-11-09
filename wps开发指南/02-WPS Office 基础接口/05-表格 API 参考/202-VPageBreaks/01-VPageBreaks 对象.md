# VPageBreaks 对象

打印区域中垂直分页符的集合。

## 说明


每一个垂直分页符都由一个 **[VPageBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreak/obj)** 对象代表。

当 [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj) 属性、 **[Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/member/Count)** 属性、 **[Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/member/Creator)** 属性、 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/member/Item)** 属性、 **[Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/member/Parent)** 属性或 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/member/Add)** 方法与 **VPageBreaks** 属性一起使用时：

* 对于自动打印区域， **VPageBreaks** 属性只应用于打印区域内的分页符。
* 对于同一区域中的用户定义的打印区域， **VPageBreaks** 属性应用于所有的分页符。

使用 **[VPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/VPageBreaks)** 属性可返回 **VPageBreaks** 集合。使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/member/Add)** 方法可添加一个垂直分页符。

如果添加的分页符不和打印区域交叠，则新添加的 **VPageBreak** 对象将不会出现在打印区域的 **VPageBreaks** 集合中。如果重新调整打印区域或重新定义打印区域，将会改变集合的内容。


## 示例


```JavaScript
/*本示例在活动单元格左边添加一个垂直分页符。*/
function test() {
    Application.ActiveSheet.VPageBreaks.Add(ActiveCell)
}
```


```JavaScript
/*本示例在工作表Sheet1中H列添加一个垂直分页符，并显示垂直分页符总数。*/
function test() {
    let sheet1 = Application.Worksheets.Item("Sheet1")
    sheet1.VPageBreaks.Add(sheet1.Columns.Item("H"))
    alert(`垂直分页符的数量是 ${sheet1.VPageBreaks.Count}`)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/member/Add) | 添加垂直分页符。返回一个代表新垂直分页符的 **[VPageBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreak/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/member/Parent) | 返回指定对象的父对象。只读。 |