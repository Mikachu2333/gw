# Document.ListParagraphs

返回一个 **ListParagraphs** 对象，该对象代表文档中的所有编号段落。只读。



## 语法

express.**ListParagraphs**

express   一个代表 **Document** 对象的变量。

## 类型

ListParagraphs

## 示例


```JavaScript
/*此示例为第一个文档中的每个编号段落或有项目符号的段落添加黄色背景。*/
function test() {
    let listParagraphs = Documents.Item(1).ListParagraphs
    for (let i = 1; i <= listParagraphs.Count; i++) {
        listParagraphs.Item(i).Shading.BackgroundPatternColorIndex = wdYellow
    }
}
```


```JavaScript
/*此示例显示活动文档上第一个具有编号格式的段落的文本。*/
function test() {
    let paragraph = ActiveDocument.ListParagraphs.Item(1)
    alert(paragraph.Range.Text)
}
```
