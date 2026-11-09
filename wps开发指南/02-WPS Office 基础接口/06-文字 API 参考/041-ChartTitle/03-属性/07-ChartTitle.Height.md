# ChartTitle.Height

返回对象的高度（以磅为单位）。只读。



## 语法

express.**Height**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表的标题文本，并显示该标题的高度。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    chart.HasTitle = true
    chart.ChartTitle.Text = "8月成绩"
    alert(`图表标题的高度为：${chart.ChartTitle.Height} 磅`)
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的标题文本为“成绩表_2”，则显示该标题的高度。*/
function test() {
    let chartTitle = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartTitle
    if (chartTitle.Caption == "成绩表_2") {
        alert(chartTitle.Height)
    }
}
```
