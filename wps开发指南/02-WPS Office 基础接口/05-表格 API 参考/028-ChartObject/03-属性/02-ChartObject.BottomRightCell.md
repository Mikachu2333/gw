# ChartObject.BottomRightCell

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表位于该对象右下角下方的单元格。只读。



## 语法

express.**BottomRightCell**

express   一个代表 **ChartObject** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 中嵌入的第一个图表右下角单元格的地址。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    alert("The bottom right corner is over cell " + chartobject.BottomRightCell.Address())
}
```


```JavaScript
/*此示例为第一张工作表中 Chart2 图表右下角的单元格赋值。*/
function test() {
    let chartobject = Application.Worksheets.Item(1).ChartObjects("Chart 2")
    chartobject.BottomRightCell.Value2 = "WPS"
}
```
