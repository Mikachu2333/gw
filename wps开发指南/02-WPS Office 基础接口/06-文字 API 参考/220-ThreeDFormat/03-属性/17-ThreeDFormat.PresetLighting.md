# ThreeDFormat.PresetLighting

返回或设置一个代表照明预设的 **MsoBevelType** 常量。可读/写。



## 语法

express.**PresetLighting**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoLightRigType

## 示例


```JavaScript
/*本示例设置活动文档上第一个形状的延伸颜色和光源预设。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    threeDFormat.ExtrusionColor.RGB = RGB(225, 100, 255)
    threeDFormat.PresetLighting = msoBevelAngle
}
```


```JavaScript
/*本示例显示所选形状的光源预设是否为msoBevelArtDeco。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    alert(threeDFormat.PresetLighting == msoBevelArtDeco)
}
```
