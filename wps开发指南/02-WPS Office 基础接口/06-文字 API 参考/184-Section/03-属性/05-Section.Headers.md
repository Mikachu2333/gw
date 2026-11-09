# Section.Headers

返回一个 **HeadersFooters** 集合，该集合代表指定节的页眉。只读。



## 语法

express.**Headers**

express   一个代表 **Section** 对象的变量。

## 类型

HeadersFooters

## 说明


要返回代表指定节的页脚的 **HeadersFooters** 集合，请使用 **Footers** 属性。



## 示例


```JavaScript
/*本示例为活动文档中除首页之外的每页添加居中的页码（为首页创建一个独立的页眉）。*/
function test() {
    let headerFooter = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary)
    headerFooter.PageNumbers.Add(wdAlignPageNumberCenter, false)
}
```


```JavaScript
/*本示例将向活动文档首页页眉添加文本。*/
function test() {
    ActiveDocument.PageSetup.DifferentFirstPageHeaderFooter = true
    let headerFooter = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterFirstPage)
    headerFooter.Range.InsertAfter("First Page Text")
    headerFooter.Range.Paragraphs.Alignment = wdAlignParagraphRight
}
```
