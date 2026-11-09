# Borders 对象

由四个 **[Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/obj)** 对象组成的集合，它们分别代表 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 或 **[Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/obj)** 对象的四个边框。

## 说明


使用 **Borders** 属性可返回包含所有四个边框的 **Borders** 集合。 可以对单元格或区域的每一侧应用不同的边框。 有关如何对单元格区域应用边框的详细信息，请参阅 **[Range.Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Borders)** 属性。

只能对 **Range** 和 **Style** 对象的各个边框分别设置边框属性。 其他带边框的对象（如误差线和序列线）具有被视为单个实体的边框，而不管它有多少边。 对于这些对象，在返回边框和设置边框属性时必须将其作为一个整体处理。 有关详细信息，请参阅 **Border** 对象。


## 示例


```JavaScript
/*本示例向第一张工作表上的单元格 A1 添加双边框。*/
function test() {
    Worksheets.Item(1).Range("A1").Borders.LineStyle = xlDouble
}
```
使用 **Borders** (索引) （其中 index 标识边框）返回单个 **Border** 对象。 Index 可以是以下 **[XlBordersIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlBordersIndex)** 常量之一： **xlDiagonalDown** 、 **xlDiagonalUp** 、 **xlEdgeBottom** 、 **xlEdgeLeft** 、 **xlEdgeRight** 、 **xlEdgeTop** 、 **xlInsideHorizontal** 或 **xlInsideVertical** 。



```JavaScript
/*本示例将工作表 Sheet1 中单元格区域 A1:G1 的底部边框颜色设置为红色。*/
function test() {
    Worksheets("Sheet1").Range("A1:G1").Borders.Item(xlEdgeBottom).Color = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例在区域中的所有单元格周围生成一个细边框。*/
function test() {
    let borders = Range("B6:D8").Borders
    borders.LineStyle = xlContinuous
    borders.Weight = xlThin
}
```


```JavaScript
/*本示例更改区域的内部单元格边框。*/
function test() {
    let borders = Range("B2:D4").Borders
    borders.Item(xlInsideHorizontal).LineStyle = xlContinuous
    borders.Item(xlInsideHorizontal).Weight = xlThin
    borders.Item(xlInsideVertical).LineStyle = xlContinuous
    borders.Item(xlInsideVertical).Weight = xlThin
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/Item) | 返回一个 **[Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/obj)** 对象，它代表单元格区域或样式的边框之一。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。只读。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/Color) | 返回或设置对象的主要颜色，如注释部分中的表格所示。 **Variant** 型，可读写。 |
| [ColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/ColorIndex) | 返回或设置一个 **Variant** 值，它代表全部四条边框的颜色。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [LineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/LineStyle) | 返回或设置边框的线型。 **[XlLineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlLineStyle)** 、 **xlGray25** 、 **xlGray50** 、 **xlGray75** 或 **xlAutomatic** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/Parent) | 返回指定对象的父对象。只读。 |
| [ThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/ThemeColor) | 返回或设置已应用的配色方案中的主题颜色，该配色方案与指定对象相关联。可读/写 **Variant** 类型。 |
| [TintAndShade](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/TintAndShade) | 返回或设置一个 **Single** ，使颜色变深或变浅。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/Value) | 等价于[Borders.LineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/LineStyle) |
| [Weight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/member/Weight) | 返回或设置一个 **[XlBorderWeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlBorderWeight)** 值，它代表边框的粗细。 |