# PageSetup.SectionStart

返回或设置指定对象的分节符类型。 **WdSectionStart** 类型，可读写。



## 语法

express.**SectionStart**

express   一个代表 **PageSetup** 对象的变量。

## 类型

WdSectionStart

## 示例


```JavaScript
/*本示例将活动文档中所有节的分节符都改为连续的。*/
function test() {
    ActiveDocument.PageSetup.SectionStart = wdSectionContinuous
}
```


```JavaScript
/*本示例返回 Document.docx 文档中第二节开始部分使用的分节符类型，并将其应用于活动文档中的所有节。*/
function test() {
    const type = Documents.Item("Document.docx").Sections.Item(2).PageSetup.SectionStart
    ActiveDocument.PageSetup.SectionStart = type
}
```
