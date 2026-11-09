# ChartObjects.Visible

返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。



## 语法

express.**Visible**

express   一个代表 **ChartObjects** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 上所有图表是否可见。*/
function test() {
    let chartobjects = Application.Worksheets.Item("Sheet1").ChartObjects()
    alert(chartobjects.Visible)
}
```


```JavaScript
/*此示例设置图表工作表 Chart1 上所有图表为不可见。*/
function test() {
    let chartobjects = Application.Charts.Item("Chart1").ChartObjects()
    chartobjects.Visible = false
}
```
