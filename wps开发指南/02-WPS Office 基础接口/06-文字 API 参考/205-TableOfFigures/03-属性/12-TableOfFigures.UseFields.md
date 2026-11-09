# TableOfFigures.UseFields

如果使用目录项 (TC) 域创建图表目录，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**UseFields**

express   一个代表 **TableOfFigures** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在所选内容后添加图表目录，并为该目录设置格式，以编译带“B”标识符的目录项。*/
function test() {
    Selection.Collapse(wdCollapseEnd)
    let tableOfFigures = ActiveDocument.TablesOfFigures.Add(Selection.Range)
    tableOfFigures.UseFields = true
    tableOfFigures.UseHeadingStyles = false
    tableOfFigures.TableID = "B"
    tableOfFigures.Caption = "example"
}
```


```JavaScript
/*本示例显示第一个文档上第二个图表目录是否使用目录项（TC）域。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    alert(tableOfFigures.UseFields)
}
```
