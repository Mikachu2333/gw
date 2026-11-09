# Footnotes.SwapWithEndnotes

将文档中的所有脚注转换为尾注，反之亦然。要将一系列脚注转换为尾注，请使用 **Convert** 方法。



## 语法

express.**SwapWithEndnotes()**

express   一个代表 **Footnotes** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档中的脚注转换为尾注，将尾注转换为脚注。*/
function test() {
    ActiveDocument.Footnotes.SwapWithEndnotes()
}
```


```JavaScript
/*本示例将第一个文档中的脚注转换为尾注，将尾注转换为脚注，然后将所有脚注转换为尾注。*/
function test() {
    Documents.Item(1).Footnotes.SwapWithEndnotes()
    Documents.Item(1).Footnotes.Convert()
}
```
