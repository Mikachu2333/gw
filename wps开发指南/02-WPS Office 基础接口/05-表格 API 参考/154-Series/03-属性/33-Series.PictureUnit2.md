# Series.PictureUnit2

如果 **PictureType** 属性设置为 **xlStackScale** ，则返回或设置图表上每一个图片的单位。否则忽略此属性。可读/写 **Double** 类型。



## 语法

express.**PictureUnit2**

express   一个代表 **Series** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例将 Chart1 中的系列一设为堆积图片，设置每一图片代表五个单位。此示例应在带图片数据标志的二维柱形图上运行。*/
function test() {
    let Ser = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    Ser.PictureType = xlStackScale
    Ser.PictureUnit2 = 5
}
```


```JavaScript
/*此示例显示第一张工作表上的第一个图表的第三个数据系列的图片单位。此示例应在带图片数据标志的二维柱形图上运行，且图片类型为xlStackScale。*/
function test() {
    let series3 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(3)
    alert(series3.PictureUnit2)
}
```
