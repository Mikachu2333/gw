# Style.LinkStyle

设置或返回一个 **Variant** 类型的值，该值代表段落和字符样式之间的链接。可读写。



## 语法

express.**LinkStyle**

express   一个代表 **Style** 对象的变量。

## 类型

any

## 说明


一旦将字符样式与段落样式链接起来，这两种样式就采取相同的字符格式。



## 示例


```JavaScript
/*本示例创建并设置新字符样式的格式，并将字符样式与内置标题样式“标题 1”链接起来，这样“标题 1”样式就可以采用新创建样式的字符格式。*/
function test() {
    let style = ActiveDocument.Styles.Add("标题 1 Characters", wdStyleTypeCharacter)
    style.Font.Name = "Verdana"
    style.Font.Bold = msoTrue
    style.Font.Shadow = msoTrue
    let border = style.Font.Borders.Item(wdBorderTop)
    border.LineStyle = wdLineStyleDot
    border.LineWidth = wdLineWidth300pt
    border.Color = wdColorDarkRed
    ActiveDocument.Styles.Item("标题 1").LinkStyle = ActiveDocument.Styles.Item("标题 1 Characters")
    let range = ActiveDocument.Content
    range.InsertParagraphAfter()
    range.InsertAfter("New Linked Style")
    range.Select()
    Selection.Collapse(wdCollapseEnd)
    Selection.Style = ActiveDocument.Styles.Item("标题 1")
}
```


```JavaScript
/*本示例显示所选区域的样式的 LinkStyle 属性对应的样式名称（由用户语言表示）。*/
function test() {
    alert(Selection.Range.Style.LinkStyle.NameLocal)
}
```
