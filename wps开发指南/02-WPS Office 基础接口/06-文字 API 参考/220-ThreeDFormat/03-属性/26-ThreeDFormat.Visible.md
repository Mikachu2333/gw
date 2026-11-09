# ThreeDFormat.Visible

如果指定对象或应用于该对象的格式是可见的，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。



## 语法

express.**Visible**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoTriState

## 说明


如果 **Visible** 属性为 **msoFalse** ，则某些方法和属性可能无法使用。



## 示例


```JavaScript
/*本示例判断如果活动文档中第一个形状的三维格式可见，则将该形状的照相机预设类型设置为msoCameraObliqueTopRight。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    if (threeDFormat.Visible == msoTrue) {
        threeDFormat.SetPresetCamera(msoCameraObliqueTopRight)
    }
}
```


```JavaScript
/*本示例将所选形状的三维格式设置为不可见。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.Visible = msoFalse
}
```
