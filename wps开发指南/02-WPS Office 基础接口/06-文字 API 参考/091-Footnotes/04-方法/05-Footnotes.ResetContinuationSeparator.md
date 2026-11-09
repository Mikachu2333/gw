# Footnotes.ResetContinuationSeparator

将脚注或尾注延续分隔符重新设置为默认分隔符。



## 语法

express.**ResetContinuationSeparator()**

express   一个代表 **Footnotes** 对象的变量。

## 返回值

void

## 说明


默认分隔符是一条长横线，该横线分隔文档文字与上接前一页的注释。



## 示例


```JavaScript
/*本示例将活动文档上脚注延续分隔符重新设置为默认分隔线。*/
function test() {
    ActiveDocument.Footnotes.ResetContinuationSeparator()
}
```


```JavaScript
/*本示例将所选内容的脚注延续分隔符重新设置为默认分隔线，并通知用户。*/
function test() {
    Selection.Footnotes.ResetContinuationSeparator()
    alert("已将脚注延续分隔符重新设置为默认分隔符。")
}
```
