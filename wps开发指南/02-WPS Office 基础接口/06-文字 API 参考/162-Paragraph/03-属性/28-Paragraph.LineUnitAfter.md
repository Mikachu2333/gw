# Paragraph.LineUnitAfter

返回或设置指定段落的段后间距（以网格线为单位）。可读写 **Single** 类型。



## 语法

express.**LineUnitAfter**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中第一段的段后间距设置为 1 个网格线。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).LineUnitAfter = 1
}
```


```JavaScript
/*本示例显示第一个文档的第二个段落的段后间距（以网格线为单位）。*/
function test() {
    alert(Documents.Item(1).Paragraphs.Item(2).LineUnitAfter)
}
```
