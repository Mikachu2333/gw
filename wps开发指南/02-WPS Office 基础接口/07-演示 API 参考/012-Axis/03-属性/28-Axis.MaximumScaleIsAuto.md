# Axis.MaximumScaleIsAuto

如果 WPP 计算数值轴的最大值，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**MaximumScaleIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


设置 **[MaximumScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/MaximumScale)** 属性会将该属性设置为 **False** 。



## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一张图表的数值轴自动计算最小刻度和最大刻度。*/
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
/*本示例显示第一个演示文稿的第一张幻灯片上第二个图表的数值轴的最大值是否由WPP计算。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    alert(axis.MaximumScaleIsAuto)
}
```
