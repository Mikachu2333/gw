# Borders.DistanceFromBottom

返回或设置文本与下边框的距离（以磅为单位）。 **Long** 类型，可读写。



## 语法

express.**DistanceFromBottom**

express   一个代表 **Borders** 对象的变量。

## 类型

number（int4 精度）

## 说明


将该属性与页边框结合使用，可以设置文本与页面下边框之间的距离，或页面下边缘与下边框之间的距离。这个距离是根据 **[DistanceFrom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/DistanceFrom)** 属性的值测量的。



## 示例


```JavaScript
/*本示例为活动文档的第一个段落添加边框，并将文本与下边框的距离设置为 6 磅。*/
function test() {
    let borders = ActiveDocument.Paragraphs.Item(1).Borders
    borders.Enable = msoTrue
    borders.DistanceFromBottom = 6
}
```


```JavaScript
/*本示例为所选内容的每一节添加边框。然后将文本与上下边框的距离设置为 3 磅，将文本与左右边框的距离设置为 6 磅。*/
function test() {
    for (let i = 1; i <= Selection.Sections.Count; i++) {
        let borders = Selection.Sections.Item(i).Borders
        borders.OutsideLineStyle = wdLineStyleSingle
        borders.OutsideLineWidth = wdLineWidth150pt
        borders.DistanceFromBottom = 3
        borders.DistanceFromTop = 3
        borders.DistanceFromLeft = 6
        borders.DistanceFromRight = 6
    }
}
```
