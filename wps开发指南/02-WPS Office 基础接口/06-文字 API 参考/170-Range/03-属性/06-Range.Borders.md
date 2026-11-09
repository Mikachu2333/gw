# Range.Borders

返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/obj)** 集合，该集合代表指定对象的所有边框。



## 语法

express.**Borders**

express   一个代表 **Range** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例启用活动文档中第一个段落的边框，并设置外边框的颜色。*/
function test() {
    let borders = ActiveDocument.Paragraphs.Item(1).Range.Borders
    borders.Enable = msoTrue
    borders.OutsideColor = wdColorBlue
}
```


```JavaScript
/*本示例启用所选内容的边框，并设置外边框的线条样式和线条宽度。*/
function test() {
    let borders = Selection.Range.Borders
    borders.Enable = msoTrue
    borders.OutsideLineStyle = wdLineStyleDashDot
    borders.OutsideLineWidth = wdLineWidth150pt
}
```
