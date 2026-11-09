# Border.ArtWidth

返回或设置指定艺术型边框的宽度（以磅为单位）。 **Number** 类型，可读写。



## 语法

express.**ArtWidth**

express   一个代表 **Border** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例为选定内容的第一节的每个页面添加由黑点构成的宽为 6 磅的边框*/
function test() {
    for (let i = 1; i <= Application.Selection.Sections.Item(1).Borders.Count; i++) {
        let Bor = Application.Selection.Sections.Item(1).Borders.Item(i)
        Bor.ArtStyle = wdArtBasicBlackDots
        Bor.ArtWidth = 6
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
