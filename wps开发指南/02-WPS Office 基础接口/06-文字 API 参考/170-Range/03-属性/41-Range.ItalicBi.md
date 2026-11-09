# Range.ItalicBi

如果将字体或范围设置为倾斜格式，则该属性值为 **msoTrue** 。可读写 **Long** 类型。



## 语法

express.**ItalicBi**

express   一个代表 **Range** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （对于倾斜和非倾斜的混合文本）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。

 **ItalicBi** 属性应用于从右向左语言的文本。



## 示例


```JavaScript
/*本示例将从右向左语言的活动文档中的第一段设置为倾斜格式。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.ItalicBi = msoTrue
}
```


```JavaScript
/*本示例显示从右向左语言的活动文档的主文档文章是否为倾斜和非倾斜的混合文本。*/
function test() {
    alert(ActiveDocument.Content.ItalicBi == wdUndefined)
}
```
