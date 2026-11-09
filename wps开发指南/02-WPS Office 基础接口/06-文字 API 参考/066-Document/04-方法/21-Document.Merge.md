# Document.Merge

将文档中用修订标记标识的修改合并到另一篇文档。



## 语法

express.**Merge(FileName, MergeTarget, DetectFormatChanges, UseFormattingFrom, AddToRecentFiles)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 要合并的文档的路径和文件名。 |
| MergeTarget | 可选 | any | 指定放置最终合并的内容的位置。 |
| DetectFormatChanges | 可选 | any | 指定是否标记格式差别。 |
| UseFormattingFrom | 可选 | any | 指定将哪篇文档用于设置合并文档的格式。 |
| AddToRecentFiles | 可选 | any | 指定是否将 FileName 参数中的文档添加到最近的文件列表中。 |

## 返回值

void

## 示例


```JavaScript
/*此示例将“example1.docx”中的更改合并到“example2.docx”（活动文档）中。*/
function test() {
    if (ActiveDocument.Name.indexOf("example2.docx") !== -1) {
        ActiveDocument.Merge("D:\\示例\\example1.docx")
    }
}
```


```JavaScript
/*此示例将“example2.docx”中的更改合并到第一个文档中。*/
function test() {
    Documents.Item(1).Merge("D:\\示例\\example2.docx", wdMergeTargetCurrent, true, wdFormattingFromCurrent, true)
}
```
