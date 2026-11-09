# Endnotes.ResetContinuationSeparator

将尾注延续分隔符重新设置为默认分隔符。



## 语法

express.**ResetContinuationSeparator()**

express   一个代表 **Endnotes** 对象的变量。

## 返回值

void

## 说明


默认分隔符是一条长横线，该横线分隔文档文字与上接前一页的注释。



## 示例


```JavaScript
/*本示例重新设置每个打开的文档中第一节的尾注延续分隔符。*/
function test() {
    for (let i = 1; i <= Application.Documents.Count; i++) {
        Application.Documents.Item(i).Sections.Item(1).Range.Endnotes.ResetContinuationSeparator()
    }
}
```


```JavaScript
/*本示例重新设置活动文档的尾注延续分隔符，并通知用户。*/
function test() {
    ActiveDocument.Endnotes.ResetContinuationSeparator()
    alert("已将尾注延续分隔符重新设置为默认分隔符")
}
```
