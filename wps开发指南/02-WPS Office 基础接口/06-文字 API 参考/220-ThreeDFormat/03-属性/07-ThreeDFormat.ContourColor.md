# ThreeDFormat.ContourColor

返回或设置一个代表形状的轮廓线颜色的 **ColorFormat** 对象。可读/写。



## 语法

express.**ContourColor**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例设置活动文档上第二个形状的轮廓线的颜色和颜色亮度。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(2).ThreeD
    threeDFormat.ContourColor.RGB = RGB(255, 0, 0)
    threeDFormat.Brightness = 0.7
}
```


```JavaScript
/*本示例判断如果所选形状的轮廓线的颜色类型为msoColorTypeScheme，则设置该轮廓线的主题颜色。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    if (threeDFormat.ContourColor.Type == msoColorTypeScheme) {
        threeDFormat.ContourColor.ObjectThemeColor = wdThemeColorAccent5
    }
}
```
