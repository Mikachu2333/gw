# ThreeDFormat.FieldOfView

返回或设置一个 **Single** 类型的值，该值代表形状的透视度。可读/写。



## 语法

express.**FieldOfView**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第二个形状的透明度。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(2).ThreeD
    alert(threeDFormat.FieldOfView)
}
```


```JavaScript
/*本示例设置所选形状的透视度。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.FieldOfView = 0.5
}
```
