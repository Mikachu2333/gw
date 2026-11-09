# Footnotes.ResetSeparator

将脚注分隔符重新设置为默认分隔符。



## 语法

express.**ResetSeparator()**

express   一个代表 **Footnotes** 对象的变量。

## 返回值

void

## 说明


默认分隔符为一条短横线，该横线分隔文档文字和注释。



## 示例


```JavaScript
/*本示例将活动文档的脚注分隔符重新设置为默认分隔线。*/
function test() {
    ActiveDocument.Footnotes.ResetSeparator()
}
```


```JavaScript
/*本示例将所选内容的脚注分隔符重新设置为默认分隔符，并通知用户。*/
function test() {
    Selection.Footnotes.ResetSeparator()
    alert("已将脚注分隔符重新设置为默认分隔符。")
}
```
