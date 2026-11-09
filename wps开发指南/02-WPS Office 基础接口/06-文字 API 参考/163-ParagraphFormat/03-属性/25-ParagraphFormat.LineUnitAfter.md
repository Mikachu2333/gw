# ParagraphFormat.LineUnitAfter

返回或设置指定段落的段后间距（以网格线为单位）。可读写 **Single** 类型。



## 语法

express.**LineUnitAfter**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档的第一段的段后间距设置为 2 网格线。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Format.LineUnitAfter = 2
}
```


```JavaScript
/*本示例显示所选内容的段落的段后间距。*/
function test() {
    alert(Selection.ParagraphFormat.LineUnitAfter)
}
```
