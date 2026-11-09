# Series.PictureUnit2

如果 **[PictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/member/PictureType)** 属性设置为 **xlStackScale** ，则返回或设置图表上每一个图片的单位；否则，将忽略此属性。可读/写 **Double** 类型。



## 语法

express.**PictureUnit2**

express   一个代表 **Series** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例将活动文档中第一个图表的第一个系列设置为叠放图片，并设置每个图片代表五个单位。应在具有图片数据标记的二维柱形图上运行该示例。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let series = inlineShape.Chart.SeriesCollection(1)
        series.PictureType = xlStack
        series.PictureUnit2 = 5
    }
}
```


```JavaScript
/*本示例显示第一个文档中第一个图表的第三个数据系列的图片单位。*/
function test() {
    alert(Application.Documents.Item(1).InlineShapes(1).Chart.SeriesCollection(3).PictureUnit2)
}
```
