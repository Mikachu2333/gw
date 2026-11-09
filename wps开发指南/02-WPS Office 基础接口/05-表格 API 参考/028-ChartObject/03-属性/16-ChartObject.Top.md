# ChartObject.Top

返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。



## 语法

express.**Top**

express   一个代表 **ChartObject** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 上图表 Chart 2 到工作表第一行顶部的距离。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects("Chart 2")
    alert(`图表 Chart 2 到工作表第一行顶部的距离：${chartobject.Top} 磅`)
}
```


```JavaScript
/*此示例使工作表 Sheet1 中第一张图表的上边界与第三行的上边界对齐。*/
function test() {
    let sheet = Application.Worksheets.Item("Sheet1")
    sheet.ChartObjects(1).Top = sheet.Rows.Item(3).Top
}
```
