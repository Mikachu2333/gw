# Axis.MinorUnitScale

当 **[CategoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/CategoryType)** 属性设置为 **xlTimeScale** 时，返回或设置分类轴的次要单位刻度值。可读/写 **[XlTimeUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTimeUnit)** 。



## 语法

express.**MinorUnitScale**

express   一个代表 **Axis** 对象的变量。

## 类型

XlTimeUnit

## 说明


 **MinorUnitScale** 可以是下列 **XlTimeUnit** 常量之一：

* **xlMonths** 
* **xlDays** 
* **xlYears** 



## 示例


```JavaScript
/*本示例将活动文档中第一张内嵌图表的分类轴设置为使用时间刻度，并设置主要刻度单位和次要刻度单位。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlCategory)
        axis.CategoryType = xlTimeScale
        axis.MajorUnit = 5
        axis.MajorUnitScale = xlDays
        axis.MinorUnit = 1
        axis.MinorUnitScale = xlDays
    }
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的分类轴设置为使用时间刻度，并设置次要刻度单位和轴标题。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    axis.CategoryType = xlTimeScale
    axis.MinorUnitScale = xlYears
    axis.AxisTitle.Caption = "年度报告"
}
```
