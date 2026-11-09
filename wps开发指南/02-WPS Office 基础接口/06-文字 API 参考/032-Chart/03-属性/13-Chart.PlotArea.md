# Chart.PlotArea

返回图表的绘图区。只读 **[PlotArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/obj)** 对象。



## 语法

express.**PlotArea**

express   一个代表 **Chart** 对象的变量。

## 类型

PlotArea

## 示例


```JavaScript
/*本示例将活动文档第一个图表的绘图区的前景填充色设置为红色。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.PlotArea.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例显示活动文档第一个图表的绘图区的高度和宽度。*/
function test() {
    let plotArea = ActiveDocument.InlineShapes(1).Chart.PlotArea
    alert(`高为 ${plotArea.Height} 磅\n宽为 ${plotArea.Width} 磅`)
}
```
