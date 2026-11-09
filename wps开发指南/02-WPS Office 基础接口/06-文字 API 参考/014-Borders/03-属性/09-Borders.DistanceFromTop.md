# Borders.DistanceFromTop

返回或设置文本与上边框的距离（以磅为单位）。 **Long** 类型，可读写。



## 语法

express.**DistanceFromTop**

express   一个代表 **Borders** 对象的变量。

## 类型

number（int4 精度）

## 说明


将该属性与页边框结合使用，可设置文本与上边框之间的距离，或页面上边缘与上边框之间的距离。这个距离是根据 **[DistanceFrom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/DistanceFrom)** 属性的值测量的。



## 示例


```JavaScript
/*本示例为所选内容中的每个段落添加边框，并将文本与上边框的距离设置为 3 磅。*/
function test() {
    Selection.Borders.Enable = msoTrue
    Selection.Borders.DistanceFromTop = 3
}
```


```JavaScript
/*本示例为所选内容中第一节的每页添加页面边框，并将文本与页面边框的距离设置为 6 磅。*/
function test() {
    let section = Selection.Sections.Item(1)
    for (let i = 1; i <= section.Borders.Count; i++) {
        section.Borders.Item(i).ArtStyle = wdArtSeattle
        section.Borders.Item(i).ArtWidth = 22
    }
    let borders = section.Borders
    borders.DistanceFrom = wdBorderDistanceFromText
    borders.DistanceFromTop = 6
    borders.DistanceFromLeft = 6
    borders.DistanceFromBottom = 6
    borders.DistanceFromRight = 6
}
```
