# ChartObject.TopLeftCell

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表位于指定对象左上角下方的单元格。只读。



## 语法

express.**TopLeftCell**

express   一个代表 **ChartObject** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*此示例显示 Sheet1 上第一张图表左上角下面的单元格的地址。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    alert("The top left corner is over cell " + chartobject.TopLeftCell.Address())
}
```


```JavaScript
/*此示例为工作表 Sheet1 上图表 Chart 2 左上角下方的单元格赋值。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects("Chart 2")
    chartobject.TopLeftCell.Value2 = "金山WPS"
}
```
