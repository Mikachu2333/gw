# TableOfFigures.UseHeadingStyles

如果使用内置标题样式创建图表目录，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**UseHeadingStyles**

express   一个代表 **TableOfFigures** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例添加图表目录以替换所选内容，然后为该目录设置格式，以编译 TC 域的目录项。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Add(Selection.Range)
    tableOfFigures.UseFields = true
    tableOfFigures.UseHeadingStyles = false
    tableOfFigures.Caption = "example"
}
```


```JavaScript
/*本示例显示第一个文档上第二个图表目录是否使用内置标题样式。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    alert(tableOfFigures.UseHeadingStyles)
}
```
