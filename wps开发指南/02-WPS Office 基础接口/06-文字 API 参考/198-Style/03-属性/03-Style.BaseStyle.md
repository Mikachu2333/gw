# Style.BaseStyle

返回或设置一种现有样式，根据此样式可以设置其他样式。 **Variant** 类型，可读写。



## 语法

express.**BaseStyle**

express   一个代表 **Style** 对象的变量。

## 类型

any

## 说明


要设置 **BaseStyle** 属性，请指定基本样式的本地名称（一个整数或 **wdBuiltinStyle** 常量），或代表基本样式的对象。有关 **wdBuiltinStyle** 常量的列表，请参阅要设置的对象的 **Style** 属性。



## 示例


```JavaScript
/*本示例新建一篇文档，为其新添一个名为“NewHeading1”的样式，并以样式“标题 1”为新样式的基本样式，然后将新样式的左缩进量设置为 1 英寸（72 磅）。*/
function test() {
    let document = Documents.Add()
    let style = document.Styles.Add("NewHeading1")
    style.BaseStyle = document.Styles.Item(wdStyleHeading1)
    style.ParagraphFormat.LeftIndent = 72
}
```


```JavaScript
/*本示例显示活动文档正文段落样式所用的基本样式的名称（由用户语言表示）。*/
function test() {
    let style = ActiveDocument.Styles.Item(wdStyleBodyText).BaseStyle
    alert(style.NameLocal)
}
```
