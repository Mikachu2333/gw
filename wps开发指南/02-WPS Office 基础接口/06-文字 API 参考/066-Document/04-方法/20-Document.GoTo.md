# Document.GoTo

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定项（如页、书签或域）的起始位置。



## 语法

express.**GoTo(What, Which, Count, Name)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| What | 可选 | any | 指定区域或选定内容要移动到的项的类别。可以是 **[WdGoToItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdGoToItem)** 常量之一。 |
| Which | 可选 | any | 指定区域或选定内容要移动到的项。可以是 **[WdGoToDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdGoToDirection)** 常量之一。 |
| Count | 可选 | any | 文档中的项数。默认值为 1。只有正值是有效的。若要指定一个在该区域或选定内容之前的项，可将 Which 参数指定为 **wdGoToPrevious** ，并指定一个 Count 值。 |
| Name | 可选 | any | 如果 What 参数是 **wdGoToBookmark** 、 **wdGoToComment** 、 **wdGoToField** 或 **wdGoToObject** ，则此参数指定一个名称。若要指定一个在该区域或选定内容之前的项，可将 Which 参数指定为 **wdGoToPrevious** ，并指定一个 Count 参数值。 |

## 返回值

Range

## 说明


将 **GoTo** 方法与 **wdGoToGrammaticalError** 、 **wdGoToProofreadingError** 或 **wdGoToSpellingError** 常量一起使用时，返回的 **Range** 对象中包括所有含语法或拼写错误的文本。



## 示例


```JavaScript
/*此示例将 range 设置为等于活动文档中的第一个脚注引用标记。*/
function test() {
    if (ActiveDocument.Footnotes.Count >= 1) {
        let range = ActiveDocument.GoTo(wdGoToFootnote, wdGoToFirst)
        range.Expand(wdCharacter)
    }
}
```


```JavaScript
/*本示例将光标切换到名为“example”的作者的第一个批注的开始位置。*/
function test() {
    ActiveDocument.GoTo(wdGoToComment, wdGoToFirst, 1, "example").Select()
}
```
