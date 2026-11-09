# TickLabels.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **TickLabels** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表的数值轴刻度线标签的名称。*/
function test() {
    let tickLabels = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).TickLabels
    alert(tickLabels.Name)
}
```


```JavaScript
/*本示例在光标处插入第一个文档上第一个形状中图表的类别轴刻度线标签的名称。*/
function test() {
    let tickLabels = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).TickLabels
    Selection.TypeText(tickLabels.Name)
}
```
