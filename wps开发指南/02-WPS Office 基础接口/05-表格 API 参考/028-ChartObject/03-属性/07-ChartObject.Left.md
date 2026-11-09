# ChartObject.Left

返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **ChartObject** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例使工作表 Sheet1 中第一张嵌入图表的左边界与 B 列的左边界对齐。*/
function test() {
    let sheet = Application.Worksheets.Item("Sheet1")
    sheet.ChartObjects(1).Left = sheet.Columns.Item("B").Left
}
```


```JavaScript
/*此示例显示第一张工作表中嵌入图表 Chart 2 到工作表上 A 列的距离。*/
function test() {
    let chartobject = Application.Worksheets.Item(1).ChartObjects("Chart 2")
    alert(`图表 Chart 2 到 A 列的距离为：${chartobject.Left} 磅`)
}
```
