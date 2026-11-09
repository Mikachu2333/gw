# Axis.BaseUnit

返回或设置指定分类轴的基本单位。可读/写 **[XlTimeUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTimeUnit)** 。



## 语法

express.**BaseUnit**

express   一个代表 **Axis** 对象的变量。

## 类型

XlTimeUnit

## 说明


如果指定坐标轴的 **[CategoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/CategoryType)** 属性设置为 **xlCategoryScale** ，则设置该属性不会看到任何效果。不过，设置值将保留，并在 **CategoryType** 属性设置为 **xlTimeScale** 时起作用。

不能对数值轴设置该属性。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个图表的分类轴设置为使用以月为基本单位的时间刻度。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlCategory)
        axis.CategoryType = xlTimeScale
        axis.BaseUnit = xlMonths
    }
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第二个图表的分类轴是否以天为基本单位。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    axis.CategoryType = xlTimeScale
    alert(axis.BaseUnit == xlDays)
}
```
