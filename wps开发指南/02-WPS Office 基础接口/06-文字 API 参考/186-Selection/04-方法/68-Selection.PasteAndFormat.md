# Selection.PasteAndFormat

粘贴选定的表格单元格，并为其设置指定的格式。



## 语法

express.**PasteAndFormat(Type)**

express   一个代表 **Selection** 对象的变量。

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
    Selection.PasteAndFormat(wdChartPicture)
}
```


```JavaScript
/*本示例将活动文档中第一个表格粘贴为无格式的纯文本文字。*/
function test() {
    ActiveDocument.Tables.Item(1).Range.Copy()
    Selection.PasteAndFormat(wdFormatPlainText)
}
```
