# Paragraph.OpenOrCloseUp

切换段前间距。



## 语法

express.**OpenOrCloseUp()**

express   一个代表 **Paragraph** 对象的变量。

## 返回值

void

## 说明


如果指定段落的段前间距等于 0（零），则此方法将其设置为 12 磅；如果指定段落的段前间距大于 0（零），则此方法将其设置为 0（零）。



## 示例


```JavaScript
/*本示例切换活动文档中第一段的格式，或增加 12 磅的段前间距，或不设置段前间距。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).OpenOrCloseUp()
}
```


```JavaScript
/*本示例切换第一个文档的第二段的段前间距，将其设置为 0 磅。*/
function test() {
    Documents.Item(1).Paragraphs.Item(2).OpenOrCloseUp()
}
```
