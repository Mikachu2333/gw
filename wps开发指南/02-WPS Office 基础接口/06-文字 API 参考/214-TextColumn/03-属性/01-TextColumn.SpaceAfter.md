# TextColumn.SpaceAfter

返回或设置指定段落或文本栏后面的间距（以磅为单位）。可读/写 **Single** 类型。



## 语法

express.**SpaceAfter**

express   一个代表 **TextColumn** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*此示例将活动文档设置为三栏，第一栏后间距为 0.5 英寸。InchesToPoints 方法用于将英寸转换为磅。*/
function test() {
    let textColumns = ActiveDocument.PageSetup.TextColumns
    textColumns.SetCount(3)
    textColumns.LineBetween = false
    textColumns.EvenlySpaced = msoTrue
    textColumns.Item(1).SpaceAfter = Application.InchesToPoints(0.5)
}
```


```JavaScript
/*本示例显示第一个文档上第二个文本栏后的间距。*/
function test() {
    let textColumn = Documents.Item(1).PageSetup.TextColumns.Item(2)
    alert(textColumn.SpaceAfter)
}
```
