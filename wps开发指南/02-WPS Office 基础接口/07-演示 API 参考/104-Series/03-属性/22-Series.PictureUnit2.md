# Series.PictureUnit2

如果 **[PictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/PictureType)** 属性设置为 **xlStackScale** ，则返回或设置图表上每一个图片的单位；否则，将忽略此属性。可读/写 **Double** 类型。



## 语法

express.**PictureUnit2**

express   一个代表 **Series** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例设置活动演示文稿上第一张幻灯片中第一个图表的第一个系列的图片显示方式，并用每个图片代表五个单位。应在带有图片数据标记的二维柱形图上运行该示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let series = shape.Chart.SeriesCollection(1)
        series.PictureType = xlStackScale
        series.PictureUnit2 = 5
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表的第二个系列上每个图片的单位。应在带有图片数据标记的二维柱形图上运行该示例。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1).Chart.SeriesCollection(2)
    series.PictureType = xlStackScale
    alert(series.PictureUnit2)
}
```
