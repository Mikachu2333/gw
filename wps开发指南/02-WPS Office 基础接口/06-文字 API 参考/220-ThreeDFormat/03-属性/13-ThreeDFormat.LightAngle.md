# ThreeDFormat.LightAngle

返回或设置一个 **Single** 类型的值，该值代表照明的角度。可读/写。



## 语法

express.**LightAngle**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示第一个文档上第二个形状照明的角度。*/
function test() {
    let threeDFormat = Documents.Item(1).Shapes.Item(2).ThreeD
    alert(threeDFormat.LightAngle)
}
```


```JavaScript
/*本示例将所选形状照明的角度设置为 100。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.LightAngle = 100
}
```
