# ThreeDFormat.PresetLightingDirection

返回或设置光源相对于延伸的位置。 **MsoPresetLightingDirection** 类型，可读写。



## 语法

express.**PresetLightingDirection**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetLightingDirection

## 说明


如果延伸的表面是线框，则设置的照明效果将不明显。



## 示例


```JavaScript
/*本示例将活动文档上第一个形状的延伸方向指定为形状的上方，且延伸的照明方向来自左侧。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.SetExtrusionDirection(msoExtrusionTop)
    threeDFormat.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例显示所选形状的光源相对于延伸的位置是否为msoLightingRight。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    alert(threeDFormat.PresetLightingDirection == msoLightingRight)
}
```
