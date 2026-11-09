# Series.ErrorBars

返回系列的误差线。只读 **[ErrorBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ErrorBars/obj)** 对象。



## 语法

express.**ErrorBars**

express   一个代表 **Series** 对象的变量。

## 类型

ErrorBars

## 示例


```JavaScript
/*本示例将活动文档中第一个图表的第一个系列的误差线设置为虚线。应在第一个系列有误差线的二维折线图上运行该示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).ErrorBars.Border.LineStyle  = xlDash
    }
}
```


```JavaScript
/*本示例删除选中图表的第二个系列的误差线。应在第二个系列有误差线的二维折线图上运行该示例。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(2).ErrorBars.Delete()
    }
}
```
