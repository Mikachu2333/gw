# UpBars.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **UpBars** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例显示第一个文档中第一个内嵌图表的第一个图表组的涨柱线的边框粗细是否为 xlHairline。*/
function test() {
    let upBars = Application.Documents.Item(1).InlineShapes(1).Chart.ChartGroups(1).UpBars
    alert(upBars.Border.Weight == xlHairline)
}
```


```JavaScript
/*本示例判断如果活动文档上第一个形状中图表的第一个图表组的涨柱线的名称为“涨柱线 1”，则将该涨柱线边框的线条样式设置为虚线。*/
function test() {
    let upBars = Application.ActiveDocument.Shapes.Item(1).Chart.ChartGroups(1).UpBars
    if (upBars.Name == "涨柱线 1") {
        upBars.Border.LineStyle = xlDash
    }
}
```
