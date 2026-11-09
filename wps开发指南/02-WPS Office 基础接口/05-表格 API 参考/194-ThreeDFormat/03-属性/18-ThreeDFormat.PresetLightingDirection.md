# ThreeDFormat.PresetLightingDirection

返回或设置与延伸相对的光源的位置。 **MsoPresetLightingDirection** 类型，可读写。



## 语法

express.**PresetLightingDirection**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetLightingDirection

## 说明


| **MsoPresetLightingDirection** 可以是下列 **MsoPresetLightingDirection** 常量之一。 |
| ------------------------------------------------------------------------- |
| **msoLightingBottom**                                                     |
| **msoLightingBottomLeft**                                                 |
| **msoLightingBottomRight**                                                |
| **msoLightingLeft**                                                       |
| **msoLightingNone**                                                       |
| **msoLightingRight**                                                      |
| **msoLightingTop**                                                        |
| **msoLightingTopLeft**                                                    |
| **msoLightingTopRight**                                                   |
| **msoPresetLightingDirectionMixed**                                       |

如果延伸图形的表面是由线框构成的，就看不到所设置的光线效果。



## 示例


```JavaScript
/*本示例使第一张工作表中的第一个形状向上延伸，并使光线从左方照射。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let threeDFormat = worksheet.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.SetExtrusionDirection(msoExtrusionTop)
    threeDFormat.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例显示活动工作表中第三个形状的 3D 效果的照明方向是否来自右侧。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    alert(shape.ThreeD.PresetLightingDirection == msoLightingRight)
}
```
