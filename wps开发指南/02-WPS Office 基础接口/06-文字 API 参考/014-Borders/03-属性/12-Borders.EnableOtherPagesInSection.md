# Borders.EnableOtherPagesInSection

如果可为本节中除首页之外的所有页面设置页面边框，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableOtherPagesInSection**

express   一个代表 **Borders** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为选定内容的第一节除首页外的所有页面添加边框。*/
function test() {
    let section = Selection.Sections.Item(1)
    section.Borders.EnableFirstPageInSection = false
    section.Borders.EnableOtherPagesInSection = true
    for (let i = 1; i <= section.Borders.Count; i++) {
        section.Borders.Item(i).ArtStyle = wdArtBabyRattle
        section.Borders.Item(i).ArtWidth = 22
    }
}
```


```JavaScript
/*本示例显示是否为活动文档第一节除首页外的所有页面设置页面边框。*/
function test() {
    alert(ActiveDocument.Sections.Item(1).Borders.EnableOtherPagesInSection)
}
```
