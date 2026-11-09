# Chart.ChartStyle

返回或设置图表的图表样式。可读/写 **Variant** 类型。



## 语法

express.**ChartStyle**

express   一个代表 **Chart** 对象的变量。

## 类型

any

## 说明


您可以使用介于 1 到 48 之间的数字设置图表样式。



## 示例


```JavaScript
/*本示例显示活动工作表上的第一个嵌入式图表的样式。*/
function test() {
    alert(ActiveSheet.ChartObjects(1).Chart.ChartStyle)
}
```


```JavaScript
/*本示例修改图表工作表 Chart1 的图表样式。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.ChartStyle = 4
}
```
