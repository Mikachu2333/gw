# Range.ListParagraphs

返回一个 **ListParagraphs** 集合，该集合代表范围中的所有编号段落。只读。



## 语法

express.**ListParagraphs**

express   一个代表 **Range** 对象的变量。

## 类型

ListParagraphs

## 示例


```JavaScript
/*本示例显示活动文档的主文档文章的第一个编号段落的文档部分的文本。*/
function test() {
    let paragraph = ActiveDocument.Content.ListParagraphs.Item(1)
    alert(paragraph.Range.Text)
}
```


```JavaScript
/*本示例设置所选区域中第二个编号段落为居中对齐。*/
function test() {
    Selection.Range.ListParagraphs.Item(2).Alignment = wdAlignParagraphCenter
}
```
