# ThreeDFormat.SetExtrusionDirection

设置延伸经过的路径偏离延伸形状的方向。



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


| **MsoPresetExtrusionDirection** 可以是下列 **MsoPresetExtrusionDirection** 常量之一。 |
| --------------------------------------------------------------------------- |
| **msoExtrusionBottom**                                                      |
| **msoExtrusionBottomLeft**                                                  |
| **msoExtrusionBottomRight**                                                 |
| **msoExtrusionLeft**                                                        |
| **msoExtrusionNone**                                                        |
| **msoExtrusionRight**                                                       |
| **msoExtrusionTop**                                                         |
| **msoExtrusionTopLeft**                                                     |
| **msoExtrusionTopRight**                                                    |
| **msoPresetExtrusionDirectionMixed**                                        |

此方法将 **[PresetExtrusionDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/PresetExtrusionDirection)** 属性值设置为由 _PresetExtrusionDirection_ 参数指定的方向。



## 示例


```JavaScript
/*本示例使第一张工作表中的第一个形状向上延伸，并使光线从左方照射。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let threeDFormat = worksheet.Shapes.Item(1).ThreeD
    threeDFormat.Visible = true
    threeDFormat.SetExtrusionDirection(msoExtrusionTop)
    threeDFormat.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例将活动工作表中第三个形状的 3D 效果的延伸方向设置成右上角。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    shape.ThreeD.Visible = msoTrue
    shape.ThreeD.SetExtrusionDirection(msoExtrusionTopRight)
}
```
