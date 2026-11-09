# ChartColorFormat.SchemeColor

返回或设置当前配色方案中颜色的索引。可读/写 **Long** 类型。



## 语法

express.**SchemeColor**

express   一个代表 **ChartColorFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置活动文档中第一个图表的图表区填充的可见性、前景色、背景色和渐变。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let chartFillFormat = inlineShape.Chart.ChartArea.Fill
        chartFillFormat.Visible = true
        chartFillFormat.ForeColor.SchemeColor = 15
        chartFillFormat.BackColor.SchemeColor = 17
        chartFillFormat.TwoColorGradient(msoGradientHorizontal, 1)
    }
}
```


```JavaScript
/*本示例设置活动文档上第一个形状中图表的第一个图表组的跌柱线的前景色。*/
function test() {
    let downBars = Application.ActiveDocument.Shapes.Item(1).Chart.ChartGroups(1).DownBars
    downBars.Fill.ForeColor.SchemeColor = 10
}
```
