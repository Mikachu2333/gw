# Range.GoTo

返回一个 **Range** 对象，该对象代表指定项（如页、书签或域）的起始位置。



## 语法

express.**GoTo(What, Which, Count, Name)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| What | 可选 | any | 范围要移动到的项的类别。可以是 **[WdGoToItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdGoToItem)** 常量之一。 |
| Which | 可选 | any | 范围要移动到的项。可以是 **[WdGoToDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdGoToDirection)** 常量之一。 |
| Count | 可选 | any | 文档中的项数。默认值为 1。只有正值有效。若要指定一个位于该范围之前的项，可将 **wdGoToPrevious** 用作 Which 参数，并指定一个 Count 值。 |
| Name | 可选 | any | 如果 What 参数为 **wdGoToBookmark** 、 **wdGoToComment** 、 **wdGoToField** 或 **wdGoToObject** ，则此参数指定一个名称。只有正值有效。若要指定一个位于该范围之前的项，可将 **wdGoToPrevious** 用作 Which 参数，并指定一个 Count 值。 |

## 返回值

Range

## 示例


```JavaScript
/*本示例将范围向下移动两行。*/
function test() {
    ActiveDocument.Range().GoTo(wdGoToLine, wdGoToNext, 2)
}
```


```JavaScript
/*本示例将范围移至下一个 DATE 域。*/
function test() {
    ActiveDocument.Range().GoTo(wdGoToField, null, null, "Date")
}
```


```JavaScript
/*本示例将范围移至文档中的第四行。*/
function test() {
    ActiveDocument.Range().GoTo(wdGoToLine, wdGoToAbsolute, 4)
}
```


```JavaScript
/*本示例的功能等效，都将范围移至文档中的第一个标题处。*/
function test() {
    ActiveDocument.Range().GoTo(wdGoToHeading, wdGoToFirst)
    ActiveDocument.Range().GoTo(wdGoToHeading, wdGoToAbsolute, 1)
}
```
将 **GoTo** 方法与 **wdGoToGrammaticalError** 、 **wdGoToProofreadingError** 或 **wdGoToSpellingError** 常量一起使用时，返回的 **Range** 对象中包括所有含语法或拼写错误的文本。



```JavaScript
/*本示例将插入点移至活动文档中第五个尾注引用标记的前面。*/
function test() {
    if (ActiveDocument.Endnotes.Count >= 5) {
        ActiveDocument.Range().GoTo(wdGoToEndnote, wdGoToAbsolute, 5)
    }
}
```


```JavaScript
/*本示例将 range 设置为等于活动文档中第一个脚注引用标记。*/
function test() {
    if (ActiveDocument.Footnotes.Count >= 1) {
        let range = ActiveDocument.Range().GoTo(wdGoToFootnote, wdGoToFirst)
        range.Expand(wdCharacter)
    }
}
```
