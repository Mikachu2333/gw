# Legend.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Legend** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例选择图表工作表 Chart1 的图例。*/
function test() {
    let legend = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend
    legend.Select()
}
```


```JavaScript
/*本示例选择工作表 Sheet1 中第一张图表的图例。*/
function test() {
    let legend = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Legend
    legend.Select()
}
```
