# ChartObject.Cut

将对象剪切到剪贴板。



## 语法

express.**Cut()**

express   一个代表 **ChartObject** 对象的变量。

## 返回值

any

## 说明


只可剪切嵌入式图表。



## 示例


```JavaScript
/*本示例将工作表 Sheet1 上嵌入的第一个图表剪切到剪贴板。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    chartobject.Cut()
}
```


```JavaScript
/*本示例将第一张工作表上嵌入的图表 Chart 2 剪切到剪贴板。*/
function test() {
    let chartobject = Application.Worksheets.Item(1).ChartObjects("Chart 2")
    chartobject.Cut()
}
```
