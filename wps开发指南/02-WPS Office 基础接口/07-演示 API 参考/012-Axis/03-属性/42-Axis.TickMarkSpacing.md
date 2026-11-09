# Axis.TickMarkSpacing

返回或设置刻度线标记之间的分类数或系列数。可读/写 **Long** 类型。



## 语法

express.**TickMarkSpacing**

express   一个代表 **Axis** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性只适用于分类轴和系列轴。它可以是介于 1 到 31999 之间的值。

使用 **[MajorUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/MajorUnit)** 和 **[MinorUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/MinorUnit)** 属性可设置数值轴上的刻度线间距。



## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一张图表的分类轴上刻度线之间的分类数。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Axes(xlCategory).TickMarkSpacing = 10
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二个图表的分类轴的刻度线之间的分类数。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    alert(axis.TickMarkSpacing)
}
```
