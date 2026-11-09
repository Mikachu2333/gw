# Row.ConvertToText

将表格转换为文本并返回一个 **Range** 对象，该对象代表带分隔符的文本。



## 语法

express.**ConvertToText(Separator, NestedTables)**

express   一个代表 **Row** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Separator | 可选 | any | 用以分隔被转换列的字符（被转换行由段落标记分隔）。可以是下列任何 **WdTableFieldSeparator** 常量： **wdSeparateByCommas** 、 **wdSeparateByDefaultListSeparator** 、 **wdSeparateByParagraphs** 或 **wdSeparateByTabs** （默认值）。 |
| NestedTables | 可选 | any | 如果要将嵌套的表格转换为文本，则为 **True** 。如果 Separator 不是 **wdSeparateByParagraphs** ，则将忽略此参数。默认值为 **True** 。 |

## 返回值

Range

## 示例


```JavaScript
/*本示例将所选表格的第二行转换为文本，并以逗号分隔。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Rows.Item(2).ConvertToText(wdSeparateByCommas)
    }
}
```


```JavaScript
/*本示例将活动文档的第一个表格的第一行转换为文本，不转换嵌套表格，并以段落标记分割*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Item(1).ConvertToText(wdSeparateByParagraphs, false)
}
```
