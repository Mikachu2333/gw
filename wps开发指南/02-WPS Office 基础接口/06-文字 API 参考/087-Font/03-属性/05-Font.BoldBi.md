# Font.BoldBi

如果字体格式为加粗，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**BoldBi**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （用于加粗和非加粗混合的文本）。该属性可设为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。

 **BoldBi** 属性应用于从右向左语言的文字。



## 示例


```JavaScript
/*本示例将从右向左语言的活动文档中第一段的字体格式设为加粗。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Font.BoldBi = msoTrue
}
```


```JavaScript
/*本示例显示从右向左语言的文档中所选内容的字体是否未加粗。*/
function test() {
    alert(Selection.Font.BoldBi === msoFalse)
}
```
