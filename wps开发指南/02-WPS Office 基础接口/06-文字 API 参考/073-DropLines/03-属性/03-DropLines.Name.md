# DropLines.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **DropLines** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档中图表的第一个图表组的垂直线的名称。*/
function test() {
    let dropLines = ActiveDocument.InlineShapes(1).Chart.ChartGroups(1).DropLines
    alert(dropLines.Name)
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
