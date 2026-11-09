# Table.Tables

返回一个 **Tables** 集合，该集合代表指定表格中的所有嵌套表格。只读。



## 语法

express.**Tables**

express   一个代表 **Table** 对象的变量。

## 类型

Tables

## 示例


```JavaScript
/*本示例对第一个文档上第一个表格中的第一个嵌套表格应用横线纹理。*/
function test() {
    let table = Documents.Item(1).Tables.Item(1)
    table.Tables.Item(1).Shading.Texture = wdTextureHorizontal
}
```


```JavaScript
/*本示例显示活动文档上第一个表格中的嵌套表格的个数。*/
function test() {
    alert(ActiveDocument.Tables.Item(1).Tables.Count)
}
```
