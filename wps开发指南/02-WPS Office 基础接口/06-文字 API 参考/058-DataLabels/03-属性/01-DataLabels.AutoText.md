# DataLabels.AutoText

如果集合中的所有对象根据上下文自动生成合适的文字，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**AutoText**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 说明


设置该属性的值会设置集合中包含的所有 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabel/obj)** 对象的 **[AutoText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabel/member/AutoText)** 属性。仅在集合中包含的所有 **DataLabel** 对象的 **AutoText** 属性设置为 **True** 时，该属性才返回 **True** ；否则，该属性返回 **False** 。



## 示例


```JavaScript
/*此示例将活动文档中第一张内嵌图表的第一个数据系列的数据标签设置为自动生成合适的文字。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).DataLabels().AutoText = true
    }
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的标题文本为“成绩表_2”，则显示该图表第二个数据系列的数据标签是否自动生成合适的文字。*/
function test() {
    let chart = Application.Documents.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "成绩表_2") {
        alert(chart.SeriesCollection(2).DataLabels().AutoText)
    }
}
```
