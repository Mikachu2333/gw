# ChartObjects.Top

返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。



## 语法

express.**Top**

express   一个代表 **ChartObjects** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例使工作表 Sheet1 中所有图表的上边界与工作表第五行的上边界对齐。*/
function test() {
    let sheet = Application.Worksheets.Item("Sheet1")
    sheet.ChartObjects().Top = sheet.Rows.Item(5).Top
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 中图表到该表顶部的距离。*/
function test() {
    let chartobjects = Application.Charts.Item("Chart1").ChartObjects()
    alert(`到顶部的距离为：${chartobjects.Top} 磅`)
}
```
