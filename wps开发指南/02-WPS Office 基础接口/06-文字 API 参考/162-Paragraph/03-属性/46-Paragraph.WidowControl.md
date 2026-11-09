# Paragraph.WidowControl

在 WPS 对文档重新分页时，如果指定段落的首行和末行与段落的其他各行同页，则该属性值为 **msoTrue** 。可读写 **Long** 类型。



## 语法

express.**WidowControl**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例设置活动文档中第一段的格式，以便段落中的首行或末行可以单独出现在页面顶端或底端。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).WidowControl = msoFalse
}
```


```JavaScript
/*本示例在 WPS 对文档重新分页时，设置所选内容的第二个段落的首行和末行与该段落的其他各行同页。*/
function test() {
    Selection.Paragraphs.Item(2).WidowControl = msoTrue
}
```
