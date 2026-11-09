# Series.BubbleSizes

返回或设置一个字符串，该字符串引用包含气泡图 x 值、y 值和大小数据的工作表单元格。在返回单元格引用时，它将返回以 A1 样式注释描述单元格的字符串。要为气泡图设置大小数据，必须使用 R1 样式注释。仅适用于气泡图。 **Variant** 类型，可读写。



## 语法

express.**BubbleSizes**

express   一个代表 **Series** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示图表系列中包含的气泡图 x 值、y 值和大小数据。*/
function test() {
    alert(Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1).BubbleSizes.toString())
}
```


```JavaScript
/*此示例说明如何使用 R1C1 样式表示法设置BubbleSizes属性。*/
function test() {
    Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1).BubbleSizes = "=Sheet1!r1c5:r5c5"
}
```
