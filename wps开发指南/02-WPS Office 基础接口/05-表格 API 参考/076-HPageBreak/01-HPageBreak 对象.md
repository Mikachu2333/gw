# HPageBreak 对象

代表水平分页符。

## 说明


 **HPageBreak** 对象是 [ **HPageBreaks** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/obj) 集合的成员。

每张工作表最多有 1026 个水平分页符。

使用 **HPageBreaks** ( *index*)（其中 *index* 是分页符的索引号）可返回一个 **HPageBreak** 对象。


## 示例


```JavaScript
/*本示例移动第一个工作表的第一个水平分页符至E5单元格*/
function test() {
    Application.Worksheets.Item(1).HPageBreaks.Item(1).Location = Application.Worksheets.Item(1).Range("E5")
}
```


```JavaScript
/*本示例删除第一个工作表的第二个水平分页符*/
function test() {
    Application.Worksheets.Item(1).HPageBreaks.Item(2).Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreak/member/Delete) | 删除对象。 |
| [DragOff](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreak/member/DragOff) | 将一个分页符拖出打印区域。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreak/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreak/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Extent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreak/member/Extent) | 返回指定分页符的类型：全屏或仅在打印区域内。可为以下 任一 **[XlPageBreakExtent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageBreakExtent)** 常量： **xlPageBreakFull** 或 **xlPageBreakPartial** 。 **Long** 类型，只读。 |
| [Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreak/member/Location) | 返回或设置定义分页符位置的单元格（ **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象）。水平分页符与定位单元格的上边缘对齐；垂直分页符与定位单元格的左边缘对齐。 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreak/member/Parent) | 返回指定对象的父对象。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreak/member/Type) | 返回或设置一个 **XlPageBreak** 值，它代表分页符类型。 |