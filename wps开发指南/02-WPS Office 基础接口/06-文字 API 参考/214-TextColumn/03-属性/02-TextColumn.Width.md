# TextColumn.Width

返回或设置指定文本栏的宽度（以磅为单位）。可读写 **Long** 类型。



## 语法

express.**Width**

express   一个代表 **TextColumn** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将包含所选内容的节的格式设置为三栏，然后显示每一栏的宽度。*/
function test() {
    let textColumns = Selection.PageSetup.TextColumns
    textColumns.SetCount(3)
    for (let i = 1; i <= textColumns.Count; i++) {
        alert("Width= " + PointsToInches(textColumns.Item(i).Width))
    }
}
```


```JavaScript
/*本示例将活动文档上两个文本栏的宽度分别为 1.5 英寸和 3 英寸。*/
function test() {
    let textColumns = ActiveDocument.PageSetup.TextColumns
    textColumns.Item(1).Width = Application.InchesToPoints(1.5)
    textColumns.Item(2).Width = Application.InchesToPoints(3)
}
```
