# Axis.AxisGroup

返回坐标轴组的类型。只读 **[XlAxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisGroup)** 。



## 语法

express.**AxisGroup**

express   一个代表 **Axis** 对象的变量。

## 类型

XlAxisGroup

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一张图表的类别轴是否为主轴组。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.AxisGroup == xlPrimary)
}
```


```JavaScript
/*本示例判断第一篇演示文稿的第一张幻灯片的第二个图表的数值轴的类型，并通知用户。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    if (axis.AxisGroup == xlPrimary) {
        alert("数值轴是主坐标轴组")
    } else {
        alert("数值轴是次坐标轴组")
    }
}
```
