# Borders.SurroundFooter

如果页面边框环绕文档的页脚，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SurroundFooter**

express   一个代表 **Borders** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动文档中第一节的页面边框格式，使页面边框环绕该节中每个页面的页眉和页脚。*/
function test() {
    let borders = ActiveDocument.Sections.Item(1).Borders
    borders.SurroundFooter = true
    borders.SurroundHeader = true
}
```


```JavaScript
/*本示例为活动文档第一节中的每一页添加艺术型页面边框。该页面边框不环绕页眉和页脚。*/
function test() {
    let section = ActiveDocument.Sections.Item(1)
    section.Borders.SurroundFooter = false
    section.Borders.SurroundHeader = false
    for (let i = 1; i <= section.Borders.Count; i++) {
        section.Borders.Item(i).ArtStyle = wdArtPeople
        section.Borders.Item(i).ArtWidth = 15
    }
}
```
