# ParagraphFormat.KeepTogether

在 WPS 对文档重新分页时，如果指定段落中的所有行都位于同一页上，则该属性值为 **msoTrue** 。可读写 **Long** 类型。



## 语法

express.**KeepTogether**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例设置 WPS 对活动文档重新分页时，第一个段落中的所有行都位于同一页上。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Format.KeepTogether = msoTrue
}
```


```JavaScript
/*本示例显示 WPS 对文档重新分页时，所选段落的所有行是否都位于同一页上。*/
function test() {
    alert(Selection.ParagraphFormat.KeepTogether === msoTrue)
}
```
