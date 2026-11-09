# PageSetup.OddAndEvenPagesHeaderFooter

如果指定的 **PageSetup** 对象的奇数页和偶数页具有不同的页眉和页脚，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**OddAndEvenPagesHeaderFooter**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **OddAndEvenPagesHeaderFooter** 属性值可以为 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例为 Document1.docx 的奇偶页创建不同的页眉和页脚。*/
function test() {
    let document = Documents.Item("Document1.docx")
    document.PageSetup.OddAndEvenPagesHeaderFooter = msoTrue
    let headerFooter1 = document.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary)
    headerFooter1.Range.InsertAfter("Odd Header")
    let headerFooter2 = document.Sections.Item(1).Headers.Item(wdHeaderFooterEvenPages)
    headerFooter2.Range.InsertAfter("Even Header")
}
```


```JavaScript
/*本示例显示活动文档的奇偶页是否有不同的页眉和页脚。*/
function test() {
    switch (ActiveDocument.PageSetup.OddAndEvenPagesHeaderFooter){
        case msoTrue:
            alert("奇偶页的页眉和页脚不同")
            break
        case msoFalse:
            alert("奇偶页的页眉和页脚相同")
            break
    }
}
```
