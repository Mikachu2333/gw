# ParagraphFormat.MirrorIndents

返回或设置一个 **Long** 类型的值，该值代表左缩进和右缩进的宽度是否相同。该属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。可读写。



## 语法

express.**MirrorIndents**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将活动文档的所有段落的左缩进和右缩进的宽度设置为相同。*/
function test() {
    ActiveDocument.Paragraphs.Format.MirrorIndents = msoTrue
}
```


```JavaScript
/*本示例显示所选段落的左缩进和右缩进的宽度是否相同。*/
function test() {
    alert(Selection.ParagraphFormat.MirrorIndents === msoTrue)
}
```
