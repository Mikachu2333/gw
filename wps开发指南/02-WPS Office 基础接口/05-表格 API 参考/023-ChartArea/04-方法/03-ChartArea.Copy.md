# ChartArea.Copy

将对象复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **ChartArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例复制工作表 Sheet1 上第一个嵌入式图表的图表区到剪贴板。*/
function test() {
    let chartarea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea
    chartarea.Copy()
}
```


```JavaScript
/*此示例复制图表工作表 Chart1 的图表区到剪贴板。*/
function test() {
    let chartarea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea
    chartarea.Copy()
}
```
