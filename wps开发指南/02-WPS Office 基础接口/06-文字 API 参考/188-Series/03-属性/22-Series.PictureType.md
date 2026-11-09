# Series.PictureType

返回或设置一个指定图片在柱形图或条形图上的显示方式的值。可读/写 **[XlChartPictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartPictureType)** 。



## 语法

express.**PictureType**

express   一个代表 **Series** 对象的变量。

## 类型

XlChartPictureType

## 示例


```JavaScript
/*本示例将活动文档中第一个图表的第一个系列设置为拉伸图片。应在具有图片数据标记的二维柱形图上运行该示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).PictureType = xlStretch
    }
}
```


```JavaScript
/*本示例显示选中的第一个图表的第三个系列的图片的展示方式是否为xlStack。应在具有图片数据标记的二维柱形图上运行该示例。*/
function test() {
    alert(Selection.InlineShapes(1).Chart.SeriesCollection(3).PictureType == xlStack)
}
```
