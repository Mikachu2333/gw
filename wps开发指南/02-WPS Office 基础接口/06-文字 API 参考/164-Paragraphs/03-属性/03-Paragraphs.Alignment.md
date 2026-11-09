# Paragraphs.Alignment

返回或设置一个 **WdParagraphAlignment** 常量，该常量代表指定段落的对齐方式，可读写。



## 语法

express.**Alignment**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

WdParagraphAlignment

## 说明


对于所选择或安装的不同语言支持（例如美国英语），某些 **WdParagraphAlignment** 常量可能不可用。



## 示例


```JavaScript
/*本示例设置活动文档所有段落为居中对齐。*/
function test() {
    ActiveDocument.Paragraphs.Alignment = wdAlignParagraphCenter
}
```


```JavaScript
/*本示例显示所选段落对齐方式是否为左对齐。*/
function test() {
    alert(Selection.Paragraphs.Alignment == wdAlignParagraphLeft)
}
```
