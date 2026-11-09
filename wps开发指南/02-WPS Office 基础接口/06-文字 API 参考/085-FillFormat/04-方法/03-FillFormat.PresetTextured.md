# FillFormat.PresetTextured

将指定填充设置为预设纹理。



## 语法

express.**PresetTextured(PresetTexture)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PresetTexture | 必选 | MsoPresetTexture | 预设纹理。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将一个用绿色大理石纹理填充的矩形添至活动文档中。*/
function test() {
    ActiveDocument.Shapes.AddShape(msoShapeCan, 90, 90, 40, 80).Fill.PresetTextured(msoTextureGreenMarble)
}
```


```JavaScript
/*本示例为第一个文档上第一个内嵌形状设置预设纹理填充。*/
function test() {
    let fillFormat = Documents.Item(1).InlineShapes.Item(1).Fill
    fillFormat.PresetTextured(msoTextureBouquet)
}
```
