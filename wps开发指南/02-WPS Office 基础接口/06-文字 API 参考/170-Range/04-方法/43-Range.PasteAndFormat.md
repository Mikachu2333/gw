# Range.PasteAndFormat

粘贴选定的表格单元格，并为其设置指定的格式。



## 语法

express.**PasteAndFormat(Type)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | WdRecoveryType | 粘贴所选的表格单元格时使用的格式类型。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将所选 ET 图表粘贴为图片。该示例假定“剪贴板”包含 ET 图表。*/
function test() {
    Selection.Range.PasteAndFormat(wdChartPicture)
}
```


```JavaScript
/*本示例替换活动文档的第一个段落的文本，设置加粗格式并复制到剪贴板，然后以无格式的纯文本文字粘贴到新建段落中。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.Text = "example\n"
    range.Bold = msoTrue
    range.Copy()
    ActiveDocument.Paragraphs.Add().Range.PasteAndFormat(wdFormatPlainText)
}
```
