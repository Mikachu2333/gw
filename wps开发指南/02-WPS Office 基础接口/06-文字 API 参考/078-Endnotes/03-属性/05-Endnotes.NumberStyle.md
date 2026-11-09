# Endnotes.NumberStyle

返回或设置编号样式。可读/写 **WdNoteNumberStyle** 类型。



## 语法

express.**NumberStyle**

express   一个代表 **Endnotes** 对象的变量。

## 类型

WdNoteNumberStyle

## 说明


根据所选择或安装的语言支持（例如，英语（美国））的不同，以上某些常量可能不可用。



## 示例


```JavaScript
/*本示例设置活动文档中脚注和尾注的格式。*/
function test() {
    ActiveDocument.Footnotes.NumberStyle = wdNoteNumberStyleLowercaseRoman
    ActiveDocument.Endnotes.NumberStyle = wdNoteNumberStyleUppercaseRoman
}
```


```JavaScript
/*本示例显示所选内容中尾注的编号样式是否为wdNoteNumberStyleLowercaseRoman。*/
function test() {
    alert(Selection.Endnotes.NumberStyle == wdNoteNumberStyleLowercaseRoman)
}
```
