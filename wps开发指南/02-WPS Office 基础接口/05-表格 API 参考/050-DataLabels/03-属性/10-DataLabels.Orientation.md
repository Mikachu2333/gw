# DataLabels.Orientation

返回或设置一个 **Variant** 值，它代表文本方向。



## 语法

express.**Orientation**

express   一个代表 **DataLabels** 对象的变量。

## 类型

any

## 说明


此属性的值可以设置为 -90 到 90 度的整数值，或设置为 **[XlOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlOrientation)**  常量之一。



## 示例


```JavaScript
/*此示例显示工作表 Sheet1 中第一个图表的第一个数据序列的数据标签的文字方向是否为水平排列。*/
function test() {
    let datalabels = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels()
    alert(datalabels.Orientation == xlHorizontal)
}
```


```JavaScript
/*此示例将图表工作表 Chart1 中图表的第一个数据序列的数据标签的文字方向设置为向下排列。*/
function test() {
    let datalabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels()
    datalabels.Orientation = xlDownward
}
```
