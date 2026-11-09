# ThreeDFormat.ContourWidth

返回或设置一个 **Single** 类型的值，该值代表形状的轮廓线宽度。可读/写。



## 语法

express.**ContourWidth**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个形状的轮廓线的宽度。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    alert(threeDFormat.ContourWidth + " 磅")
}
```


```JavaScript
/*本示例设置所选形状的轮廓线的颜色和宽度。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.ContourColor.RGB = RGB(0, 255, 255)
    threeDFormat.ContourWidth = 8
}
```
