# TickLabels.NumberFormatLinked

如果指定数字格式指向单元格（以便当单元格的格式更改时数据标签的格式也作相应的改动），则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**NumberFormatLinked**

express   一个代表 **TickLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例将 Chart1 中的数值坐标轴刻度线标志的数字格式链接到与其对应的单元格。*/
function test() {
    Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).TickLabels.NumberFormatLinked = true
}
```


```JavaScript
/*下例显示 Sheet1 上的第一个图表分类轴刻度线标签的数字格式是否指向单元格。*/
function test() {
    let tickLabels = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.NumberFormatLinked)
}
```
