# DataLabels.AutoText

如果集合中的所有对象根据上下文自动生成合适的文字，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**AutoText**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 说明


设置该属性的值可为集合中包含的所有 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/obj)** 对象设置 **[AutoText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/AutoText)** 属性。仅当集合包含的所有 **DataLabel** 对象的 **AutoText** 属性都设置为 **True** 时，该属性才返回 **True** ；否则，该属性将返回 **False** 。



## 示例


```JavaScript
/*此示例将活动演示文稿的第一张幻灯片中第一张图表的第一个数据系列的数据标签设置为自动生成合适的文字。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).DataLabels().AutoText = true
    }
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题文本为“test”，则显示该图表第二个数据系列的数据标签是否自动生成合适的文字。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "test") {
        alert(chart.SeriesCollection(2).DataLabels().AutoText)
    }
}
```
