# Section.Borders

返回 **Borders** 集合，该集合代表节中的所有边框。



## 语法

express.**Borders**

express   一个代表 **Section** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例为活动文档的第一个节顶部添加单线型页面边框，并设置边框宽度。*/
function test() {
    let section = ActiveDocument.Sections.Item(1)
    let border = section.Borders.Item(wdBorderTop)
    border.LineStyle = wdLineStyleSingle
    border.LineWidth = InchesToPoints(0.5)
}
```


```JavaScript
/*本示例为活动文档的所有节添加单线型页面边框*/
function test() {
    let section = Application.ActiveDocument.Sections.Item(1)
    for (let i = 1; i <= section.Borders.Count; i++) {
        section.Borders.Item(i).LineStyle = wdLineStyleSingle
        section.Borders.Item(i).LineWidth = wdLineWidth050pt
    }
    section.Borders.ApplyPageBordersToAllSections()
}
```
