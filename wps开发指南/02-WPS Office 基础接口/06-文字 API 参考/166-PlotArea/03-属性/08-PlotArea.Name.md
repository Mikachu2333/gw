# PlotArea.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **PlotArea** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表的绘图区的名称。*/
function test() {
    let plotArea = ActiveDocument.InlineShapes.Item(1).Chart.PlotArea
    alert(plotArea.Name)
}
```


```JavaScript
/*本示例在光标处插入第一个文档上第一个形状中图表的绘图区的名称。*/
function test() {
    let plotArea = Documents.Item(1).Shapes.Item(1).Chart.PlotArea
    Selection.TypeText(plotArea.Name)
}
```
