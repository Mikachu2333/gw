# ChartFormat.AutoShapeType

返回指定形状的类型。只读 **[MsoAutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoAutoShapeType)** 类型。



## 语法

express.**AutoShapeType**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

MsoAutoShapeType

## 示例


```JavaScript
/*此示例显示图表工作表 Chart1 上图表的第一个数据系列的第一个数据标签的形状是否为 msoShapeRectangle。*/
function test() {
    let chartformat = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels(1).Format
    alert(chartformat.AutoShapeType == msoShapeRectangle)
}
```


```JavaScript
/*此示例判断工作表 Sheet1 上第一张图表的第二个数据系列的第一个数据标签的形状是否为 msoShapeOval，并通知用户。*/
function test() {
    let chartformat = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(2).DataLabels(1).Format
    if (chartformat.AutoShapeType == msoShapeOval) {
        alert("数据标签的形状是 msoShapeOval")
    } else {
        alert("数据标签的形状不是 msoShapeOval")
    }
}
```
