# ThreeDFormat.SetPresetCamera

设置形状的照相机预设。



## 语法

express.**SetPresetCamera(PresetCamera)**

express   一个代表 **ThreeDFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PresetCamera | 必选 | MsoPresetCamera | 指定照相机预设类型。 |

## 返回值

void

## 示例


```JavaScript
/*本示例判断活动文档的第一个形状的照相机预设类型是否为msoCameraOrthographicFront，如果是，则将照相机预设类型设置为msoCameraObliqueTopRight；否则将照相机预设类型设置为msoCameraOrthographicFront。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    if (threeDFormat.PresetCamera == msoCameraOrthographicFront) {
        threeDFormat.SetPresetCamera(msoCameraObliqueTopRight)
    } else {
        threeDFormat.SetPresetCamera(msoCameraOrthographicFront)
    }
}
```


```JavaScript
/*本示例将所选形状的照相机预设类型设置为msoCameraObliqueBottom，并显示是否设置成功。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.SetPresetCamera(msoCameraObliqueBottom)
    alert(threeDFormat.PresetCamera == msoCameraObliqueBottom)
}
```
