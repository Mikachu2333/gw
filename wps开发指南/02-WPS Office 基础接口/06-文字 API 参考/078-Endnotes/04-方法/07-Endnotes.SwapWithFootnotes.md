# Endnotes.SwapWithFootnotes

将一篇文档中的所有尾注转换成脚注或将脚注转换为尾注。



## 语法

express.**SwapWithFootnotes()**

express   一个代表 **Endnotes** 对象的变量。

## 返回值

void

## 说明


要将某一区域的尾注转换为脚注，请使用 **Convert** 方法。



## 示例


```JavaScript
/*本示例将活动文档中的尾注转换为脚注，并将脚注转换为尾注。*/
function test() {
    ActiveDocument.Endnotes.SwapWithFootnotes()
}
```


```JavaScript
/*本示例将活动文档的第一节中的尾注转换为脚注，并将脚注转换为尾注。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    range.Endnotes.SwapWithFootnotes()
}
```
