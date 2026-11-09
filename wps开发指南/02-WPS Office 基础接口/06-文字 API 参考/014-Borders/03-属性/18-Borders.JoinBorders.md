# Borders.JoinBorders

如果删除段落和表格边缘的垂直边框，以使水平边框与页面边框相连，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**JoinBorders**

express   一个代表 **Borders** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为所选内容的第一节中的每页添加边框，并删除段落和表格边缘的垂直边框，以使水平边框能与页面边框相连。*/
function test() {
    let section = Selection.Sections.Item(1)
    for (let i = 1; i <= section.Borders.Count; i++) {
        section.Borders.Item(i).ArtStyle = wdArtBalloonsHotAir
        section.Borders.Item(i).ArtWidth = 15
    }
    let borders = section.Borders
    borders.DistanceFromLeft = 2
    borders.DistanceFromRight = 2
    borders.DistanceFrom = wdBorderDistanceFromText
    borders.JoinBorders = true
}
```


```JavaScript
/*本示例显示活动文档第一节是否删除段落和表格边缘的垂直边框，以使水平边框能与页面边框相连。*/
function test() {
    alert(ActiveDocument.Sections.Item(1).Borders.JoinBorders)
}
```
