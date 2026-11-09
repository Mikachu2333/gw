# Paragraph.Alignment

返回或设置一个 **WdParagraphAlignment** 常量，该常量代表指定段落的对齐方式，可读写。



## 语法

express.**Alignment**

express   一个代表 **Paragraph** 对象的变量。

## 类型

WdParagraphAlignment

## 说明


对于所选择或安装的不同语言支持（例如美国英语），有些 **WdParagraphAlignment** 常量可能不可用。



## 示例


```JavaScript
/*本示例将活动文档中的首段设置为右对齐。*/
function test() {
    Application.ActiveDocument.Paragraphs.Item(1).Alignment = wdAlignParagraphRight
}
```


```JavaScript
/*本示例显示第一个文档的第二段是否为居中对齐。*/
function test() {
    alert(Documents.Item(1).Paragraphs.Item(2).Alignment == wdAlignParagraphCenter)
}
```
