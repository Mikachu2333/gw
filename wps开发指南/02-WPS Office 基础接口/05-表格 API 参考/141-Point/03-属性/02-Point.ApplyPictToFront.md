# Point.ApplyPictToFront

如果图片应用于系列中数据点或所有数据点之前，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ApplyPictToFront**

express   一个代表 **Point** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例将图片应用于图表工作表 Chart1 上第二个系列的第三个数据点之前。图片必须已应用于该系列（设置此属性将更改图片的方向）。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).Points(3)
    point.ApplyPictToFront = true
}
```


```JavaScript
/*此示例判断图片是否应用于图表工作表 Chart1 上第一个系列的第三个数据点之前。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Points(3)
    if (point.ApplyPictToFront) {
        alert("图片应用于数据点之前")
    } else {
        alert("图片没有应用于数据点之前")
    }
}
```
