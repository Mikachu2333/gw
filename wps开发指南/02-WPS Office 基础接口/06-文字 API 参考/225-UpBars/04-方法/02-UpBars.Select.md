# UpBars.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **UpBars** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档中第一个内嵌图表的第一个图表组的涨柱线。*/
function test() {
    let upBars = Application.ActiveDocument.InlineShapes(1).Chart.ChartGroups(1).UpBars
    upBars.Select()
}
```


```JavaScript
/*本示例判断如果活动文档上第一个形状中图表的第一个图表组的涨柱线的名称为“涨柱线 1”，则选中该涨柱线。*/
function test() {
    let upBars = Application.ActiveDocument.Shapes.Item(1).Chart.ChartGroups(1).UpBars
    if (upBars.Name == "涨柱线 1") {
        upBars.Select()
    }
}
```
