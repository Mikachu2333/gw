# Paragraphs.Last

返回一个 **Paragraph** 对象，该对象代表段落集合中的最后一个项目。



## 语法

express.**Last**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

Paragraph

## 示例


```JavaScript
/*本示例将活动文档中的最后一个段落设置为右对齐。*/
function test() {
    ActiveDocument.Paragraphs.Last.Alignment = wdAlignParagraphRight
}
```


```JavaScript
/*本示例显示活动文档中的最后一个段落的段前间距。*/
function test() {
    alert(ActiveDocument.Paragraphs.Last.SpaceBefore)
}
```
