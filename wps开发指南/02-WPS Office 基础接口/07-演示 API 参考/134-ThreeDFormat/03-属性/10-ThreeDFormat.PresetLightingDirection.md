# ThreeDFormat.PresetLightingDirection

返回或设置光源相对于延伸的位置。可读/写。



## 语法

express.**PresetLightingDirection**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetLightingDirection

## 说明


 **PresetLightingDirection** 属性的值可以是下列 **MsoPresetLightingDirection** 常量之一：

| **msoLightingBottom**               |
| ----------------------------------- |
| **msoLightingBottomLeft**           |
| **msoLightingBottomRight**          |
| **msoLightingLeft**                 |
| **msoLightingNone**                 |
| **msoLightingRight**                |
| **msoLightingTop**                  |
| **msoLightingTopLeft**              |
| **msoLightingTopRight**             |
| **msoPresetLightingDirectionMixed** |



## 示例


```JavaScript
/*本示例指定活动演示文稿的第一张幻灯片中第一个形状的延伸线向形状顶部延伸，延伸的照明来自左侧。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.SetExtrusionDirection(msoExtrusionTop)
    threeDFormat.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片中第一个形状的光源相对于延伸的位置是否为msoLightingBottom。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.PresetLightingDirection == msoLightingBottom)
}
```
