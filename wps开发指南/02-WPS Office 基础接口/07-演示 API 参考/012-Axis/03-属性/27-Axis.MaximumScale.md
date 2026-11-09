# Axis.MaximumScale

返回或设置数值轴上的最大值。可读/写 **Double** 类型。



## 语法

express.**MaximumScale**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 说明


设置该属性会将 **[MaximumScaleIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/MaximumScaleIsAuto)** 属性设置为 **False** 。



## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一张图表的数值轴设置最小和最大值。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlValue)
        axis.MinimumScale = 10
        axis.MaximumScale = 120
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二个图表的数值轴上的最大值。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    alert(axis.MaximumScale)
}
```
