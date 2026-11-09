# ChartObject.Width

返回或设置一个 **Double** 值，它代表对象的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **ChartObject** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例设置工作表 Sheet1 中第一张图表的宽度为 360 磅。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    chartobject.Width = 360
}
```


```JavaScript
/*此示例显示第一张工作表中图表 Chart 2 的宽度。*/
function test() {
    let chartobject = Application.Worksheets.Item(1).ChartObjects("Chart 2")
    alert(`图表 Chart 2 的宽度：${chartobject.Width} 磅`)
}
```
