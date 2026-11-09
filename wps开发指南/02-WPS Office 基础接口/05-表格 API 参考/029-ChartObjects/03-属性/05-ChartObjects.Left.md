# ChartObjects.Left

返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **ChartObjects** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例将工作表 Sheet1 上所有图表到工作表A列的距离设置为 300 磅。*/
function test() {
    let chartobjects = Application.Sheets.Item("Sheet1").ChartObjects()
    chartobjects.Left = 300
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 上图表到工作表A列的距离。*/
function test() {
    let chartobjects = Application.Charts.Item("Chart1").ChartObjects()
    alert(`图表工作表上图表距A列：${chartobjects.Left} 磅。`)
}
```
