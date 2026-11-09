# ErrorBars 对象

代表图表系列上的误差线。

## 说明


误差线表明图表数据的不确定程度。只有二维图表上的面积、条形、柱形、折线和散点图图表组中的系列可以有误差线。只有散点图组中的系列可以有 x 误差线和 y 误差线。此对象不是集合。没有代表单个误差线的对象；您可以对系列中的所有数据点应用 x 误差线或 y 误差线，也可以禁用它们。

 **[ErrorBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/member/ErrorBar)** 方法可更改误差线的格式和类型。

可以使用 **[ErrorBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/member/ErrorBars)** 属性返回 **ErrorBars** 对象。


## 示例


```JavaScript
/*本示例将活动文档中第一个图表中的第一个数据系列的误差线设置为可见，并设置误差线的尾部样式。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).HasErrorBars = true
        inlineShape.Chart.SeriesCollection(1).ErrorBars.EndStyle = xlCap
    }
}
```


```JavaScript
/*本示例判断如果活动文档上第一个形状中图表的第一个数据系列的误差线名称为“S1E”，则删除该误差线。*/
function test() {
    let errorBars = Application.ActiveDocument.Shapes.Item(1).Chart.SeriesCollection(1).ErrorBars
    if (errorBars.Name == "S1E") {
        errorBars.Delete()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ErrorBars/member/ClearFormats) | 清除对象的格式设置。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ErrorBars/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ErrorBars/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ErrorBars/member/Border) | 返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。 |
| [EndStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ErrorBars/member/EndStyle) | 返回或设置误差线的末端样式。可读/写 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ErrorBars/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ErrorBars/member/Name) | 返回对象的名称。只读 **String** 类型。 |