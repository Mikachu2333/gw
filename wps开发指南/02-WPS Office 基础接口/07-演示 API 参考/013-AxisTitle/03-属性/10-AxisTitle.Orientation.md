# AxisTitle.Orientation

返回或设置文本方向。可读/写 **Long** 类型。



## 语法

express.**Orientation**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

any

## 说明


该属性的值可以是介于 -90 至 90 度之间的整数或 **[XlOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/XlOrientation)** 常量之一。



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的分类轴标题的文本方向是否为水平排列。*/
function test() {
    let axisTitle = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    alert(axisTitle.Orientation == xlHorizontal)
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第二个图表的数值轴标题的文本方向。*/
function test() {
    let axisTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue).AxisTitle
    axisTitle.Orientation = 45
}
```
