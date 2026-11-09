# ParagraphFormat.PageBreakBefore

如果在指定段落前插入了分页符，则该属性值为 **msoTrue** 。该属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。可读写 **Long** 类型。



## 语法

express.**PageBreakBefore**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例在所选内容的第一段前插入分页符。*/
function test() {
    Selection.Paragraphs.Item(1).Format.PageBreakBefore = msoTrue
}
```


```JavaScript
/*本示例显示是否在活动文档的所有段落前插入分页符。*/
function test() {
    alert(ActiveDocument.Paragraphs.Format.PageBreakBefore === msoTrue)
}
```
