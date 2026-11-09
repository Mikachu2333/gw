# ParagraphFormat.Alignment

返回或设置一个 **WdParagraphAlignment** 常量，该常量代表指定段落的对齐方式，可读写。



## 语法

express.**Alignment**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

WdParagraphAlignment

## 说明


由于您选择或安装的语言支持不同（例如美国英语），上述部分常量可能无法使用。



## 示例


```JavaScript
/*本示例设置活动文档所有段落为居中对齐。*/
function test() {
    ActiveDocument.Paragraphs.Format.Alignment = wdAlignParagraphCenter
}
```


```JavaScript
/*本示例显示所选段落对齐方式是否为左对齐。*/
function test() {
    alert(Selection.ParagraphFormat.Alignment == wdAlignParagraphLeft)
}
```
