# PageNumbers.HeadingLevelForChapter

返回或设置文档中章节标题应用的标题级别样式。 **Long** 类型，可读写。



## 语法

express.**HeadingLevelForChapter**

express   一个代表 **PageNumbers** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **HeadingLevelForChapter** 属性可以是从 0（零）到 8 之间的一个数字，和从 1 到 9 的标题级别相对应。

在创建带有章节号的页码之前，文档标题必须应用一个多级符号格式，该格式所使用的样式来源于 **“项目符号和编号”** 对话框。若要在 JavaScript 中进行此操作，需使用 **ApplyListTemplate** 方法。



## 示例


```JavaScript
/*此示例创建一个新文档，添加章节标题和分页符，然后使用“项目符号和编号”对话框中列出的第七个多级编号样式设置文档的格式，最后将居中的页码（包括章节号）添加到页眉中；短划线分隔章节号和页码。第一级标题用于章节号，小写罗马数字用于页码。*/
function test() {
    Documents.Add()
    for (let i = 1; i <= 5; i++) {
        Selection.TypeParagraph()
        Selection.InsertBreak()
    }
    ActiveDocument.Content.Style = wdStyleHeading1
    ActiveDocument.Content.ListFormat.ApplyListTemplate(ListGalleries(wdOutlineNumberGallery).ListTemplates(7))

    let pageNumbers = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers
    pageNumbers.Add(wdAlignPageNumberCenter)
    pageNumbers.NumberStyle = wdPageNumberStyleArabic
    pageNumbers.IncludeChapterNumber = true
    pageNumbers.HeadingLevelForChapter = 0
    pageNumbers.ChapterPageSeparator = wdSeparatorEnDash
}
```


```JavaScript
/*本示例显示所选页眉中页码的章节标题级别。*/
function test() {
    alert(Selection.HeaderFooter.PageNumbers.HeadingLevelForChapter)
}
```
