# Style.NextParagraphStyle

返回或设置自动应用于在格式设置为指定样式的段落之后插入的新段落的样式。 **Variant** 类型，可读写。



## 语法

express.**NextParagraphStyle**

express   一个代表 **Style** 对象的变量。

## 类型

any

## 说明


您可以使用样式的本地名称（一个整数或 **WdBuiltinStyle** 常量）或代表新样式的对象，来设置 **NextParagraphStyle** 属性。有关 **WdBuiltinStyle** 常量的列表，请参阅要设置的对象的 **Style** 属性。



## 示例


```JavaScript
/*本示例在活动文档中设置“标题 1”样式后接“标题 2”样式。*/
function test() {
    ActiveDocument.Styles.Item(wdStyleHeading1).NextParagraphStyle = ActiveDocument.Styles.Item(wdStyleHeading2)
}
```


```JavaScript
/*本示例新建一篇文档并添加一个名为“NewStyle”的段落样式。该新样式根据“正文”样式创建，后接“标题 3”样式，左缩进量为 1 英寸（72 磅），设为加粗格式。*/
function test() {
    let document = Documents.Add()
    let style = document.Styles.Add("NewStyle")
    style.BaseStyle = wdStyleNormal
    style.NextParagraphStyle = wdStyleHeading3
    style.ParagraphFormat.LeftIndent = 72
    style.Font.Bold = msoTrue
}
```
