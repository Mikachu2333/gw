# ThreeDFormat.Perspective

如果以透视效果显示延伸，即延伸部分的外壁向消失点收敛，则该属性值为 **msoTrue** 。如果延伸采用平行、正交或投影方式，即外壁不向消失点收敛，则该属性值为 **msoFalse** 。 **MsoTriState** 类型，可读写。



## 语法

express.**Perspective**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例将活动文档上第一个形状的延伸深度设置为 100 磅，然后指定延伸方式为平行或正交投影。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.Depth = 100
    threeDFormat.Perspective = msoFalse
}
```


```JavaScript
/*本示例设置所选形状以透视效果显示延伸。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.Perspective = msoTrue
}
```
