# ThreeDFormat.PresetExtrusionDirection

返回延伸路径从延伸形状（延伸的正面）中带走的方向。 **MsoPresetExtrusionDirection** 类型，只读。



## 语法

express.**PresetExtrusionDirection**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetExtrusionDirection

## 说明


| **MsoPresetExtrusionDirection** 可以是下列 **MsoPresetExtrusionDirection** 常量之一。 |
| --------------------------------------------------------------------------- |
| **msoExtrusionTop**                                                         |
| **msoExtrusionTopRight**                                                    |
| **msoExtrusionBottom**                                                      |
| **msoExtrusionBottomLeft**                                                  |
| **msoExtrusionBottomRight**                                                 |
| **msoExtrusionLeft**                                                        |
| **msoExtrusionNone**                                                        |
| **msoExtrusionRight**                                                       |
| **msoExtrusionTopLeft**                                                     |
| **msoPresetExtrusionDirectionMixed**                                        |

该属性为只读。要设置该属性的值，请使用 **[SetExtrusionDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/SetExtrusionDirection)** 方法。



## 示例


```JavaScript
/*本示例将第一张工作表中向左上延伸的形状改为向右下延伸。*/
function test() {
    let worksheet = Worksheets.Item(1)
    for (let i = 1; i <= worksheet.Shapes.Count; i++) {
        let threeDFormat = worksheet.Shapes.Item(i).ThreeD
        if (threeDFormat.PresetExtrusionDirection == msoExtrusionTopLeft) {
            threeDFormat.SetExtrusionDirection(msoExtrusionBottomRight)
        }
    }
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状是否向右延伸。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ThreeD.PresetExtrusionDirection == msoExtrusionRight)
}
```
