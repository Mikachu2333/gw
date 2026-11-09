# AxisTitle.Orientation

返回或设置文本方向。可读/写 **Long** 类型。



## 语法

express.**Orientation**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

any

## 说明


该属性的值可以是介于 -90 至 90 度之间的整数或 **[XlOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/XlOrientation)** 常量之一。



## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌图表的分类轴标题的文本方向是否为水平排列。*/
function test() {
    let axisTitle = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    alert(axisTitle.Orientation == xlHorizontal)
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的数值轴标题的文本方向。*/
function test() {
    let axisTitle = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).AxisTitle
    axisTitle.Orientation = 45
}
```
