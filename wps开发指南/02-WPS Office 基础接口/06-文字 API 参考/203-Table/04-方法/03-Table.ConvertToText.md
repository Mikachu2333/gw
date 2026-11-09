# Table.ConvertToText

将表格转换为文本并返回一个 **Range** 对象，该对象代表带分隔符的文本。



## 语法

express.**ConvertToText(Separator, NestedTables)**

express   一个代表 **Table** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Separator | 可选 | any | 用以分隔被转换列的分隔符（被转换行由段落标记分隔）。可以是 **WdTableFieldSeparator** 常量之一。 |
| NestedTables | 可选 | any | 如果要将嵌套的表格转换为文本，则为 **True** 。如果 **Separator** 不是 **wdSeparateByParagraphs** ，则将忽略此参数。默认值为 True。 |

## 返回值

Range

## 说明


将 **ConvertToText** 方法应用于一个 **Table** 对象时，该对象将被删除。如果要保留对已转换的表格内容的引用，就必须为 **ConvertToText** 方法返回的 **Range** 对象赋予新的对象变量。



## 示例


```JavaScript
/*本示例将活动文档第一个表格转换为文本，并将其格式设为项目符号列表。*/
function test() {
    let table = ActiveDocument.Tables.Item(1)
    let range = table.ConvertToText(wdSeparateByParagraphs)
    range.ListFormat.ApplyListTemplate(ListGalleries.Item(wdBulletGallery).ListTemplates.Item(1))
}
```


```JavaScript
/*本示例创建一张表格，然后将其转换为文本，以制表符作为分隔字符。*/
function test() {
    let newDocument = Application.Documents.Add()
    let newTable = newDocument.Tables.Add(Selection.Range, 3, 3)
    for (let i = 1; i <= newTable.Range.Cells.Count; i++) {
        newTable.Range.Cells.Item(i).Range.InsertAfter("Cell" + i)
    }
    MsgBox("Click OK to convert table to text.")
    let range = newTable.ConvertToText(wdSeparateByTabs)
}
```


```JavaScript
/*本示例将包含选定内容的表格转换为文本，各列之间用逗号分隔。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Tables.Item(1).ConvertToText(wdSeparateByCommas)
    } else {
        MsgBox("The insertion point is not in a table.")
    }
}
```
