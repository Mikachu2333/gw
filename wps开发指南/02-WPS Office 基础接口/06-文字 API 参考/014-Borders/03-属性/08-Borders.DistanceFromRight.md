# Borders.DistanceFromRight

返回或设置文本的右边与右边框的距离（以磅为单位）。 **Long** 类型，可读写。



## 语法

express.**DistanceFromRight**

express   一个代表 **Borders** 对象的变量。

## 类型

number（int4 精度）

## 说明


将该属性与页边框结合使用，可设置文本与右边框之间的距离，或页面右边缘与页面右边框之间的距离。这个距离是根据 **[DistanceFrom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/DistanceFrom)** 属性的值测量的。



## 示例


```JavaScript
/*本示例为所选内容的每个段落添加边框，并将文本与右边框的距离设置为 3 磅。*/
function test() {
    let borders = Selection.Paragraphs.Borders
    borders.Enable = msoTrue
    borders.DistanceFromRight = 3
}
```


```JavaScript
/*本示例为活动文档中第一节的每页添加单线型页面边框。然后将左右边框与相应的页面边缘的距离设置为 22 磅。*/
function test() {
    let section = ActiveDocument.Sections.Item(1)
    for (let i = 1; i <= section.Borders.Count; i++) {
        section.Borders.Item(i).LineStyle = wdLineStyleSingle
        section.Borders.Item(i).LineWidth = wdLineWidth050pt
    }
    let borders = section.Borders
    borders.DistanceFrom = wdBorderDistanceFromPageEdge
    borders.DistanceFromLeft = 22
    borders.DistanceFromRight = 22
}
```
