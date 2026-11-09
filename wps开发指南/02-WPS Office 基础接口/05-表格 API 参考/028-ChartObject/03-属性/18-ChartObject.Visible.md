# ChartObject.Visible

返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。



## 语法

express.**Visible**

express   一个代表 **ChartObject** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例判断工作表 Sheet1 上图表 Chart 2 是否可见，并通知用户。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects("Chart 2")
    if (chartobject.Visible) {
        alert("图表 Chart 2 可见")
    } else {
        alert("图表 Chart 2 不可见")
    }
}
```


```JavaScript
/*此示例将工作表 Sheet1 上第一个图表设置为不可见。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    chartobject.Visible = false
}
```
