# ChartObjects.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **ChartObjects** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例判断如果工作表 Sheet1 上图表的数量大于等于 2 ，则将该工作表上所有图表删除。*/
function test() {
    let chartobjects = Application.Worksheets.Item("Sheet1").ChartObjects()
    if (chartobjects.Count >= 2) {
        chartobjects.Delete()
    }
}
```


```JavaScript
/*本示例删除图表工作表 Chart1 上所有图表。*/
function test() {
    let chartobjects = Application.Charts.Item("Chart1").ChartObjects()
    chartobjects.Delete()
}
```
