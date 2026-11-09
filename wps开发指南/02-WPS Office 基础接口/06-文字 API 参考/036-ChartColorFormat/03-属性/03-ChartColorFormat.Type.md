# ChartColorFormat.Type

返回颜色格式类型。只读 **Long** 类型。



## 语法

express.**Type**

express   一个代表 **ChartColorFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性返回下列 **[MsoColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoColorType)** 常量之一：

* **msoColorTypeRGB** 
* **msoColorTypeScheme** 



## 示例


```JavaScript
/*本示例显示活动文档上第一个图表中图表区填充的前景色的颜色格式类型是否为 msoColorTypeScheme。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let chartFillFormat = inlineShape.Chart.ChartArea.Fill
        chartFillFormat.Visible = true
        alert(chartFillFormat.ForeColor.Type == msoColorTypeScheme)
    }
}
```


```JavaScript
/*本示例显示活动文档上第一个形状中图表的第一个图表组的跌柱线的背景色的颜色格式类型是否为 msoColorTypeRGB。*/
function test() {
    let downBars = Application.ActiveDocument.Shapes.Item(1).Chart.ChartGroups(1).DownBars
    alert(downBars.Fill.BackColor.Type == msoColorTypeRGB)
}
```
