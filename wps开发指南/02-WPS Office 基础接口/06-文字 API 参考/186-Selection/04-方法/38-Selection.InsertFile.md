# Selection.InsertFile

插入指定文件的全部或一部分。



## 语法

express.**InsertFile(FileName, Range, ConfirmConversions, Link, Attachment)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 要插入的文件的路径及文件名。如果没有指定路径，则 WPS 假定文件位于当前文件夹中。 |
| Range | 可选 | any | 如果指定的文件是 WPS 文档，则此参数代表书签。如果该文件为其他类型（例如，ET 工作表），则此参数代表命名区域或单元格区域（例如，R1C1:R3C4）。 |
| ConfirmConversions | 可选 | any | 如果该参数值为 **True** ，则在插入非 WPS 文档格式的文件时， WPS 将提示您确认转换。 |
| Link | 可选 | any | 如果该参数值为 **True** ，则使用 INCLUDETEXT 域插入该文件。 |
| Attachment | 可选 | any | 如果该参数值为 **True** ，则将该文件以附件形式插入电子邮件中。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在插入点插入 test.docx 文件（使用 INCLUDETEXT 域）。*/
function test() {
    Selection.Collapse(wdCollapseEnd)
    Selection.InsertFile("D:\\示例\\test.docx", null, null, true)
}
```


```JavaScript
/*本示例先新建一个文档，然后将两个文本文件的内容插入新建文档中。*/
function test() {
    Documents.Add()
    let arr = ["D:\\示例\\test1.txt", "D:\\示例\\test2.txt"]
    for (let i = 0; i < arr.length; i++) {
        Selection.InsertFile(arr[i], null, false)
        Selection.InsertParagraphAfter()
        Selection.InsertBreak(wdSectionBreakNextPage)
        Selection.Collapse(wdCollapseEnd)
    }
}
```
