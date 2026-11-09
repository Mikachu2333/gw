# Selection.GoToNext

返回一个 **Range** 对象，该对象引用下一项目或者由 *What* 参数确定的位置的起始位置。如果将该方法应用于 **Selection** 对象，则该方法将选定内容移动到指定的项目处（但 **wdGoToGrammaticalError** 、 **wdGoToProofreadingError** 和 **wdGoToSpellingError** 常量除外）。



## 语法

express.**GoToNext(What)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| What | 必选 | WdGoToItem | 指定的区域或选定内容将被移动到的项。 |

## 返回值

Range

## 说明


当您使用此方法与 **wdGoToGrammaticalError** 、 ***wdGoToProofreadingError** * 或 **wdGoToSpellingError** 常量时，则返回 **Range** 对象包括任何语法错误的文本或拼写错误的文本。



## 示例


```JavaScript
/*本示例将光标移动到所选内容的页面的起始位置。*/
function test() {
    Selection.GoToNext(wdGoToPage)
}
```


```JavaScript
/*本示例使光标移动到所选内容的标题的起始位置，并在插入点插入文本。*/
function test() {
    let range = Selection.GoToNext(wdGoToHeading)
    range.Text = "range"
}
```
