# Footnotes.NumberStyle

返回或设置脚注的编号样式。可读/写 **WdNoteNumberStyle** 。



## 语法

express.**NumberStyle**

express   一个代表 **Footnotes** 对象的变量。

## 类型

WdNoteNumberStyle

## 说明


对于所选择或安装的不同语言支持（例如美国英语），某些 **WdNoteNumberStyle** 常量可能不可用。



## 示例


```JavaScript
/*本示例显示活动文档上第一节的脚注的编号样式是否为wdNoteNumberStyleSimpChinNum1。*/
function test() {
    let range = ActiveDocument.Sections(1).Range
    alert(range.Footnotes.NumberStyle == wdNoteNumberStyleSimpChinNum1)
}
```


```JavaScript
/*本示例判断如果活动文档上第一节的脚注的编号样式为wdNoteNumberStyleArabic，则将该样式设置为wdNoteNumberStyleLowercaseRoman。*/
function test() {
    let range = ActiveDocument.Sections(1).Range
    if (range.Footnotes.NumberStyle == wdNoteNumberStyleArabic) {
        range.Footnotes.NumberStyle = wdNoteNumberStyleLowercaseRoman
    }
}
```
