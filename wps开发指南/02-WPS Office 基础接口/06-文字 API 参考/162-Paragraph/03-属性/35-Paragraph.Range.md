# Paragraph.Range

返回一个 **Range** 对象，该对象代表指定段落中包含的文档部分。



## 语法

express.**Range**

express   一个代表 **Paragraph** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例为活动文档中的第一段应用“标题 1”样式。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Style = wdStyleHeading1
}
```


```JavaScript
/*本示例显示活动文档中的第二段的内容。*/
function test() {
    alert(ActiveDocument.Paragraphs.Item(2).Range.Text)
}
```
