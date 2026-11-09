# ChartObject.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **ChartObject** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除工作表 Sheet1 上嵌入的第一个图表。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    chartobject.Delete()
}
```


```JavaScript
/*本示例删除图表工作表 Chart1 上的图表 Chart 1 。*/
function test() {
    let chartobject = Application.Charts.Item("Chart1").ChartObjects("Chart 1")
    chartobject.Delete()
}
```
