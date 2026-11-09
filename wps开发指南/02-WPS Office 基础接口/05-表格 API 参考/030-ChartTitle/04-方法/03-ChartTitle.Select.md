# ChartTitle.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **ChartTitle** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例选择图表工作表 Chart1 的图表标题。*/
function test() {
    let chtitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartTitle
    chtitle.Select()
}
```


```JavaScript
/*本示例选择工作表 Sheet1 中第一张图表的图表标题。*/
function test() {
    let chtitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartTitle
    chtitle.Select()
}
```
