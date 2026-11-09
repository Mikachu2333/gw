# Range.ExportFragment

将指定区域导出到文档中，以便用作文档片段。



## 语法

express.**ExportFragment(FileName, Format)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 指定用于保存文档片段的文件的路径和文件名。 |
| Format | 必选 | WdSaveFormat | 指定文档片段文件的文件格式。可以 WPS 所支持的任意格式保存文档片段。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将第一个文档的主文档文章导出为 RTF 文件。*/
function test() {
    Documents.Item(1).Content.ExportFragment("D:\\示例\\example1.RTF", wdFormatRTF)
}
```


```JavaScript
/*本示例将所选内容导出为文本文件。*/
function test() {
    Selection.Range.ExportFragment("D:\\示例\\example2.txt", wdFormatEncodedText)
}
```
