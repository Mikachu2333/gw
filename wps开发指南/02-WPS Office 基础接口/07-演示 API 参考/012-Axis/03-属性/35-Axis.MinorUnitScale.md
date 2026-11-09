# Axis.MinorUnitScale

返回或设置当 **[CategoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/CategoryType)** 属性设置为 **xlTimeScale** 时分类轴次要单位的刻度值。可读/写， **[XlTimeUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTimeUnit)** 类型。



## 语法

express.**MinorUnitScale**

express   一个代表 **Axis** 对象的变量。

## 类型

XlTimeUnit

## 说明


 **MinorUnitScale** 可以是以下 **XlTimeUnit** 常量之一：

* **xlMonths** 
* **xlDays** 
* **xlYears** 



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表的分类轴设置为使用时间刻度，并设置主要刻度单位和次要刻度单位。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlCategory)
        axis.CategoryType = xlTimeScale
        axis.MajorUnit = 5
        axis.MajorUnitScale = xlDays
        axis.MinorUnit = 1
        axis.MinorUnitScale = xlDays
    }
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第二个图表的分类轴设置为使用时间刻度，并设置次要刻度单位和轴标题。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    axis.CategoryType = xlTimeScale
    axis.MinorUnitScale = xlYears
    axis.AxisTitle.Caption = "test"
}
```
