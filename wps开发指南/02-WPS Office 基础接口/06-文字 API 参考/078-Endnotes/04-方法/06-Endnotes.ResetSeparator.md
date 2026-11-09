# Endnotes.ResetSeparator

将尾注分隔符重新设置为默认分隔符。



## 语法

express.**ResetSeparator()**

express   一个代表 **Endnotes** 对象的变量。

## 返回值

void

## 说明


默认分隔符为一条短横线，该横线分隔文档文字和注释。



## 示例


```JavaScript
/*本示例重新设置所选内容中的尾注分隔符。*/
function test() {
    Application.Selection.Endnotes.ResetSeparator()
}
```


```JavaScript
/*本示例重新设置活动文档的第一节中的尾注分隔符。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    range.Endnotes.ResetSeparator()
    alert("已将尾注分隔符重新设置为默认分隔符")
}
```
