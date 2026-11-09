# Document.Compare

显示修订标记，以表明指定的文档与另一个文档的区别。



## 语法

express.**Compare(Name, AuthorName, CompareTarget, DetectFormatChanges, IgnoreAllComparisonWarnings, AddToRecentFiles, RemovePersonalInformation, RemoveDateAndTime)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 与指定文档作比较的文档的名称。 |
| AuthorName | 可选 | any | 与比较生成的区别相关联的审阅者姓名。如果没有指定，则默认值为修订的文档的作者姓名或字符串“Comparison”（如果没有提供作者信息）。 |
| CompareTarget | 可选 | any | 用于比较的目标文档。可以是任意 **WdCompareTarget** 常量。 |
| DetectFormatChanges | 可选 | any | 如果该属性值为 **True** （默认值），则比较结果包括格式变化检测。 |
| IgnoreAllComparisonWarnings | 可选 | any | 如果该属性值为 **True** ，则比较文档，而不通知用户问题。默认值为 **False** 。 |
| AddToRecentFiles | 可选 | any | 如果该属性值为 **True** ，则将文档添加到“文件”菜单上最近使用的文件列表中。 |
| RemovePersonalInformation | 可选 | any | 如果该属性值为 **True** ，则从返回的 **Document** 对象的备注、修订和属性对话框中删除所有用户信息。默认值为 **False** 。 |
| RemoveDateAndTime | 可选 | any | 如果该属性值为 **True** ，则从返回的 **Document** 对象的跟踪更改中删除日期和时间戳记。默认值为 **False** 。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档与位于“Draft”文件夹中名为“FirstRev.doc”的文档进行比较，并将比较结果区别置于一个新文档中。*/
function test() {
    ActiveDocument.Compare("C:\\Draft\\FirstRev.doc", null, wdCompareTargetNew)
}
```


```JavaScript
/*本示例将第一个文档与位于“示例”文件夹中名为“example.docx”的文档进行比较，并将比较结果区别置于当前文档中。*/
function test() {
    Documents.Item(1).Compare("D:\\示例\\example.docx", null, wdCompareTargetCurrent, true, true, false, true, true)
}
```
