# Paragraph.BaseLineAlignment

返回或设置一个 **WdBaselineAlignment** 常量，该常量代表行中字体的垂直位置，可读写。



## 语法

express.**BaseLineAlignment**

express   一个代表 **Paragraph** 对象的变量。

## 类型

WdBaselineAlignment

## 示例


```JavaScript
/*本示例设置活动文档中第一个段落的文本对齐方式为基线对齐。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).BaseLineAlignment = wdBaselineAlignBaseline
}
```


```JavaScript
/*本示例显示第一个文档的第二个段落的文本对齐方式是否为顶端对齐。*/
function test() {
    alert(Documents.Item(1).Paragraphs.Item(2).BaseLineAlignment == wdBaselineAlignTop)
}
```
