# ChartObject.Copy

将对象复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **ChartObject** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例将工作表 Sheet1 上嵌入的第一个图表复制到剪贴板。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    chartobject.Copy()
}
```


```JavaScript
/*本示例将第一张工作表中图表 Chart 2 复制到剪贴板。*/
function test() {
    let chartobject = Application.Worksheets.Item(1).ChartObjects("Chart 2")
    chartobject.Copy()
}
```
