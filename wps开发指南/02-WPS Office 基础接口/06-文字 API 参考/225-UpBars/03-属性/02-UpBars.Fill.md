# UpBars.Fill

返回一个包含图表元素填充格式属性的父图表元素的 **[FillFormat](#TODO)** 对象。只读。



## 语法

express.**Fill**

express   一个代表 **UpBars** 对象的变量。

## 类型

ChartFillFormat

## 示例


```JavaScript
/*本示例显示第一个文档中第一个内嵌图表的第一个图表组的涨柱线的填充格式类型是否为单色填充。*/
function test() {
    let upBars = Application.Documents.Item(1).InlineShapes(1).Chart.ChartGroups(1).UpBars
    alert(upBars.Fill.Type == msoFillSolid)
}
```


```JavaScript
/*本示例判断如果活动文档上第一个形状中图表的第一个图表组的涨柱线的名称为“涨柱线 1”，则将该涨柱线的填充设置为不可见。*/
function test() {
    let upBars = Application.ActiveDocument.Shapes.Item(1).Chart.ChartGroups(1).UpBars
    if (upBars.Name == "涨柱线 1") {
        upBars.Fill.Visible = msoFalse
    }
}
```
