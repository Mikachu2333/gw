# Paragraph.RightIndent

返回或设置指定段落的右缩进（以磅为单位）。可读写 **Single** 类型。



## 语法

express.**RightIndent**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中第一段的右缩进设置为距右边距 1 英寸。InchesToPoints 方法用来将英寸转换为磅。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).RightIndent = InchesToPoints(1)
}
```


```JavaScript
/*本示例显示第一个文档的第二个段落的右缩进值（以磅为单位）*/
function test() {
    alert(Documents.Item(1).Paragraphs.Item(2).RightIndent)
}
```
