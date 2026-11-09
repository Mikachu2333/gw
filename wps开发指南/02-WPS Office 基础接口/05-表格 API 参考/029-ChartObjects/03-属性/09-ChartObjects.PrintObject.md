# ChartObjects.PrintObject

如果打印文档时也打印指定对象，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrintObject**

express   一个代表 **ChartObjects** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例设置当打印工作表 Sheet1 时连同所有图表一起打印。*/
function test() {
    let chartobjects = Application.Worksheets.Item("Sheet1").ChartObjects()
    chartobjects.PrintObject = true
}
```


```JavaScript
/*此示例设置当打印图表工作表 Chart1 时其中的图表不连同打印。*/
function test() {
    let chartobjects = Application.Charts.Item("Chart1").ChartObjects()
    chartobjects.PrintObject = false
}
```
