# ThreeDFormat.PresetLightingSoftness

返回或设置延伸光源效果的亮度。可读写。 **MsoPresetLightingSoftness** 类型。



## 语法

express.**PresetLightingSoftness**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetLightingSoftness

## 说明


| **MsoPresetLightingSoftness** 可以是下列 **MsoPresetLightingSoftness** 常量之一。 |
| ----------------------------------------------------------------------- |
| **msoLightingBright**                                                   |
| **msoLightingDim**                                                      |
| **msoLightingNormal**                                                   |
| **msoPresetLightingSoftnessMixed**                                      |



## 示例


```JavaScript
/*本示例将从左侧以“强光”照亮第一张工作表中形状 1 的延伸部分。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let threeDFormat = worksheet.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.PresetLightingSoftness = msoLightingBright
    threeDFormat.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状延伸光源的亮度是否为暗光。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ThreeD.PresetLightingSoftness == msoLightingDim)
}
```
