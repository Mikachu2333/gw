# ThreeDFormat.BevelTopInset

返回或设置一个 **Single** 类型的值，该值代表顶部斜面的内边距大小。可读/写。



## 语法

express.**BevelTopInset**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个形状的顶部斜面的内边距大小。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    alert(threeDFormat.BevelTopInset)
}
```


```JavaScript
/*本示例设置所选形状的顶部斜面和底部斜面的内边距大小。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.BevelBottomInset = 12
    threeDFormat.BevelTopInset = 12
}
```
