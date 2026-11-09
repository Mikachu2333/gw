# ParagraphFormat.WidowControl

在 WPS 对文档重新分页时，如果指定段落的首行和末行与段落的其他各行同页，则该属性值为 **msoTrue** 。该属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。可读写 **Long** 类型。



## 语法

express.**WidowControl**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例给活动文档中的各段落设置格式，从而使段中的首行或末行有可能单独位于上页的页尾或下页的页首。*/
function test() {
    ActiveDocument.Range().Paragraphs.Format.WidowControl = msoFalse
}
```


```JavaScript
/*本示例显示 WPS 对文档重新分页时，所选段落的首行和末行是否与段落的其他各行同页。*/
function test() {
    alert(Selection.ParagraphFormat.WidowControl === msoTrue)
}
```
