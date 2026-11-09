# Chart.DepthPercent

返回或设置三维图表的深度，以图表宽度的百分比表示（有效范围从 20% 到 2000%）。 **Long** 类型，可读写。



## 语法

express.**DepthPercent**

express   一个代表 **Chart** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 的深度设置为其宽度的 50%。*/
function test() {
    //本示例应在三维图表上运行 （DepthPercent 属性在二维图表中无效）。
    Application.Charts.Item("Chart1").DepthPercent = 50
}
```


```JavaScript
/*本示例显示第一张工作表第一张内嵌图表的深度。*/
function test() {
    //本示例应在三维图表上运行（DepthPercent 属性在二维图表中无效）。
    let chart = Application.Worksheets.Item(1).ChartObjects(1).Chart
    alert(chart.DepthPercent)
}
```
