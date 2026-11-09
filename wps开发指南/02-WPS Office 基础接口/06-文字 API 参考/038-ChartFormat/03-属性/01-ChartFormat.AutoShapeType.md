# ChartFormat.AutoShapeType

返回或设置指定对象的自动形状类型。只读 **[MsoAutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoAutoShapeType)** 类型。



## 语法

express.**AutoShapeType**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

MsoAutoShapeType

## 示例


```JavaScript
/*此示例显示活动文档中第一个内嵌图表的第一个数据系列的第一个数据标签的形状是否为 msoShapeRectangle。*/
function test() {
    let chartFormat = ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1).DataLabels(1).Format
    alert(chartFormat.AutoShapeType == msoShapeRectangle)
}
```


```JavaScript
/*此示例判断活动文档中第一张图表的第二个数据系列的第一个数据标签的形状是否为 msoShapeOval，并通知用户。*/
function test() {
    let chartFormat = ActiveDocument.InlineShapes(1).Chart.SeriesCollection(2).DataLabels(1).Format
    if (chartFormat.AutoShapeType == msoShapeOval) {
        alert("数据标签的形状是 msoShapeOval")
    } else {
        alert("数据标签的形状不是 msoShapeOval")
    }
}
```
