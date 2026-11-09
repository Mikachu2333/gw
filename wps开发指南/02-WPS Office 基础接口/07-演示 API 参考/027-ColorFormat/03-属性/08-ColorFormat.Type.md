# ColorFormat.Type

返回一个 **MsoColorType** 常量，该常量代表颜色的类型。只读。



## 语法

express.**Type**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

MsoColorType

## 说明


 **Type** 属性的值可以是下列 **MsoColorType** 常量之一：

| 常量 |
| ------------------------------------- |
| **msoColorTypeCMS**                       |
| **msoColorTypeCMYK**                      |
| **msoColorTypeInk**                       |
| **msoColorTypeMixed**                     |
| **msoColorTypeRGB**                       |
| **msoColorTypeScheme**                    |



## 示例


```JavaScript
/*本示例判断如果活动演示文稿第一张幻灯片上第一个形状的背景色类型为msoColorTypeScheme，则将背景色设置为红色。*/
function test() {
    let colorFormat = ActivePresentation.Slides.Item(1).Shapes.Item(1).Fill.ForeColor
    if (colorFormat.Type == msoColorTypeScheme) {
        colorFormat.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片中第二个形状阴影格式的前景色类型是否为msoColorTypeRGB。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(2)
    let colorFormat = shape.Shadow.ForeColor
    alert(colorFormat.Type == msoColorTypeRGB)
}
```
