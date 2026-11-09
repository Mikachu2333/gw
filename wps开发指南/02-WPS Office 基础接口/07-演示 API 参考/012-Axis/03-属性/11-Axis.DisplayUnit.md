# Axis.DisplayUnit

返回或设置数值轴的单位标签。可读/写 **[XlDisplayUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDisplayUnit)** 。



## 语法

express.**DisplayUnit**

express   一个代表 **Axis** 对象的变量。

## 类型

XlDisplayUnit

## 说明


在绘制大数值图表时，使用单位标签可使刻度线标签更易于阅读。例如，如果将数值轴的单位设置为百、千或百万，则可以在坐标轴的刻度标志上使用较小的数值。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表的数值轴的显示单位设置为百。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlValue)
        axis.DisplayUnit = xlHundreds
        axis.HasTitle = true
        axis.AxisTitle.Caption = "Rebate Amounts"
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二个图表的数值轴的单位标签是否为千。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    alert(axis.DisplayUnit == xlThousands)
}
```
