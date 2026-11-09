# Axis.BaseUnit

返回或设置指定分类轴的基本单位。可读/写 **[XlTimeUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTimeUnit)** 。



## 语法

express.**BaseUnit**

express   一个代表 **Axis** 对象的变量。

## 类型

XlTimeUnit

## 说明


如果指定坐标轴的 **[CategoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/CategoryType)** 属性设置为 **xlCategoryScale** ，则设置该属性不会看到任何效果。不过，设置值将保留，并在 **CategoryType** 属性设置为 **xlTimeScale** 时起作用。

不能对数值轴设置该属性。



## 示例


```JavaScript
/*本示例将活动文档中第一个图表的分类轴设置为使用以月为基本单位的时间刻度。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlCategory)
        axis.CategoryType = xlTimeScale
        axis.BaseUnit = xlMonths
    }
}
```


```JavaScript
/*本示例判断第一个文档上第一个形状中图表的分类轴的基本单位，并通知用户。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    switch (axis.BaseUnit) {
        case xlDays:
            alert("以天为单位")
            break
        case xlMonths:
            alert("以月为单位")
            break
        case xlYears:
            alert("以年为单位")
            break
    }
}
```
