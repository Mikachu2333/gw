# ChartObjects.Cut

将对象剪切到剪贴板。



## 语法

express.**Cut()**

express   一个代表 **ChartObjects** 对象的变量。

## 返回值

any

## 说明


只可剪切嵌入式图表。



## 示例


```JavaScript
/*本示例将工作表 Sheet1 上所有图表剪切到剪贴板。*/
function test() {
    let chartobjects = Application.Worksheets.Item("Sheet1").ChartObjects()
    chartobjects.Cut()
}
```


```JavaScript
/*本示例将图表工作表 Chart1 上所有图表剪贴到剪贴板。*/
function test() {
    let chartobjects = Application.Charts.Item("Chart1").ChartObjects()
    chartobjects.Cut()
}
```
