# HiLoLines.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **HiLoLines** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档上第一个图表的第一个图表组的高低点连线删除。*/
function test() {
    let chartgroup = ActiveDocument.InlineShapes(1).Chart.ChartGroups(1)
    chartgroup.HiLoLines.Delete()
}
```


```JavaScript
/*本示例将活动文档上第一个形状中图表的第一个图表组的高低点连线删除。*/
function test() {
    let chartgroup = ActiveDocument.Shapes.Item(1).Chart.ChartGroups(1)
    chartgroup.HiLoLines.Delete()
}
```
