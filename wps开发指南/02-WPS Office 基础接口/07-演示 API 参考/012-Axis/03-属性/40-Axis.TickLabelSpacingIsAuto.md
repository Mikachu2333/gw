# Axis.TickLabelSpacingIsAuto

返回或设置一个值，它指示刻度标签间距是否是自动设置的。可读/写 **Boolean** 类型。



## 语法

express.**TickLabelSpacingIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


无论该设置是否是自动设置的， **[TickLabelSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/TickLabelSpacing)** 属性均可返回当前的刻度标签间距。



## 示例


```JavaScript
/*本示例自动设置活动演示文稿的第一张幻灯片上第一张图表的分类轴的刻度标签间距。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Axes(xlCategory).TickLabelSpacingIsAuto = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二个图表的分类轴是否自动设置刻度标签间距。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    alert(axis.TickLabelSpacingIsAuto)
}
```
