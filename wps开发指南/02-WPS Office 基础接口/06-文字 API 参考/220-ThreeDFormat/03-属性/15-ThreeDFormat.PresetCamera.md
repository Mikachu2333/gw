# ThreeDFormat.PresetCamera

返回一个代表照相机预设的 **MsoPresetCamera** 常量。只读。



## 语法

express.**PresetCamera**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetCamera

## 示例


```JavaScript
/*本示例显示活动文档上第一个形状使用的效果照相机类型是否为msoCameraLegacyPerspectiveTopRight。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    alert(threeDFormat.PresetCamera == msoCameraLegacyPerspectiveTopRight)
}
```


```JavaScript
/*本示例判断如果所选形状使用的效果照相机类型为msoCameraOrthographicFront，则将该形状的光源预设设置为msoBevelConvex。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    if (threeDFormat.PresetCamera == msoCameraOrthographicFront) {
        threeDFormat.PresetLighting = msoBevelConvex
    }
}
```
