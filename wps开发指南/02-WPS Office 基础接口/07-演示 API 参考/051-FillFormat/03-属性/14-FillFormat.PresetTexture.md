# FillFormat.PresetTexture

返回指定填充的预设纹理。只读 **MsoPresetTexture** 类型。



## 语法

express.**PresetTexture**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoPresetTexture

## 说明


 **PresetTexture** 属性的值可以是下列 **MsoPresetTexture** 常量之一：

| 常量 |
| --------------------------------------------- |
| **msoPresetTextureMixed**                         |
| **msoTextureBlueTissuePaper**                     |
| **msoTextureBouquet**                             |
| **msoTextureBrownMarble**                         |
| **msoTextureCanvas**                              |
| **msoTextureCork**                                |
| **msoTextureDenim**                               |
| **msoTextureFishFossil**                          |
| **msoTextureGranite**                             |
| **msoTextureGreenMarble**                         |
| **msoTextureMediumWood**                          |
| **msoTextureNewsprint**                           |
| **msoTextureOak**                                 |
| **msoTexturePaperBag**                            |
| **msoTexturePapyrus**                             |
| **msoTextureParchment**                           |
| **msoTexturePinkTissuePaper**                     |
| **msoTexturePurpleMesh**                          |
| **msoTextureRecycledPaper**                       |
| **msoTextureSand**                                |
| **msoTextureStationery**                          |
| **msoTextureWalnut**                              |
| **msoTextureWaterDroplets**                       |
| **msoTextureWhiteMarble**                         |
| **msoTextureWovenMat**                            |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个矩形，并设置该矩形的预设纹理与第二个形状的预设纹理一致。要使本示例正常运行，第二个形状必须使用预设纹理的填充。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    let presetTexture = shapes.Item(2).Fill.PresetTexture
    shapes.AddShape(msoShapeRectangle, 100, 0, 40, 80).Fill.PresetTextured(presetTexture)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状填充的预设纹理类型是否为msoTexturePaperBag。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.PresetTexture == msoTexturePaperBag)
}
```
