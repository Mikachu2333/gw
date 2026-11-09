# ChartObject.PrintObject

如果打印文档时也打印指定对象，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrintObject**

express   一个代表 **ChartObject** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例设置当打印工作表 sheet1 时连同第一个图表一起打印。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    chartobject.PrintObject = true
}
```


```JavaScript
/*此示例显示当打印工作表 sheet1 时是否连同图表 Chart 2 一起打印。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects("Chart 2")
    alert(chartobject.PrintObject)
}
```
