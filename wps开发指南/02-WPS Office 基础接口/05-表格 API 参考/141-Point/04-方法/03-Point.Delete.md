# Point.Delete

删除数据点所属的系列。



## 语法

express.**Delete()**

express   一个代表 **Point** 对象的变量。

## 返回值

Variant

## 说明


删除 **[Point](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/obj)** 对象将删除整个数据系列。



## 示例


```JavaScript
/*此示例将删除活动工作表第一个图表上第三个系列。*/
function test() {
    Application.ActiveSheet.ChartObjects(1).Activate()
    ActiveChart.SeriesCollection(3).Points(3).Delete()
}
```


```JavaScript
/*下例判断Chart1的图表工作表上第二个系列中第三个数据点的数据标签如果已打开，则删除该数据点所属系列，否则打开该数据点的数据标签。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).Points(3)
    if (point.HasDataLabel) {
        point.Delete()
        alert("数据点所属系列已删除")
    } else {
        point.HasDataLabel = true
        alert("数据点的数据标签已打开")
    }
}
```
