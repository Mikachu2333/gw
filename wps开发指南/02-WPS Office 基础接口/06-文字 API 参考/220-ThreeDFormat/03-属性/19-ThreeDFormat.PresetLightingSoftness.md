# ThreeDFormat.PresetLightingSoftness

返回或设置延伸光源的亮度。 **MsoPresetLightingSoftness** 类型，可读写。



## 语法

express.**PresetLightingSoftness**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetLightingSoftness

## 示例


```JavaScript
/*本示例指定从左侧以“强光”照亮活动文档中第一个形状的延伸部分。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.PresetLightingSoftness = msoLightingBright
    threeDFormat.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例显示所选形状的延伸光源的亮度是否为msoLightingDim。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    alert(threeDFormat.PresetLightingSoftness == msoLightingDim)
}
```
