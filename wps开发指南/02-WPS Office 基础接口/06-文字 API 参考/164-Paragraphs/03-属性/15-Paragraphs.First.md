# Paragraphs.First

返回一个 **Paragraph** 对象，该对象代表在 **Paragraphs** 集合中的第一个项目。



## 语法

express.**First**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

Paragraph

## 示例


```JavaScript
/*本示例设置活动文档第一段的对齐方式为右对齐。*/
function test() {
    ActiveDocument.Paragraphs.First.Alignment = wdAlignParagraphRight
}
```


```JavaScript
/*本示例删除所选内容第一个段落手动设定的段落格式。*/
function test() {
    Selection.Paragraphs.First.Reset()
}
```
