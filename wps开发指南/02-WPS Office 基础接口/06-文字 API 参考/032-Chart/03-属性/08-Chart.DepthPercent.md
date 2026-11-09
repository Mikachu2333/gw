# Chart.DepthPercent

返回或设置三维图表的深度，以图表宽度的百分比表示（有效范围从 20% 到 2000%）。可读/写 **Long** 类型。



## 语法

express.**DepthPercent**

express   一个代表 **Chart** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性只适用于三维图表。



## 示例


```JavaScript
/*本示例将活动文档中第一个图表的深度设置为其宽度的 50%，应在三维图表上运行该示例。*/
function test() {
    if (ActiveDocument.InlineShapes(1).HasChart) {
        ActiveDocument.InlineShapes(1).Chart.DepthPercent = 50
    }
}
```


```JavaScript
/*本示例显示活动文档内第一张图表的深度。*/
function test() {
    let chart = ActiveDocument.InlineShapes(1).Chart
    alert(chart.DepthPercent)
}
```
