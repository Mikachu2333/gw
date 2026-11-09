# Axis.DisplayUnit

返回或设置数值轴的单位标签。可读/写 **[XlDisplayUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDisplayUnit)** 、 **xlCustom** 或 **xlNone** 常量。



## 语法

express.**DisplayUnit**

express   一个代表 **Axis** 对象的变量。

## 类型

XlDisplayUnit

## 说明


在绘制大数值图表时，使用单位标签可使刻度线标签更易于阅读。例如，如果将数值轴的单位设置为百、千或百万，则可以在坐标轴的刻度标志上使用较小的数字值。



## 示例


```JavaScript
/*本示例将活动文档中的第一张内嵌图表的数值轴的显示单位设置为百。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        axis.DisplayUnit = xlHundreds
        axis.HasTitle = true
        axis.AxisTitle.Caption = "Rebate Amounts"
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴的单位标签是否为千。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    alert(axis.DisplayUnit == xlThousands)
}
```
