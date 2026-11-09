# ThreeDFormat.RotationZ

返回或设置一个 **Single** 类型的值，该值代表照相机的 z 轴旋转。可读/写。



## 语法

express.**RotationZ**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将所选形状的 RotationZ 属性值设置为50。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.RotationZ = 50
}
```


```JavaScript
/*本示例显示活动文档的第一个形状的 RotationZ 属性值。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    alert(threeDFormat.RotationZ)
}
```
