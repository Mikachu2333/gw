# Paragraph.TextboxTightWrap

返回或设置一个 **WdTextboxTightWrap** 常量，该常量代表文本环绕形状或文本框的紧密程度。可读写。



## 语法

express.**TextboxTightWrap**

express   一个代表 **Paragraph** 对象的变量。

## 类型

WdTextboxTightWrap

## 示例


```JavaScript
/*本示例显示第一个文档中第一个段落的 TextboxTightWrap 属性是否为 wdTightNone。*/
function test() {
    alert(Documents.Item(1).Paragraphs.Item(1).TextboxTightWrap == wdTightNone)
}
```


```JavaScript
/*本示例设置活动文档第二段的 TextboxTightWrap 属性为 wdTightAll。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).TextboxTightWrap = wdTightAll
}
```
