# Cell.Shading

返回一个 **Shading** 对象，该对象指明指定对象的底纹格式。



## 语法

express.**Shading**

express   一个代表 **Cell** 对象的变量。

## 类型

Shading

## 示例


```JavaScript
/*本示例对第一个表格首行中的第一个单元格应用水平线底纹。*/
function test() {
    let tables = Application.ActiveDocument.Tables
    if (tables.Count >= 1) {
        tables.Item(1).Rows.Item(1).Cells.Item(1).Shading.Texture = wdTextureHorizontal
    }
}
```


```JavaScript
/*本示例将选中内容位于表格的第三个单元格应用蓝色背景。*/
function test() {
    Selection.Cells.Item(3).Shading.BackgroundPatternColor = wdColorBlue
}
```
