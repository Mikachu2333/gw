# ThreeDFormat.BevelBottomType

返回或设置一个代表底部斜面的斜角类型的 **MsoPresetCamera** 常量。可读/写。



## 语法

express.**BevelBottomType**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoBevelType

## 示例


```JavaScript
/*本示例显示活动文档上第一个形状的底部斜面的斜角类型是否为msoCameraLegacyObliqueTopRight。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    alert(threeDFormat.BevelBottomType == msoCameraLegacyObliqueTopRight)
}
```


```JavaScript
/*本示例将所选形状的底部斜面的斜角类型设置为msoCameraLegacyObliqueBottomLeft。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.BevelBottomType = msoCameraLegacyObliqueBottomLeft
}
```
