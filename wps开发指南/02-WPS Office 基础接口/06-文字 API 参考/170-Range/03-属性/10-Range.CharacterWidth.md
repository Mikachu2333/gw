# Range.CharacterWidth

返回或设置指定区域的字符宽度。 **WdCharacterWidth** 类型，可读写。



## 语法

express.**CharacterWidth**

express   一个代表 **Range** 对象的变量。

## 类型

WdCharacterWidth

## 示例


```JavaScript
/*本示例将当前选定内容转换为半角字符。*/
function test() {
    Selection.Range.CharacterWidth = wdWidthHalfWidth
}
```


```JavaScript
/*本示例显示活动文档的第一个段落的字符宽度是否为wdWidthFullWidth。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    alert(range.CharacterWidth == wdWidthFullWidth)
}
```
