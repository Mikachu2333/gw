# VPageBreak 对象

代表一个垂直分页符。

## 说明


 **VPageBreak** 对象是 [ **VPageBreaks** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/obj) 集合的成员。

使用 **[VPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/obj)** (*index*)（其中 *index* 是该分页符的分页符索引号）可返回一个 **VPageBreak** 对象。


## 示例


```JavaScript
/*本示例移动第一个工作表的第一个垂直分页符至E5单元格*/
function test() {
    Application.Worksheets.Item(1).VPageBreaks.Item(1).Location = Worksheets.Item(1).Range("E5")
}
```


```JavaScript
/*本示例判断如果活动工作表的第2个垂直分页符是手动插入分页符，则删除该垂直分页符。*/
function test() {
    let vPageBreak = ActiveSheet.VPageBreaks.Item(2)
    if (vPageBreak.Type == xlPageBreakManual) {
        vPageBreak.Delete()
        alert("已删除该手动插入的垂直分页符")
    } else {
        alert("不是手动插入的垂直分页符")
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreak/member/Delete) | 删除对象。 |
| [DragOff](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreak/member/DragOff) | 将一个分页符拖出打印区域。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreak/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreak/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Extent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreak/member/Extent) | 返回指定分页符的类型：全屏或仅在打印区域内。可为以下任一 **[XlPageBreakExtent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageBreakExtent)** 常量： **[xlPageBreakFull](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageBreakExtent)** 或 **[xlPageBreakPartial](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageBreakExtent)** 。 **Long** 类型，只读。 |
| [Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreak/member/Location) | 返回或设置定义分页符位置的单元格（ **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象）。水平分页符与定位单元格的上边缘对齐；垂直分页符与定位单元格的左边缘对齐。 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreak/member/Parent) | 返回指定对象的父对象。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreak/member/Type) | 返回或设置表示分页符类型的 **[XlPageBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageBreak)** 值。 |