# ChartFormat 对象

提供对图表元素艺术字格式的访问。

## 说明


如果使用的属性或方法不适用于 **ChartFormat** 对象所附加到的对象的类型，则会产生运行时错误。


## 示例


```JavaScript
/*此示例显示活动文档中第一个内嵌图表的图表区的文本框架中文本的水平对齐方式是否为msoHorizontalAnchorMixed。*/
function test() {
    let chartformat = Application.ActiveDocument.InlineShapes(1).Chart.ChartArea.Format
    alert(chartformat.TextFrame2.HorizontalAnchor == msoHorizontalAnchorMixed)
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的模拟运算表的文本框的路径类型是否为msoPathTypeMixed。*/
function test() {
    let chartFormat = Application.Documents.Item(1).Shapes.Item(1).Chart.DataTable.Format
    alert(chartFormat.TextFrame2.PathFormat == msoPathTypeMixed)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/member/AutoShapeType) | 返回或设置指定对象的自动形状类型。只读 **[MsoAutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoAutoShapeType)** 类型。 |
| [Fill](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/member/Fill) | 返回一个包含图表元素填充格式属性的父图表元素的 **[FillFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/obj)** 对象。只读。 |
| [Line](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/member/Line) | 返回指定图表元素的线条格式属性。只读 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/obj)** 对象。 |
| [TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/member/TextFrame2) | 返回指定图表元素的文字格式。只读 **TextFrame2** 对象。 |