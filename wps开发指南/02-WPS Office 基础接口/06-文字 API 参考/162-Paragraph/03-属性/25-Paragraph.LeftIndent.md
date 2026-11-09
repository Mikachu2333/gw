# Paragraph.LeftIndent

返回或设置一个 **Single** 类型的值，该值代表指定段落的左缩进值（以磅为单位）。可读写。



## 语法

express.**LeftIndent**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例为活动文档中的第一段设置 1 英寸的左缩进。InchesToPoints 方法用来将英寸转换为磅。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).LeftIndent = InchesToPoints(1)
}
```


```JavaScript
/*本示例显示第一个文档的第二个段落的左缩进值（以磅为单位）。*/
function test() {
    alert(Documents.Item(1).Paragraphs.Item(2).LeftIndent)
}
```
