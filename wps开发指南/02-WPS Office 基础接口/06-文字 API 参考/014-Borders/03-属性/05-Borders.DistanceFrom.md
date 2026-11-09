# Borders.DistanceFrom

此属性返回或设置数值，该值指明指定的页面边框是从页面边缘还是从环绕的文本开始度量。 **WdBorderDistanceFrom** ，可读写。



## 语法

express.**DistanceFrom**

express   一个代表 **Borders** 对象的变量。

## 类型

WdBorderDistanceFrom

## 示例


```JavaScript
/*本示例在活动文档中第一节的每个页面添加单线型边框，然后设置每个边框到页面边缘的距离。*/
function test() {
    let section = ActiveDocument.Sections.Item(1)
    for (let i = 1 ; i <= section.Borders.Count; i++) {
        section.Borders.Item(i).LineStyle = wdLineStyleSingle
        section.Borders.Item(i).LineWidth = wdLineWidth050pt
    }
    let borders = section.Borders
    borders.DistanceFrom = wdBorderDistanceFromPageEdge
    borders.DistanceFromTop = 20
    borders.DistanceFromLeft = 22
    borders.DistanceFromBottom = 20
    borders.DistanceFromRight = 22
}
```


```JavaScript
/*本示例在所选内容的第一节的每个页面添加边框，然后将文本与页面边框的距离设置为 6 磅。*/
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
