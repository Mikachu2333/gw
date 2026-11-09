# ParagraphFormat.Hyphenation

如果指定的段落进行自动断字，则该属性值为 **msoTrue** 。如果指定的段落不进行自动断字，则该属性值为 **msoFalse** 。可读写 **Long** 类型。



## 语法

express.**Hyphenation**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例关闭活动文档中具有“正文”样式的所有段落的自动断字功能。*/
function test() {
    ActiveDocument.Styles.Item("正文").ParagraphFormat.Hyphenation = msoFalse
}
```


```JavaScript
/*本示例显示活动文档的所有段落是否进行自动断字。*/
function test() {
    alert(ActiveDocument.Paragraphs.Format.Hyphenation === msoTrue)
}
```
