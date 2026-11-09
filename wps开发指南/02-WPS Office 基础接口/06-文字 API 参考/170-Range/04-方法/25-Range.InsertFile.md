# Range.InsertFile

插入指定文件的全部或一部分。



## 语法

express.**InsertFile(FileName, Range, ConfirmConversions, Link, Attachment)**

express   一个代表 **Range** 对象的变量。

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
/*本示例使用 INCLUDETEXT 域在活动文档末尾插入“TEST.DOCX”文件。*/
function test() {
    let range = ActiveDocument.Range()
    range.Collapse(wdCollapseEnd)
    range.InsertFile("D:\\示例\\TEST.DOCX", null, null, true)
}
```


```JavaScript
/*本示例在光标处插入文档“example.docx”的书签“example_1”。*/
function test() {
    Selection.Range.InsertFile("D:\\示例\\example.docx", "example_1", true, false, false)
}
```
