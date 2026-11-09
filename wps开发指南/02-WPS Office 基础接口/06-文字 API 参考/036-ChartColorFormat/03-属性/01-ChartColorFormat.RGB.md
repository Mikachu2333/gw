# ChartColorFormat.RGB

返回指定颜色的红-绿-蓝 (RGB) 值。只读 **Long** 类型。



## 语法

express.**RGB**

express   一个代表 **ChartColorFormat** 对象的变量。

## 类型

number（int4 精度）

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
/*本示例显示活动文档上第一个形状中图表的第一个图表组的跌柱线的背景色是否为红色。*/
function test() {
    let downBars = Application.ActiveDocument.Shapes.Item(1).Chart.ChartGroups(1).DownBars
    alert(downBars.Fill.BackColor.RGB == RGB(255, 0, 0))
}
```
