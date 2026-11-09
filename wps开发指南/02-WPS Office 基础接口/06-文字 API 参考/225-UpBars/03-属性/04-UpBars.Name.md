# UpBars.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **UpBars** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一个文档中第一个内嵌图表的第一个图表组的涨柱线的名称。*/
function test() {
    let upBars = Application.Documents.Item(1).InlineShapes(1).Chart.ChartGroups(1).UpBars
    alert(upBars.Name)
}
```


```JavaScript
/*本示例判断如果活动文档上第一个形状中图表的第一个图表组的涨柱线的名称为“涨柱线 1”，则将该涨柱线的线条的粗细设置为2磅。*/
function test() {
    let upBars = Application.ActiveDocument.Shapes.Item(1).Chart.ChartGroups(1).UpBars
    if (upBars.Name == "涨柱线 1") {
        upBars.Format.Line.Weight = 2
    }
}
```
