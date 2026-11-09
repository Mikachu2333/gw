# ThreeDFormat.PresetLighting

返回或设置指定的 **ThreeDFormat** 对象所使用的效果照明。可读/写。



## 语法

express.**PresetLighting**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoLightRigType

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片中第一个形状的三维格式效果照明类型是否为msoLightRigLegacyFlat3。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.PresetLighting == msoLightRigLegacyFlat3)
}
```


```JavaScript
/*本示例如果第一篇演示文稿的第一张幻灯片上第一个形状的三维格式效果照明类型不为msoLightRigBrightRoom，则将其设置为msoLightRigGlow。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    if (threeDFormat.PresetLighting != msoLightRigBrightRoom) {
        threeDFormat.PresetLighting = msoLightRigGlow
    }
}
```
