# Range.GoToNext

返回一个 **Range** 对象，该对象代表下一项目的起始位置或者由 _What_ 参数指定的位置。



## 语法

express.**GoToNext(What)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| What | 必选 | WdGoToItem | 指定的区域将被移动到的项。 |

## 返回值

Range

## 说明


如果将本方法用于 **wdGoToGrammaticalError** 、 **wdGoToProofreadingError** 或 **wdGoToSpellingError** 常量，则返回的 **Range** 对象包含所有有语法或拼写错误的文本。



## 示例


```JavaScript
/*本示例将插入点移动到所选内容的页面的起始位置。*/
function test() {
    Selection.Range.GoToNext(wdGoToPage).Select()
}
```


```JavaScript
/*本示例在活动文档的主文档文章的表格的起始位置插入文本。*/
function test() {
    let range = ActiveDocument.Content.GoToNext(wdGoToTable)
    range.Text = "example"
}
```
