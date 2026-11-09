# Axis.TickLabelSpacingIsAuto

返回或设置表示是否自动设置刻度标签间距的值。可读/写 **Boolean** 类型。



## 语法

express.**TickLabelSpacingIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


 **[TickLabelSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/TickLabelSpacing)** 属性返回当前的刻度标签间距，不管该设置是否是自动完成的。



## 示例


```JavaScript
/*本示例自动设置活动文档上第一张内嵌图表的分类轴的刻度标签间距。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Axes(xlCategory).TickLabelSpacingIsAuto = true
    }
}
```


```JavaScript
/*本示例关闭第一个文档上第一个形状中图表的分类轴自动设置刻度标签间距，并将该刻度线标签间距设置为 3。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    axis.TickLabelSpacingIsAuto = false
    axis.TickLabelSpacing = 3
}
```
