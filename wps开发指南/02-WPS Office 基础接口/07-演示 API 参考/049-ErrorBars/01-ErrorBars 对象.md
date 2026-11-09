# ErrorBars 对象

代表图表系列上的误差线。

## 说明


误差线指示图表数据的不确定程度。只有二维图表上的面积图、条形图、柱形图、折线图和散点图组中的系列可以有误差线。只有散点图组中的系列可以有 x 误差线和 y 误差线。此对象不是集合。没有代表单个误差线的对象；或者启用系列中所有数据点的 x 误差线或 y 误差线，或者将其全部禁用。

 **[ErrorBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/ErrorBar)** 方法可更改误差线格式和类型。

使用 **[ErrorBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/ErrorBars)** 属性可返回 **ErrorBars** 对象。


## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的第一个数据系列的误差线设置为可见，并设置误差线的尾部样式。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).HasErrorBars = true
        shape.Chart.SeriesCollection(1).ErrorBars.EndStyle = xlCap
    }
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片中第一个图表的第一个系列的误差线的名称为“S1E”，则删除该误差线。*/
function test() {
    let errorBars = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).ErrorBars
    if (errorBars.Name == "S1E") {
        errorBars.Delete()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ErrorBars/member/ClearFormats) | 清除对象的格式设置。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ErrorBars/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ErrorBars/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ErrorBars/member/Border) | 返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/obj)** 对象。 |
| [EndStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ErrorBars/member/EndStyle) | 返回或设置误差线的末端样式。可读/写 **XlEndStyleCap** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ErrorBars/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ErrorBars/member/Name) | 返回对象的名称。只读 **String** 类型。 |