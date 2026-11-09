# HeaderFooter.LinkToPrevious

如果指定页眉或页脚链接至前一节中相应的页眉或页脚，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**LinkToPrevious**

express   一个代表 **HeaderFooter** 对象的变量。

## 类型

boolean

## 说明


链接页眉或页脚时，其内容与前一个页眉或页脚中的内容相同。因为默认情况下， **LinkToPrevious** 属性设为 **True** ，所以可以通过设置第一节的页眉、页脚和页码来为整个文档添加页眉、页脚和页码。



## 示例


```JavaScript
/*本示例将页码添加至活动文档所有节中全部页的页眉中，并显示页眉是否链接至前一节中相应的页眉。*/
function test() {
    let headerFooter = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary)
    headerFooter.PageNumbers.Add()
    alert(headerFooter.LinkToPrevious)
}
```
 **LinkToPrevious** 属性可以分别应用于每个页眉或页脚。例如，可将偶数页的页眉的 **LinkToPrevious** 属性设置为 **True** ，而将偶数页的页脚设置为 **False** 。



```JavaScript
/*本示例的第一部分创建一个有两节的新文档，第二部分为新文档的第一和第二节的偶数页和奇数页创建不同的页眉。*/
function test() {
    Application.Documents.Add()
    for (let j = 1; j <= 4; j++) {
        Selection.TypeParagraph()
        Selection.InsertBreak()
        Selection.TypeParagraph()
    }
    ActiveDocument.Paragraphs.Item(5).Range.InsertBreak(wdSectionBreakNextPage)
    ActiveDocument.PageSetup.OddAndEvenPagesHeaderFooter = true
    let headerFooter1 = ActiveDocument.Sections.Item(2).Headers.Item(wdHeaderFooterPrimary)
    headerFooter1.LinkToPrevious = false
    headerFooter1.Range.InsertBefore("Section 2 Odd Header")
    let headerFooter2 = ActiveDocument.Sections.Item(2).Headers.Item(wdHeaderFooterEvenPages)
    headerFooter2.LinkToPrevious = false
    headerFooter2.Range.InsertBefore("Section 2 Even Header")
    let section = ActiveDocument.Sections.Item(1)
    section.Headers.Item(wdHeaderFooterPrimary).Range.InsertBefore("Section 1 Odd Header")
    section.Headers.Item(wdHeaderFooterEvenPages).Range.InsertBefore("Section 1 Even Header")
}
```
