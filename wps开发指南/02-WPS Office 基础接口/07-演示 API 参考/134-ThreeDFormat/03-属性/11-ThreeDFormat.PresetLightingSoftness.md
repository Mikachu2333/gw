# ThreeDFormat.PresetLightingSoftness

返回或设置延伸部分的照明的亮度。可读/写。



## 语法

express.**PresetLightingSoftness**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetLightingSoftness

## 说明


 **PresetLightingSoftness** 属性的值可以是下列 **MsoPresetLightingSoftness** 常量之一：

| 常量 |
| ---------------------------------- |
| **msoLightingBright**              |
| **msoLightingDim**                 |
| **msoLightingNormal**              |
| **msoPresetLightingSoftnessMixed** |



## 示例


```JavaScript
/*本示例将从左侧以“强光”照亮活动演示文稿的第一张幻灯片中第一个形状的延伸部分。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.PresetLightingSoftness = msoLightingBright
    threeDFormat.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片中第一个形状的延伸部分的照明的亮度是否为msoLightingNormal。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.PresetLightingSoftness == msoLightingNormal)
}
```
