# TextColumns.Add

返回一个 **TextColumn** 对象，该对象代表添加到节中或文档中的新文本栏。



## 语法

express.**Add(Width, Spacing, EvenlySpaced)**

express   一个代表 **TextColumns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Width | 可选 | any | 文档中新文本栏的宽度，以磅为单位。 |
| Spacing | 可选 | any | 文档中文本栏的间距，以磅为单位。 |
| EvenlySpaced | 可选 | any | 如果为 **True** ，则文档中的所有文本栏的间距都相等。 |

## 返回值

TextColumn

## 示例


```JavaScript
/*本示例创建一个新文档，然后为其添加另一个 2.5 英寸宽的文本栏。*/
function test() {
    let document = Documents.Add()
    document.PageSetup.TextColumns.Add(InchesToPoints(2.5), InchesToPoints(0.5), false)
}
```


```JavaScript
/*本示例向活动文档添加一个新文本栏，然后使文档中的所有文本栏间距相等。*/
function test() {
    ActiveDocument.PageSetup.TextColumns.Add(InchesToPoints(1.5), null, true)
}
```
