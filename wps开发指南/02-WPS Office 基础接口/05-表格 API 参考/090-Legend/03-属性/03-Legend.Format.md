# Legend.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **Legend** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将工作表一上嵌入图表一的图例的前景色设置为蓝色。*/
function test() {
    let format = Worksheets.Item(1).ChartObjects(1).Chart.Legend.Format
    format.Fill.ForeColor.RGB = RGB(0, 0, 255)
}
```


```JavaScript
/*此示例给图表工作表 Chart1 上的第一个图表中的图例添加阴影，并向右侧偏移 5 磅。*/
function test() {
    let format = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.Format
    format.Shadow.OffsetX = 5
}
```
