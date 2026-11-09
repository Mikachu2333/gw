# Endnotes.ResetContinuationNotice

将尾注延续标记重新设置为默认标记。



## 语法

express.**ResetContinuationNotice()**

express   一个代表 **Endnotes** 对象的变量。

## 返回值

void

## 说明


默认标记为空（无文本）。



## 示例


```JavaScript
/*本示例重新设置活动文档的尾注延续标记。*/
function test() {
    ActiveDocument.Endnotes.ResetContinuationNotice()
}
```


```JavaScript
/*本示例重新设置活动文档的第一节中的尾注延续标记，并通知用户。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    range.Endnotes.ResetContinuationNotice()
    alert("已将尾注延续标记重新设置为默认标记")
}
```
