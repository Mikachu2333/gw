# ChartFormat.Glow

返回一个包含图表元素发光格式属性的指定图表的 **GlowFormat** 对象。只读。



## 语法

express.**Glow**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

GlowFormat

## 说明


发光效果为图形添加了色彩鲜明的彩色边缘。



## 示例


```JavaScript
/*此示例显示图表工作表 Chart1 图表区发光的透明度。*/
function test() {
    let chartformat = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea.Format
    alert(chartformat.Glow.Transparency)
}
```


```JavaScript
/*此示例设置工作表 Sheet1 中第一个内嵌图表区的发光效果的半径值为 1 磅。*/
function test() {
    let chartformat = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea.Format
    chartformat.Glow.Radius = 1
}
```
