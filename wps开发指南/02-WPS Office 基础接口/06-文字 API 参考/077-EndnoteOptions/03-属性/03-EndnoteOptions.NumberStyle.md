# EndnoteOptions.NumberStyle

返回或设置尾注的编号样式。 **WdNoteNumberStyle** 类型，可读写。



## 语法

express.**NumberStyle**

express   一个代表 **EndnoteOptions** 对象的变量。

## 类型

WdNoteNumberStyle

## 说明


某些 **WdNoteNumberStyle** 常量可能不可用，具体取决于所选择或安装的语言支持（例如，美国英语）。



## 示例


```JavaScript
/*本示例显示所选内容中尾注的编号样式是否为wdNoteNumberStyleLowercaseRoman。*/
function test() {
    alert(Selection.EndnoteOptions.NumberStyle == wdNoteNumberStyleLowercaseRoman)
}
```


```JavaScript
/*本示例将活动文档上第一节的文档部分中所有尾注的编号样式设置为wdNoteNumberStyleUppercaseLetter。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    range.EndnoteOptions.NumberStyle = wdNoteNumberStyleUppercaseLetter
}
```
