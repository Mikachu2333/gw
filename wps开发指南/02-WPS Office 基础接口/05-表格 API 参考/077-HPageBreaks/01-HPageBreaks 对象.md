# HPageBreaks 对象

打印区域内水平分页符的集合。

## 说明


每个水平分页符都由一个 **[HPageBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreak/obj)** 对象代表。

如果添加的分页符不和打印区域交叠，则新添加的 **HPageBreak** 对象将不会出现在打印区域的 **HPageBreaks** 集合中。如果重新调整打印区域或重新定义打印区域，将会改变集合的内容。

当 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 属性、[ **Count** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/member/Count) 属性、 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/member/Item)** 属性、 **[Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/member/Parent)** 属性或 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/member/Add)** 方法配合 **HPageBreaks** 属性一起使用时：

* 对于自动打印区域， **[HPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/obj)** 属性只应用于打印区域内的分页符。
* 对于同一区域中用户定义的打印区域， **HPageBreaks** 属性应用于所有的分页符。

每张工作表最多有 1026 个水平分页符。

使用 **HPageBreaks** 属性可返回 **HPageBreaks** 集合。使用 **Add** 方法可添加一个水平分页符。


## 示例


```JavaScript
/*本示例在活动工作表选中的单元格区域上方添加水平分页符。*/
function test() {
    Application.ActiveSheet.HPageBreaks.Add(ActiveCell)
}
```


```JavaScript
/*本示例显示第一个工作表中水平分页符的数量。*/
function test() {
    let count = Application.Worksheets.Item(1).HPageBreaks.Count
    alert(`水平分页符的数量是 ${count}`)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/member/Add) | 添加水平分页符。返回一个 **[HPageBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreak/obj)** 对象，它代表新的水平分页符。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/member/Parent) | 返回指定对象的父对象。只读。 |