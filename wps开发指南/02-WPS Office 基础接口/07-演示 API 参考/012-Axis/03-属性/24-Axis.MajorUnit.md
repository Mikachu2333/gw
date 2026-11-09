# Axis.MajorUnit

返回或设置数值轴的主要单位。可读/写 **Double** 类型。



## 语法

express.**MajorUnit**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 说明


设置该属性会将 **[MajorUnitIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/MajorUnitIsAuto)** 属性设置为 **False** 。

可以使用 **[TickMarkSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/TickMarkSpacing)** 属性设置分类轴上的刻度线间距。



## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片的第一张图表的数值轴设置主要和次要刻度单位。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlValue)
        axis.MajorUnit = 100
        axis.MinorUnit = 20
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二个图表的数值轴的主要单位。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    alert(axis.MajorUnit)
}
```
