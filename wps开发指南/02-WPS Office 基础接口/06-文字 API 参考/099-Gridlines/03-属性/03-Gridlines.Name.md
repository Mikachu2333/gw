# Gridlines.Name

返回的对象的名称。只读 **String** 。



## 语法

express.**Name**

express   一个代表 **Gridlines** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例判断如果活动文档中第一张内嵌图表的数值轴拥有主要网格线，则显示该网格线的名称。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        if (axis.HasMajorGridlines) {
            alert(axis.MajorGridlines.Name)
        }
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的类别轴中的次要网格线的名称。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.MinorGridlines.Name)
}
```
