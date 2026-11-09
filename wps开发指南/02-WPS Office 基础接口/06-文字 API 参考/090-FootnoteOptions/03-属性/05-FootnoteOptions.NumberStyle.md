# FootnoteOptions.NumberStyle

返回或设置脚注的编号样式。 **WdNoteNumberStyle** 类型，可读写。



## 语法

express.**NumberStyle**

express   一个代表 **FootnoteOptions** 对象的变量。

## 类型

WdNoteNumberStyle

## 说明


某些 **WdNoteNumberStyle** 常量可能不可用，具体取决于所选择或安装的语言支持（例如，美国英语）。



## 示例


```JavaScript
/*本示例显示所选内容中所有脚注的编号样式是否为wdNoteNumberStyleArabic。*/
function test() {
    alert(Selection.FootnoteOptions.NumberStyle == wdNoteNumberStyleArabic)
}
```


```JavaScript
/*本示例设置活动文档上第一节中所有脚注的编号样式。*/
function test() {
    let range = Application.ActiveDocument.Sections.Item(1).Range
    range.FootnoteOptions.NumberStyle = wdNoteNumberStyleHindiArabic
}
```
