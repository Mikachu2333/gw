# ParagraphFormat.SpaceAfter

返回或设置指定段落或文本栏后面的间距（以磅为单位）。可读/写 **Single** 类型。



## 语法

express.**SpaceAfter**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中所有段落的段后间距设置为 12 磅。*/
function test() {
    ActiveDocument.Range().ParagraphFormat.SpaceAfter = 12
}
```


```JavaScript
/*本示例显示活动文档的第一个段落的段后间距。*/
function test() {
    alert(ActiveDocument.Paragraphs.Item(1).Format.SpaceAfter + " 磅")
}
```
