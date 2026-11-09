# Font.ItalicBi

如果将字体或范围设置为倾斜格式，则该属性值为 **msoTrue** 。可读写 **Long** 类型。



## 语法

express.**ItalicBi**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （用于倾斜和非倾斜混合格式的文本）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。

 **ItalicBi** 属性用于从右向左的语言。



## 示例


```JavaScript
/*本示例将从右向左语言的活动文档中的第一段的字体设置为倾斜格式。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Font.ItalicBi = msoTrue
}
```


```JavaScript
/*本示例显示从右向左语言的文档中所选内容的字体是否为倾斜格式。*/
function test() {
    alert(Selection.Font.ItalicBi === msoTrue)
}
```
