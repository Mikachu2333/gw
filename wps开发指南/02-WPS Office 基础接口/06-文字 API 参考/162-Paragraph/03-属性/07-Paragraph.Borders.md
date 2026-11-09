# Paragraph.Borders

返回一个 **Borders** 集合，该集合代表指定段落的所有边框。



## 语法

express.**Borders**

express   一个代表 **Paragraph** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例为活动文档中的第一个段落添加边框和边框样式。这里以左边框和上边框为例。*/
function test() {
    let paragraph = Application.ActiveDocument.Paragraphs.Item(1)

    paragraph.Borders.Item(wdBorderTop).LineStyle = wdLineStyleSingle
    paragraph.Borders.Item(wdBorderTop).Color = wdColorRed
    paragraph.Borders.Item(wdBorderTop).LineWidth = wdLineWidth150pt

    paragraph.Borders.Item(wdBorderLeft).LineStyle = wdLineStyleSingle
    paragraph.Borders.Item(wdBorderLeft).Color = wdColorGreen
    paragraph.Borders.Item(wdBorderLeft).LineWidth = wdLineWidth150pt
}
```


```JavaScript
/*本示例为第一个文档的第二个段落添加边框。*/
function test() {
    let paragraph = Documents.Item(1).Paragraphs.Item(2)
    paragraph.Borders.Enable = true
}
```
