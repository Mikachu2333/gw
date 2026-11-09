# Borders.ApplyPageBordersToAllSections

将指定的页面边框格式应用于文档中的所有节。



## 语法

express.**ApplyPageBordersToAllSections()**

express   一个代表 **Borders** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例为活动文档的所有节添加单线型页面边框。*/
function test() {
    let section = ActiveDocument.Sections.Item(1)
    for (let i = 1; i <= section.Borders.Count; i++) {
        section.Borders.Item(i).LineStyle = wdLineStyleSingle
        section.Borders.Item(i).LineWidth = wdLineWidth050pt
    }
    section.Borders.ApplyPageBordersToAllSections()
}
```


```JavaScript
/*本示例将所选内容的第一节页面边框的格式应用于文档中的所有节。*/
function test() {
    Selection.Sections.Item(1).Borders.ApplyPageBordersToAllSections()
}
```
