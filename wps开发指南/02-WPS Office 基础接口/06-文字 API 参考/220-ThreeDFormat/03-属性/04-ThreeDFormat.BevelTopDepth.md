# ThreeDFormat.BevelTopDepth

返回或设置一个 **Single** 类型的值，该值代表顶部斜面的深度。可读/写。



## 语法

express.**BevelTopDepth**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个形状的顶部斜面的深度。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    alert(threeDFormat.BevelTopDepth)
}
```


```JavaScript
/*本示例设置所选形状的顶部斜面和底部斜面的深度。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.BevelTopDepth = 15
    threeDFormat.BevelBottomDepth = 15
}
```
