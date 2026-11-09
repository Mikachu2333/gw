# ChartColorFormat 对象

代表单色对象的颜色，或以渐变/图案填充的对象的前景色或背景色。

## 说明


使用下表中列出的属性之一可以返回一个 **ChartColorFormat** 对象。

| 使用此属性                           | 对此对象                                  | 要返回的 ChartColorFormat 对象所代表的内容 |
| ------------------------------- | ------------------------------------- | ------------------------------ |
| **[BackColor](#TODO)** | **[ChartFillFormat](#TODO)** | 背景填充颜色（用于底纹或图案填充）。             |
| **[ForeColor](#TODO)** | **ChartFillFormat**                   | 前景填充颜色（对于纯色填充，则代表填充颜色）。        |


## 示例


```JavaScript
/*本示例将活动文档中第一个图表上第一个图表组的涨柱线的前景色设置为图表区的前景色。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let chart = inlineShape.Chart
        let upbars = chart.ChartGroups(1).UpBars
        upbars.Format.Fill.ForeColor.RGB = chart.ChartArea.Fill.ForeColor.RGB
    }
}
```


```JavaScript
/*本示例显示活动文档上第一个形状中图表的第一个图表组的跌柱线的背景色是否为蓝色。*/
function test() {
    let downBars = Application.ActiveDocument.Shapes.Item(1).Chart.ChartGroups(1).DownBars
    alert(downBars.Fill.BackColor.RGB == RGB(0, 0, 255))
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [RGB](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartColorFormat/member/RGB) | 返回指定颜色的红-绿-蓝 (RGB) 值。只读 **Long** 类型。 |
| [SchemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartColorFormat/member/SchemeColor) | 返回或设置当前配色方案中颜色的索引。可读/写 **Long** 类型。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartColorFormat/member/Type) | 返回颜色格式类型。只读 **Long** 类型。 |