# Footnotes.StartingNumber

返回或设置注释编号、行号或页码的起始值。可读/写 **Long** 类型。



## 语法

express.**StartingNumber**

express   一个代表 **Footnotes** 对象的变量。

## 类型

number（int4 精度）

## 说明


只有在页面视图中才能看到行号。

当应用于页码时，该属性返回或设置指定 **HeaderFooter** 对象的起始页码。该页码是否在第一页显示取决于 **ShowFirstPageNumber** 属性的设置。如果 **RestartNumberingAtSection** 属性设置为 **False** ，它将覆盖 **StartingNumber** 属性，以便可以从前一节继续编排页码。



## 示例


```JavaScript
/*此示例创建了一个新文档，将脚注的起始编号设置为10，然后在插入点添加脚注。*/
function test() {
    let footnotes = Documents.Add().Footnotes
    footnotes.StartingNumber = 10
    footnotes.Add(Selection.Range, "Text for a footnote")
}
```


```JavaScript
/*本示例显示所选内容的脚注的起始编号。*/
function test() {
    alert(Selection.Footnotes.StartingNumber)
}
```
