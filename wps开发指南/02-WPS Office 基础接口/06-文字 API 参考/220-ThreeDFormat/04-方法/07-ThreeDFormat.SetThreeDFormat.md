# ThreeDFormat.SetThreeDFormat

返回预设的延伸格式。



## 语法

express.**SetThreeDFormat(PresetThreeDFormat)**

express   一个代表 **ThreeDFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PresetThreeDFormat | 必选 | MsoPresetThreeDFormat | 指定预设延伸格式。 |

## 返回值

void

## 说明


每个预设的延伸格式都包含一组预设值，这些值针对各种延伸属性。此方法将 **PresetThreeDFormat** 属性设置为 _PresetThreeDFormat_ 参数指定的格式。

指定 **msoPresetThreeDFormatMixed** 给 _PresetThreeDFormat_ 参数会导致错误。



## 示例


```JavaScript
/*本示例将一个椭圆添至活动文档中，然后将其延伸部分的格式设置为第 12 种三维样式。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.AddShape(msoShapeOval, 30, 30, 50, 25).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.SetThreeDFormat(msoThreeD12)
}
```


```JavaScript
/*本示例将所选形状的预设的延伸格式设置为msoThreeD17，并显示是否设置成功。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.SetThreeDFormat(msoThreeD17)
    alert(threeDFormat.PresetThreeDFormat == msoThreeD17)
}
```
