# Border.ArtStyle

返回或设置文档的艺术型页面边框。 **WdPageBorderArt** 类型，可读写。



## 语法

express.**ArtStyle**

express   一个代表 **Border** 对象的变量。

## 类型

WdPageBorderArt

## 示例


```JavaScript
/*本示例为选定内容的第一节的每个页面添加由黑点构成的边框*/
function test() {
    for (let i = 1; i <= Application.Selection.Sections.Item(1).Borders.Count; i++) {
        Application.Selection.Sections.Item(1).Borders.Item(i).ArtStyle = wdArtBasicBlackDots
        Application.Selection.Sections.Item(1).Borders.Item(i).ArtWidth = 6
    }
}
```


```JavaScript
/*本示例在活动文档中第一节的文档文本之前添加艺术型页面边框，并设置其宽度为15磅*/
function test() {
    let sec = Application.ActiveDocument.Sections.Item(1)
    sec.Borders.AlwaysInFront = true
    for (let i = 1; i <= sec.Borders.Count; i++) {
        sec.Borders.Item(i).ArtStyle = wdArtPeople
        sec.Borders.Item(i).ArtWidth = 15
    }
}
```
