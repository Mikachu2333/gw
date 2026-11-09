# Paragraph.NoLineNumber

如果取消指定段落的行号，则该属性值为 **True** 。可读写 **Long** 类型。



## 语法

express.**NoLineNumber**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是 **True** 、 **False** 或 **wdUndefined** 。使用 **PageSetup** 对象的 **LineNumbering** 属性可设置行号。



## 示例


```JavaScript
/*本示例为活动文档设置行号。起始编号设置为 1，并且在文档中的所有节都连续编号。然后取消第二段的行号。*/
function test() {
    let lineNumbering = ActiveDocument.PageSetup.LineNumbering
    lineNumbering.Active = true
    lineNumbering.StartingNumber = 1
    lineNumbering.CountBy = 1
    lineNumbering.RestartMode = wdRestartContinuous
    ActiveDocument.Paragraphs.Item(2).NoLineNumber = true
}
```


```JavaScript
/*本示例为第一个文档设置行号，然后取消第一个文档中最后一段的行号。*/
function test() {
    let lineNumbering = Documents.Item(1).PageSetup.LineNumbering
    lineNumbering.Active = true
    lineNumbering.StartingNumber = 1
    lineNumbering.CountBy = 3
    lineNumbering.DistanceFromText = 36
    let paragraphCount = Documents.Item(1).Paragraphs.Count
    Documents.Item(1).Paragraphs.Item(paragraphCount).NoLineNumber = true
}
```
