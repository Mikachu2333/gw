# Paragraph.OpenUp

为指定段落设置 12 磅的段前间距。



## 语法

express.**OpenUp()**

express   一个代表 **Paragraph** 对象的变量。

## 返回值

void

## 说明


您还可以使用 **SpaceBefore** 属性设置段落间距。



## 示例


```JavaScript
/*本示例为活动文档的第一段设置 12 磅的段前间距。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).OpenUp()
}
```


```JavaScript
/*本示例为所选内容的第二段设置 12 磅的段前间距。*/
function test() {
    Selection.Paragraphs.Item(2).OpenUp()
}
```
