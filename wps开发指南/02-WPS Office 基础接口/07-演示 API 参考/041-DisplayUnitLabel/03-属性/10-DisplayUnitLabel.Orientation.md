# DisplayUnitLabel.Orientation

返回或设置文本方向。可读/写 **Long** 类型。



## 语法

express.**Orientation**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

any

## 说明


该属性的值可以是介于 –90 至 90 度之间的整数或 **[XlOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/XlOrientation)** 常量之一。



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表中数值轴上的单位标签的文本方向的角度。*/
function test() {
    let displayUnitLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Orientation)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签的文本方向设置为xlHorizontal。*/
function test() {
    let displayUnitLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Orientation = xlHorizontal
}
```
