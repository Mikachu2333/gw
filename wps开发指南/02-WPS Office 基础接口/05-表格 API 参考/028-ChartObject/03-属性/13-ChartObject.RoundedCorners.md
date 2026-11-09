# ChartObject.RoundedCorners

如果嵌入式图表使用圆角，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**RoundedCorners**

express   一个代表 **ChartObject** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例为工作表 Sheet1 中第一个图表添加圆角。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    chartobject.RoundedCorners = true
}
```


```JavaScript
/*此示例显示第一张工作表中图表 Chart 2 是否使用圆角。*/
function test() {
    let chartobject = Application.Worksheets.Item(1).ChartObjects("Chart 2")
    alert(chartobject.RoundedCorners)
}
```
