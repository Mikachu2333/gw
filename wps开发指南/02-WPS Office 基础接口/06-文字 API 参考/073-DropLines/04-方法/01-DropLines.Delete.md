# DropLines.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DropLines** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档第一个图表的第一个图表组的垂直线。*/
function test() {
    let chartgroup = ActiveDocument.InlineShapes(1).Chart.ChartGroups(1)
    chartgroup.DropLines.Delete()
}
```


```JavaScript
/*本示例判断如果活动文档上第一个形状中图表的第一个图表组的垂直线的边框粗细为细线边框，则删除该垂直线。*/
function test() {
    let dropLines = ActiveDocument.Shapes.Item(1).Chart.ChartGroups(1).DropLines
    if (dropLines.Border.Weight == xlHairline) {
        dropLines.Delete()
    }
}
```
