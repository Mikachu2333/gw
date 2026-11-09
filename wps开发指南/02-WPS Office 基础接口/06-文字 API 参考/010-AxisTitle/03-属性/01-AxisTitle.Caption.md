# AxisTitle.Caption

返回或设置一个 **String** 值，它代表坐标轴标题文本。



## 语法

express.**Caption**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将活动文档中第一张图表的数值轴标题设置为“一年级成绩”。*/
function test() {
    let axis = Application.ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue)
    axis.HasTitle = true
    axis.AxisTitle.Caption = '一年级成绩'
}
```


```JavaScript
/*本示例将活动文档中第一张图表的分类轴标题设置为“Month”，并且显示。*/
function test() {
    let axis = Application.ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory)
    axis.HasTitle = true
    axis.AxisTitle.Caption = 'Month'
    alert(axis.AxisTitle.Caption)
}
```
