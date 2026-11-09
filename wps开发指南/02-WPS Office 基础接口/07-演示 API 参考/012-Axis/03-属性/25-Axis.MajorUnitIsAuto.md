# Axis.MajorUnitIsAuto

如果 WPP 计算数值轴的主要单位，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**MajorUnitIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


设置 **[MajorUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/MajorUnit)** 属性会将该属性设置为 **False** 。



## 示例


```JavaScript
/*本示例自动计算活动演示文稿的第一张幻灯片的第一张图表的数值轴的主要和次要刻度单位。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlValue)
        axis.MajorUnitIsAuto = true
        axis.MinorUnitIsAuto = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二个图表的数值轴的主要单位是否由WPP计算。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    alert(axis.MajorUnitIsAuto)
}
```
