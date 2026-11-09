# ParagraphFormat.LineUnitBefore

返回或设置指定段落的段前间距（以网格线为单位）。可读写 **Single** 类型。



## 语法

express.**LineUnitBefore**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档的所有段落的段前间距设置为 3 网格线。*/
function test() {
    ActiveDocument.Paragraphs.Format.LineUnitBefore = 3
}
```


```JavaScript
/*本示例显示所选段落的段前间距。*/
function test() {
    alert(Selection.Range.ParagraphFormat.LineUnitBefore)
}
```
