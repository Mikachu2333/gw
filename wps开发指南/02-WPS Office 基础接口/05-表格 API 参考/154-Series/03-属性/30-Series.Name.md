# Series.Name

返回或设置一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **Series** 对象的变量。

## 类型

string

## 说明


您可以使用 R1C1 符号进行引用，例如“=Sheet1!R1C1”。



## 示例


```JavaScript
/*此示例将第一张工作表上的第一个图表的第二个数据系列名称设置为“系列二”。*/
function test() {
    let series2 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    series2.Name = "系列二"
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 上的第三个数据系列的名称。*/
function test() {
    let series3 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3)
    alert(series3.Name)
}
```
