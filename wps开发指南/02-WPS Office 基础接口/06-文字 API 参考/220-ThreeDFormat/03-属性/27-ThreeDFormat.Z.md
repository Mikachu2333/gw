# ThreeDFormat.Z

返回或设置一个 **Single** 类型的值，该值代表形状的 z 轴。可读/写。



## 语法

express.**Z**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档的第一个形状三维格式中的 Z 属性值。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    alert(threeDFormat.Z)
}
```


```JavaScript
/*本示例设置所选形状三维格式中的 Z 属性值，并将该形状延伸方向指定为形状的上方。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.Z = 100
    threeDFormat.SetExtrusionDirection(msoExtrusionTop)
}
```
