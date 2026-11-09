# DropLines.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DropLines** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例选中活动文档中第一个图表的第一个图表组的垂直线。*/
function test() {
    let dropLines = ActiveDocument.InlineShapes(1).Chart.ChartGroups(1).DropLines
    dropLines.Select()
}
```


```JavaScript
/*本示例判断如果活动文档上第一个形状中图表的第一个图表组的垂直线的名称为“垂直线 1”，则选中该垂直线。*/
function test() {
    let dropLines = ActiveDocument.Shapes.Item(1).Chart.ChartGroups(1).DropLines
    if (dropLines.Name == "垂直线 1") {
        dropLines.Select()
    }
}
```
