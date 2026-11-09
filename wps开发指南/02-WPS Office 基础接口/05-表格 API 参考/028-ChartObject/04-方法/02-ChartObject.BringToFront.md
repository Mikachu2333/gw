# ChartObject.BringToFront

将对象放到 z-次序前面。



## 语法

express.**BringToFront()**

express   一个代表 **ChartObject** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例将第一张工作表上第一个图表放到 z-次序的前面。*/
function test() {
    let chartobject = Application.Worksheets.Item(1).ChartObjects(1)
    chartobject.BringToFront()
}
```


```JavaScript
/*此示例将工作表 Sheet1 上图表 Chart 1 放到 z-次序的前面，并将该图表隐藏。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects("Chart 1")
    chartobject.BringToFront()
    chartobject.Visible = false
}
```
