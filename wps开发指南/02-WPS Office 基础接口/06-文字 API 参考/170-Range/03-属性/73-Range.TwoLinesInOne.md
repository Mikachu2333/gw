# Range.TwoLinesInOne

返回或设置 WPS 是否将两行文本合并为一行，并指定括住文本的字符（如果有）。 **WdTwoLinesInOneType** 类型，可读写。



## 语法

express.**TwoLinesInOne**

express   一个代表 **Range** 对象的变量。

## 类型

WdTwoLinesInOneType

## 说明


将 **TwoLinesInOne** 属性设为 **wdTwoLinesInOneNoBrackets** 可将两行文本合并为一行，且不将文本括在任何字符中。将 **TwoLinesInOne** 属性设为 **wdTwoLinesInOneNone** 可将合并为一行的文本还原为两行。



## 示例


```JavaScript
/*本示例设置当前选定内容的格式，使两行文本合并为一行，并将其括在括号中。*/
function test() {
    Selection.Range.TwoLinesInOne = wdTwoLinesInOneParentheses
}
```


```JavaScript
/*本示例将活动文档的主文档文章中合并为一行的文本还原为两行。*/
function test() {
    ActiveDocument.Content.TwoLinesInOne = wdTwoLinesInOneNone
}
```
