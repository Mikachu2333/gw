# AxisTitle.Formula

获取或设置一个 **String** 值，该值以英语使用 A1 样式表示法来表示对象的公式。可读/写。



## 语法

express.**Formula**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 说明


有关 A1 样式表示法的详细信息，请参阅操作方法：使用 A1 表示法引用单元格和区域。



## 示例


```JavaScript
/*本示例使用英语中的 A1 样式设置活动文档中第一张内嵌图表的分类轴标题的公式。*/
function test() {
    let axisTitle = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    axisTitle.Formula = "example"
}
```


```JavaScript
/*本示例显示使用英语中的 A1 样式表示的第一个文档上第一个形状中图表的数值轴标题的公式。*/
function test() {
    let axisTitle = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).AxisTitle
    alert(axisTitle.Formula)
}
```
