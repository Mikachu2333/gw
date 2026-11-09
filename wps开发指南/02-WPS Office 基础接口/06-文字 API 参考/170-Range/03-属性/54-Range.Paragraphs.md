# Range.Paragraphs

返回一个 **Paragraphs** 集合，该集合代表指定范围中的所有段落。只读。



## 语法

express.**Paragraphs**

express   一个代表 **Range** 对象的变量。

## 类型

Paragraphs

## 示例


```JavaScript
/*本示例将活动文档上第一节中所有段落的行距设置为单倍行距。*/
function test() {
    ActiveDocument.Sections.Item(1).Range.Paragraphs.LineSpacingRule = wdLineSpaceSingle
}
```


```JavaScript
/*本示例将所选范围中的所有段落的对齐方式设置为右对齐。*/
function test() {
    Selection.Range.Paragraphs.Alignment = wdAlignParagraphRight
}
```
