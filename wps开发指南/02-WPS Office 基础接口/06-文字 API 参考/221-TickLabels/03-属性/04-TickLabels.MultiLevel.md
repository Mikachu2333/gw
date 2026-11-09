# TickLabels.MultiLevel

返回或设置一个表示轴是否为多级轴的值。可读/写 **Boolean** 类型。



## 语法

express.**MultiLevel**

express   一个代表 **TickLabels** 对象的变量。

## 类型

boolean

## 说明


此属性的默认值为 **True** 。



## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表的类别轴刻度线标签的轴是否为多级轴。*/
function test() {
    let tickLabels = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.MultiLevel)
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的类别轴的刻度线标签不为多级轴。*/
function test() {
    let tickLabels = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).TickLabels
    tickLabels.MultiLevel = false
}
```
