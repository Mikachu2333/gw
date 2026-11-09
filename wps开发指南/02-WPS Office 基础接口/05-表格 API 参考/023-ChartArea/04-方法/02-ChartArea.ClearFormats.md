# ChartArea.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **ChartArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例清除工作表 Sheet1 上第一个嵌入式图表的格式设置。*/
function test() {
    let chartarea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea
    chartarea.ClearFormats()
}
```


```JavaScript
/*此示例清除图表工作表 Chart1 的格式设置。*/
function test() {
    let chartarea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea
    chartarea.ClearFormats()
}
```
