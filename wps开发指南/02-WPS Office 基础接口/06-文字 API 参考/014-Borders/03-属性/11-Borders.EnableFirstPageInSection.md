# Borders.EnableFirstPageInSection

如果可为节内第一页设置页面边框，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableFirstPageInSection**

express   一个代表 **Borders** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为选定内容的第一节的首页添加页面边框。*/
function test() {
    let section = Selection.Sections.Item(1)
    section.Borders.EnableFirstPageInSection = true
    section.Borders.EnableOtherPagesInSection = false
    for (let i = 1; i <= section.Borders.Count; i++) {
        section.Borders.Item(i).ArtStyle = wdArtPeople
        section.Borders.Item(i).ArtWidth = 15
    }
}
```


```JavaScript
/*本示例显示是否为活动文档第一节的第一页设置页面边框。*/
function test() {
    alert(ActiveDocument.Sections.Item(1).Borders.EnableFirstPageInSection)
}
```
