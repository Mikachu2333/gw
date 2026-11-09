# TextColumns.Spacing

返回或设置列间距（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**Spacing**

express   一个代表 **TextColumns** 对象的变量。

## 类型

number（float 精度）

## 说明


在为 **TextColumns** 对象设置该属性后， **EvenlySpaced** 属性将设置为 **msoTrue** 。要在 **EvenlySpaced** 为 **msoFalse** 时返回或设置单个文本栏的间距，请使用 **TextColumn** 对象的 **SpaceAfter** 属性。



## 示例


```JavaScript
/*本示例设置活动文档的格式，并以 0.5 英寸（36 磅）的栏间距、分两栏显示文字。*/
function test() {
    let textColumns = ActiveDocument.PageSetup.TextColumns
    textColumns.SetCount(2)
    textColumns.LineBetween = msoFalse
    textColumns.EvenlySpaced = msoTrue
    textColumns.Spacing = 36
}
```


```JavaScript
/*本示例显示活动文档的第一节的文本栏之间的间距。*/
function test() {
    let textColumns = ActiveDocument.Sections.Item(1).PageSetup.TextColumns
    alert(textColumns.Spacing + " 磅")
}
```
