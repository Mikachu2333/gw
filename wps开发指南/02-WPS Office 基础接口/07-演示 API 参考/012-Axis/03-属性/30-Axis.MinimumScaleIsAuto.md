# Axis.MinimumScaleIsAuto

如果 WPP 计算数值轴的最小值，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**MinimumScaleIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


设置 **[MinimumScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/MinimumScale)** 属性会将该属性设置为 **False** 。



## 示例


```JavaScript
/*本示例自动计算活动演示文稿的第一张幻灯片中第一个图表的数值轴的最小刻度和最大刻度。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlValue)
        axis.MinimumScaleIsAuto = true
        axis.MaximumScaleIsAuto = true
    }
}
```


```JavaScript
/*本示例将第一个演示文稿中第二张图表数值轴的最小刻度设置为2.5，并显示其是否为自动计算。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    axis.MinimumScale = 2.5
    alert(axis.MinimumScaleIsAuto)
}
```
