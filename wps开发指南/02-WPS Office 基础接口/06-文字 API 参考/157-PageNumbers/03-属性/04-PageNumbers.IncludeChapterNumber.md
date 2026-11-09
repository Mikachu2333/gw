# PageNumbers.IncludeChapterNumber

如果页码或题注标签中包含章节号，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IncludeChapterNumber**

express   一个代表 **PageNumbers** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为活动文档中第一节的主页脚添加页码。页码包含章节号。*/
function test() {
    let pageNumbers = ActiveDocument.Sections.Item(1).Footers.Item(wdHeaderFooterPrimary).PageNumbers
    pageNumbers.Add()
    pageNumbers.IncludeChapterNumber = true
    pageNumbers.HeadingLevelForChapter = 1
}
```


```JavaScript
/*本示例设置所选页眉的页码包含章节号，然后设置该页码的编号级别和样式。*/
function test() {
    let pageNumbers = Selection.HeaderFooter.PageNumbers
    pageNumbers.IncludeChapterNumber = true
    pageNumbers.HeadingLevelForChapter = 2
    pageNumbers.NumberStyle = wdCaptionNumberStyleUppercaseLetter
}
```
