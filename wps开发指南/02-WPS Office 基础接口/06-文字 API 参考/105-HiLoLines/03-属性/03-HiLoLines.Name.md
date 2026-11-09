# HiLoLines.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **HiLoLines** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档上第一个图表的第一个图表组的高低点连线的名称。*/
function test() {
    let chartgroup = ActiveDocument.InlineShapes(1).Chart.ChartGroups(1)
    alert(chartgroup.HiLoLines.Name)
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的第一个图表组的高低点连线的名称为“高低点连线 1”，则删除该高低点连线。*/
function test() {
    let hiLoLines = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1).HiLoLines
    if (hiLoLines.Name == "高低点连线 1") {
        hiLoLines.Delete()
    }
}
```
