# Footnotes.ResetContinuationNotice

将脚注或尾注延续标记重新设置为默认标记。



## 语法

express.**ResetContinuationNotice()**

express   一个代表 **Footnotes** 对象的变量。

## 返回值

void

## 说明


默认标记为空（无文本）。



## 示例


```JavaScript
/*本示例在第一个文档中重新设置脚注延续标记并将脚注引用标记的起始编号设置为 2。*/
function test() {
    let footnotes = Documents.Item(1).Sections.Item(1).Range.Footnotes
    footnotes.ResetContinuationNotice()
    footnotes.NumberingRule = wdRestartContinuous
    footnotes.StartingNumber = 2
}
```


```JavaScript
/*本示例将所选内容中脚注延续标记重新设置为默认标记。*/
function test() {
    Selection.Footnotes.ResetContinuationNotice()
}
```
