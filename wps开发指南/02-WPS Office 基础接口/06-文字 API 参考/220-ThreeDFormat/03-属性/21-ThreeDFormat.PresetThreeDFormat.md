# ThreeDFormat.PresetThreeDFormat

返回预设延伸格式。 **MsoPresetThreeDFormat** 类型，只读。



## 语法

express.**PresetThreeDFormat**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetThreeDFormat

## 说明


每个预设延伸格式都包含延伸部分各种属性的一组预设值。如果延伸没有使用预设格式而使用了自定义格式，则该属性返回 **msoPresetThreeDFormatMixed** 类型。

可用 **SetThreeDFormat** 方法设置延伸部分的预设格式。



## 示例


```JavaScript
/*本示例判断如果活动文档中第一个形状最初使用自定义的延伸格式，则将该形状的延伸格式设置为三维样式 12。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    if (threeDFormat.PresetThreeDFormat == msoPresetThreeDFormatMixed) {
        threeDFormat.SetThreeDFormat(msoThreeD12)
    }
}
```


```JavaScript
/*本示例将所选形状的延伸格式设置为msoThreeD3，并显示是否设置成功。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.SetThreeDFormat(msoThreeD3)
    alert(threeDFormat.PresetThreeDFormat == msoThreeD3)
}
```
