# Style.Shading

返回一个 **Shading** 对象，该对象代表指定对象的底纹格式。



## 语法

express.**Shading**

express   一个代表 **Style** 对象的变量。

## 类型

Shading

## 示例


```JavaScript
/*本示例显示活动文档中名为“标题 3”的样式是否无底纹。*/
function test() {
    alert(ActiveDocument.Styles.Item("标题 3").Shading.Texture == wdTextureNone)
}
```


```JavaScript
/*本示例设置所选区域的样式的底纹纹理和底纹颜色。*/
function test() {
    let shading = Selection.Range.Style.Shading
    shading.Texture = wdTexture65Percent
    shading.BackgroundPatternColor = wdColorGold
}
```
