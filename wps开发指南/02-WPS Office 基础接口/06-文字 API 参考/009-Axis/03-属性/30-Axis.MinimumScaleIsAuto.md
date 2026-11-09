# Axis.MinimumScaleIsAuto

如果 WPS文字 计算数值轴的最小值，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**MinimumScaleIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


设置 **[MinimumScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MinimumScale)** 属性会将该属性设置为 **False** 。



## 示例


```JavaScript
/*本示例自动计算活动文档中第一个图表的数值轴的最小刻度和最大刻度。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        axis.MinimumScaleIsAuto = true
        axis.MaximumScaleIsAuto = true
    }
}
```


```JavaScript
/*本示例关闭活动文档中第一张图表数值轴的最小刻度自动计算，并将数值轴的最小刻度设置为 2.5。*/
function test() {
    let axis = Application.ActiveDocument.InlineShapes(1).Chart.Axes(xlValue)
    axis.MinimumScaleIsAuto = false
    axis.MinimumScale = 2.5
}
```
