# ChartArea.RoundedCorners

如果图表的图表区域使用圆角，则为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**RoundedCorners**

express   一个代表 **ChartArea** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例为工作表 Sheet1 上的第一个图表区添加圆角。*/
function test() {
    let chartarea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea
    chartarea.RoundedCorners = true
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 图表区是否为圆角。*/
function test() {
    let chartarea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea
    alert(chartarea.RoundedCorners)
}
```
