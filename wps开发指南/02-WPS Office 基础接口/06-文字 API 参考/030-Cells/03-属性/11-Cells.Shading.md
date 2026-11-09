# Cells.Shading

返回一个 **Shading** 对象，该对象指明指定对象的底纹格式。



## 语法

express.**Shading**

express   一个代表 **Cells** 对象的变量。

## 类型

Shading

## 示例


```JavaScript
/*本示例对活动文档第一张表格的第一行应用水平线纹理。*/
function test() {
    let tables = Application.ActiveDocument.Tables
    if (tables.Count > 0) {
        tables.Item(1).Rows.Item(1).Cells.Shading.Texture = wdTextureHorizontal
    }
}
```


```JavaScript
/*本示例对所选单元格应用竖线纹理。*/
function test() {
    Application.Selection.Cells.Shading.Texture = wdTextureVertical
}
```
