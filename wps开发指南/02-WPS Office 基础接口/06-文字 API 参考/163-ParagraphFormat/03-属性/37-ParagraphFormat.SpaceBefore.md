# ParagraphFormat.SpaceBefore

返回或设置指定段落的段前间距（以磅为单位）。可读/写 **Single** 类型。



## 语法

express.**SpaceBefore**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中所有段落的段前间距设置为 12 磅。*/
function test() {
    ActiveDocument.Range().ParagraphFormat.SpaceBefore = 12
}
```


```JavaScript
/*本示例显示活动文档的第一个段落的段前间距。*/
function test() {
    alert(ActiveDocument.Paragraphs.Item(1).Format.SpaceBefore + " 磅")
}
```
