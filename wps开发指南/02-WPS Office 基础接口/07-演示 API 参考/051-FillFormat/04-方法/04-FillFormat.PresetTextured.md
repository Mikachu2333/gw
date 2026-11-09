# FillFormat.PresetTextured

将指定的填充方式设置为预设纹理。



## 语法

express.**PresetTextured(PresetTexture)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PresetTexture | 必选 | MsoPresetTexture | 预设纹理。可以是 **[MsoPresetTexture](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoPresetTexture)** 常量之一。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将一个带有灰褐色大理石纹理填充的圆柱形添加到活动演示文稿第一张幻灯片中。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddShape(msoShapeCan, 90, 90, 40, 80).Fill.PresetTextured(msoTextureGreenMarble)
}
```


```JavaScript
/*本示例首先向活动演示文稿的第一张幻灯片添加一个三角形，然后设置其填充的纹理为画布纹理。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeIsoscelesTriangle, 10, 10, 100, 100)
    shape.Fill.PresetTextured(msoTextureCanvas)
}
```
