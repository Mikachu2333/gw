# ThreeDFormat.SetExtrusionDirection

设置延伸部分经过的路径偏离延伸形状的方向。



## 语法

express.**SetExtrusionDirection(PresetExtrusionDirection)**

express   一个代表 **ThreeDFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PresetExtrusionDirection | 必选 | MsoPresetExtrusionDirection | 指定延伸方向。 |

## 返回值

void

## 说明


该方法将 **[PresetExtrusionDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/PresetExtrusionDirection)** 属性设置为由 PresetExtrusionDirection 参数指定的方向。

PresetExtrusionDirection 参数值可以是下列 **MsoPresetExtrusionDirection** 常量之一：

| 常量 |
| ------------------------------------ |
| **msoExtrusionBottom**               |
| **msoExtrusionBottomLeft**           |
| **msoExtrusionBottomRight**          |
| **msoExtrusionLeft**                 |
| **msoExtrusionNone**                 |
| **msoExtrusionRight**                |
| **msoExtrusionTop**                  |
| **msoExtrusionTopLeft**              |
| **msoExtrusionTopRight**             |
| **msoPresetExtrusionDirectionMixed** |



## 示例


```JavaScript
/*本示例指定活动演示文稿的第一张幻灯片上第一个形状的延伸线向形状顶部延伸，延伸的照明来自左侧。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.SetExtrusionDirection(msoExtrusionTop)
    threeDFormat.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例向第一篇演示文稿的第一张幻灯片添加一个圆角矩形，并设置圆角矩形的延伸线向形状左下角延伸。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeRoundedRectangle, 150, 80, 80, 30)
    shape.ThreeD.Visible = msoTrue
    shape.ThreeD.SetExtrusionDirection(msoExtrusionBottomLeft)
}
```
