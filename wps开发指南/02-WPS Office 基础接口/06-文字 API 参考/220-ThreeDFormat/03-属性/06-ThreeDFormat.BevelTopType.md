# ThreeDFormat.BevelTopType

返回或设置一个代表顶部斜面的斜角类型的 **MsoPresetCamera** 常量。可读/写。



## 语法

express.**BevelTopType**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoBevelType

## 示例


```JavaScript
/*本示例显示活动文档上第二个形状的顶部斜面的斜角类型是否为msoCameraLegacyObliqueTopLeft。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(2).ThreeD
    alert(threeDFormat.BevelTopType == msoCameraLegacyObliqueTopLeft)
}
```


```JavaScript
/*本示例设置所选形状的底部斜面和顶部斜面的斜角类型。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.BevelBottomType = msoCameraLegacyObliqueLeft
    threeDFormat.BevelTopType = msoCameraLegacyObliqueRight
}
```
