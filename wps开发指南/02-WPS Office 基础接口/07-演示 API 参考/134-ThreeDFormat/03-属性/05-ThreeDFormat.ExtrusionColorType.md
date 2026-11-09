# ThreeDFormat.ExtrusionColorType

返回或设置一个值，该值表明延伸颜色是否基于原形状的填充（延伸区域的正面）并随形状填充的改变而自动更改，或者延伸颜色是否与形状的填充无关。可读/写。



## 语法

express.**ExtrusionColorType**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoExtrusionColorType

## 说明


 **ExtrusionColorType** 属性值可以是下列 **MsoExtrusionColorType** 常量之一：

| 常量                             | 说明              |
| ------------------------------ | --------------- |
| **msoExtrusionColorAutomatic** | 延伸颜色基于图形填充。     |
| **msoExtrusionColorCustom**    | 延伸颜色独立于图形填充。    |
| **msoExtrusionColorTypeMixed** | 延伸颜色部分非独立于图形填充。 |



## 示例


```JavaScript
/*如果活动演示文稿的第一张幻灯片第一个形状有自动延伸颜色，则本示例将延伸设置为自定义的黄色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    if (threeDFormat.ExtrusionColorType == msoExtrusionColorAutomatic) {
        threeDFormat.ExtrusionColor.RGB = RGB(240, 235, 16)
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片中第一个形状的延伸的颜色是否独立于图形填充。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.ExtrusionColorType == msoExtrusionColorCustom)
}
```
