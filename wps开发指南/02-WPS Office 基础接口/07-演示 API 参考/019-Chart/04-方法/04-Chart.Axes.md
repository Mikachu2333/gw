# Chart.Axes

返回图表中的坐标轴集合。



## 语法

express.**Axes(Type, AxisGroup)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | any | 要返回的坐标轴。可为下列 **[XlAxisType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisType)** 常量之一： **xlValue** 、 **xlCategory** 或 **xlSeriesAxis** （ **xlSeriesAxis** 仅对三维图表有效）。 |
| AxisGroup | 可选 | XlAxisGroup | 指定坐标轴组的一个枚举值。默认值为 **xlPrimary** 。三维图表仅有一个坐标轴组。 |

## 返回值

一个包含图表中选定的坐标轴的 [Axes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axes/obj) 对象。

## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片的第一张图表的分类轴添加轴标签。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlCategory)
        axis.HasTitle = true
        axis.AxisTitle.Text = "July Sales"
    }
}
```


```JavaScript
/*本示例将关闭活动演示文稿的第一张幻灯片的第一张图表中分类轴的主要网格线。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlCategory)
        axis.HasMajorGridlines = false
    }
}
```


```JavaScript
/*本示例将关闭活动演示文稿的第一张幻灯片的第一张图表中所有坐标轴的所有网格线。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        for (let i = 1; i <= shape.Chart.Axes().Count; i++) {
            shape.Chart.Axes().Item(i).HasMajorGridlines = false
            shape.Chart.Axes().Item(i).HasMinorGridlines = false
        }
    }
}
```
