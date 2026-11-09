# Axis.CategoryType

返回或设置分类轴类型。可读/写 **[XlCategoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlCategoryType)** 。



## 语法

express.**CategoryType**

express   一个代表 **Axis** 对象的变量。

## 类型

XlCategoryType

## 说明


不能对数值轴设置该属性。



## 示例


```JavaScript
/*本示例将活动文档中第一张内嵌图表的分类轴设置为使用以月为基本单位的时间刻度。*/
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
/*本示例判断第一个文档上第一个形状中图表的分类轴的类型，并通知用户。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    switch (axis.CategoryType) {
        case xlAutomaticScale:
            alert("WPS控制坐标轴类型")
            break
        case xlCategoryScale:
            alert("轴按一组任意类别组合数据")
            break
        case xlTimeScale:
            alert("轴按时间刻度组合数据")
            break
    }
}
```
