# Axis.AxisGroup

返回坐标轴组的类型。只读 **[XlAxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisGroup)** 。



## 语法

express.**AxisGroup**

express   一个代表 **Axis** 对象的变量。

## 类型

XlAxisGroup

## 示例


```JavaScript
/*本示例显示活动文档上第一张内嵌图表的类别轴是否为主轴组。*/
function test() {
    let axis = ActiveDocument.InlineShapes(1).Chart.Axes(xlCategory)
    alert(axis.AxisGroup == xlPrimary)
}
```


```JavaScript
/*本示例判断第一个文档上第一个形状中图表的数值轴的类型，并通知用户。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    if (axis.AxisGroup == xlPrimary) {
        alert("数值轴是主坐标轴组")
    } else {
        alert("数值轴是次坐标轴组")
    }
}
```
