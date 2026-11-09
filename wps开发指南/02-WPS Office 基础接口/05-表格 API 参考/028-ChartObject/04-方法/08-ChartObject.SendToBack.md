# ChartObject.SendToBack

将对象放到 z-次序的后面。



## 语法

express.**SendToBack()**

express   一个代表 **ChartObject** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例将工作表 Sheet1 上第一个图表放到 z-次序的后面。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    chartobject.SendToBack()
}
```


```JavaScript
/*此示例判断如果工作表 Sheet1 上图表 Chart 2 的索引为2，则将该图表放到 z-次序的后面。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects("Chart 2")
    if (chartobject.Index == 2) {
        chartobject.SendToBack()
    }
}
```
