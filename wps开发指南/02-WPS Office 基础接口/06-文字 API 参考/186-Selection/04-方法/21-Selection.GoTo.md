# Selection.GoTo

将插入点移至紧靠指定项之前的字符位置，并返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象（除 **wdGoToGrammaticalError** 、 **wdGoToProofreadingError** 或 **wdGoToSpellingError** 常量之外）。



## 语法

express.**GoTo(What, Which, Count, Name)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| What | 可选 | any | 范围或所选内容移动到的项目的种类。可以是 **[WdGoToItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdGoToItem)** 常量之一。 |
| Which | 可选 | any | 范围或所选内容要移动到的项目。可以是 **[WdGoToDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdGoToDirection)** 常量之一。 |
| Count | 可选 | any | 文档中的项数。默认值为 1。只有正值有效。要指定范围或所选内容之前的一个项目，可使用 **wdGoToPrevious** 作为 **Which** 参数，并指定一个 **Count** 值。 |
| Name | 可选 | any | 如果 What 参数为 **wdGoToBookmark** 、 **wdGoToComment** 、 **wdGoToField** 或 **wdGoToObject** ，则此参数指定一个名称。 |

## 返回值

当前选中的 Range。

## 说明


将 **GoTo** 方法与 **wdGoToGrammaticalError** 、 **wdGoToProofreadingError** 或 **wdGoToSpellingError** 常量一起使用时，返回的 [ **Range** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj) 对象中包括所有含语法或拼写错误的文本。



## 示例


```JavaScript
/*下列示例功能等效，都将所选内容移至文档中的第一个标题。*/
function test() {
    Selection.GoTo(wdGoToHeading, wdGoToFirst)
    Selection.GoTo(wdGoToHeading, wdGoToAbsolute, 1)
}
```


```JavaScript
/*本示例将所选内容移至文档中的第四行。*/
function test() {
    Selection.GoTo(wdGoToLine, wdGoToAbsolute, 4)
}
```


```JavaScript
/*本示例将所选内容向上移动两行。*/
function test() {
    Selection.GoTo(wdGoToLine, wdGoToPrevious, 2)
}
```


```JavaScript
/*本示例将所选内容移至下一个 DATE 域。*/
function test() {
    Selection.GoTo(wdGoToField, null, null, "Date")
}
```


```JavaScript
/*本示例将选定范围移到下一个表格中的第一个单元格。*/
function test() {
    Selection.GoTo(wdGoToTable, wdGoToNext)
}
```


```JavaScript
/*本示例将插入点移至活动文档中第五个尾注引用标记的前面。*/
function test() {
    if (ActiveDocument.Endnotes.Count >= 5) {
        Selection.GoTo(wdGoToEndnote, wdGoToAbsolute, 5)
    }
}
```


```JavaScript
/*本示例将所选内容向下移动四行。*/
function test() {
    Selection.GoTo(wdGoToLine, wdGoToRelative, 4)
}
```


```JavaScript
/*本示例将选定范围移回两个页面。*/
function test() {
    Selection.GoTo(wdGoToPage, wdGoToPrevious, 2)
}
```
