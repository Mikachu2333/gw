# Paragraph.MirrorIndents

返回或设置一个 **Long** 类型的值，该值代表左缩进和右缩进的宽度是否相同。该属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。可读写。



## 语法

express.**MirrorIndents**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置活动文档中第一段左缩进和右缩进的宽度不相同。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).MirrorIndents = msoFalse
}
```


```JavaScript
/*本示例显示第一个文档的第二个段落左缩进和右缩进的宽度是否相同。*/
function test() {
    alert(Documents.Item(1).Paragraphs.Item(2).MirrorIndents == msoTrue)
}
```
