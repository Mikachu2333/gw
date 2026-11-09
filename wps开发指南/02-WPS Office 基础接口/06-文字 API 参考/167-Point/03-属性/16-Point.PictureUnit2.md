# Point.PictureUnit2

如果 **[PictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/PictureType)** 属性设置为 **xlStackScale** ，则返回或设置图表上每一个图片的单位（否则，将忽略该属性）。可读/写 **Double** 类型。



## 语法

express.**PictureUnit2**

express   一个代表 **Point** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例判断如果活动文档中第一个内嵌图表的第一个数据系列的第四个数据点的图片的显示方式为xlStackScale，则设置该数据点上每个图片的单位。*/
function test() {
    let point = ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1).Points(4)
    if (point.PictureType == xlStackScale) {
        point.PictureUnit2 = 5
    }
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的第三个数据系列的第二个数据点的图片的显示方式设置为xlStackScale，并显示该数据点上每个图片的单位。*/
function test() {
    let point = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points(2)
    point.PictureType = xlStackScale
    alert(point.PictureUnit2)
}
```
