# Point.PictureUnit2

如果 **[PictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/PictureType)** 属性设置为 **xlStackScale** ，则返回或设置图表上每一个图片的单位。否则忽略此属性。可读/写 **Double** 类型。



## 语法

express.**PictureUnit2**

express   一个代表 **Point** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例设置第一张工作表上第一个图表的第二个数据系列的第4个数据点上每个图片的单位。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    series.Points(4).PictureUnit2 = 5
}
```


```JavaScript
/*本示例显示 Chart1 中第一个数据系列的第4个数据点上每个图片的单位。*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    alert(series.Points(4).PictureUnit2)
}
```
