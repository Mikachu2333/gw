# Table.Shading

返回一个 **Shading** 对象，该对象代表指定对象的底纹格式。



## 语法

express.**Shading**

express   一个代表 **Table** 对象的变量。

## 类型

Shading

## 示例


```JavaScript
/*本示例对活动文档中第一个表格应用横线纹理。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        ActiveDocument.Tables.Item(1).Shading.Texture = wdTextureHorizontal
    }
}
```


```JavaScript
/*本示例对选中的第一张表格应用不同前景色和背景色的底纹。*/
function test() {
    let shading = Selection.Tables.Item(1).Shading
    shading.Texture = wdTexture20Percent
    shading.ForegroundPatternColorIndex = wdBlue
    shading.BackgroundPatternColorIndex = wdYellow
}
```
