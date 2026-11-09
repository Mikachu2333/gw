# ThreeDFormat.ExtrusionColorType

返回或设置一个属性值，该值表明延伸区域的颜色是否基于原图形的填充（延伸区域的正面）色，并随着图形填充色的改变而自动变化，或者延伸区域的颜色是否与图形填充色的无关。 **MsoExtrusionColorType** ，可读写。



## 语法

express.**ExtrusionColorType**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoExtrusionColorType

## 示例


```JavaScript
/*本示例判断如果活动文档中的第一个图形的延伸区域颜色是自动设置的，则将此延伸区域的颜色设置为自定义的黄色。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    if (threeDFormat.ExtrusionColorType == msoExtrusionColorAutomatic) {
        threeDFormat.ExtrusionColor.RGB = RGB(240, 235, 16)
    }
}
```


```JavaScript
/*本示例设置所选形状的延伸颜色独立于图形填充。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.ExtrusionColorType = msoExtrusionColorCustom
}
```
