# TextFrame.ThreeD

返回 **ThreeDFormat** 对象，该对象包含指定文本框架的三维效果格式属性。只读。



## 语法

express.**ThreeD**

express   一个代表 **TextFrame** 对象的变量。

## 类型

ThreeDFormat

## 示例


```JavaScript
/*本示例显示活动文档第一个文本框延伸（三维）形状上的光源是否位于该形状的左侧。*/
function test() {
    const textFrame = Application.ActiveDocument.Shapes.Item(1).TextFrame
    alert(textFrame.ThreeD.PresetLightingDirection == msoLightingLeft)
}
```


```JavaScript
/*本示例显示活动文档第一个文本框的（三维）光线的角度。*/
function test() {
    const textFrame = Application.ActiveDocument.Shapes.Item(1).TextFrame
    alert(textFrame.ThreeD.LightAngle)
}
```
