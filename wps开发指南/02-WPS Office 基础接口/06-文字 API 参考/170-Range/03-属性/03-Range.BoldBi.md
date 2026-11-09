# Range.BoldBi

如果字体或区域为加粗格式，则为 **msoTrue** 。该属性值返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （用于加粗和非加粗混合文本）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。 **Long** 类型，可读写。



## 语法

express.**BoldBi**

express   一个代表 **Range** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将从右向左语言的活动文档中第一段的格式设为加粗。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.BoldBi = msoTrue
}
```


```JavaScript
/*本示例显示从右向左语言的文档中所选内容是否为粗体和非粗体文本的混合。*/
function test() {
    alert(Selection.Range.BoldBi == wdUndefined)
}
```
