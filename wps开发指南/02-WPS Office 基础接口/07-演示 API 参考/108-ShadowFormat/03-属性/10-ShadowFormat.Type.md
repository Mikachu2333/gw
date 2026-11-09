# ShadowFormat.Type

代表阴影的类型。可读/写。



## 语法

express.**Type**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

MsoShadowType

## 说明


 **Type** 属性的值可以是下列 **MsoShadowType** 常量之一：

| 常量 |
| ------------------ |
| **msoShadow1**     |
| **msoShadow10**    |
| **msoShadow11**    |
| **msoShadow12**    |
| **msoShadow13**    |
| **msoShadow14**    |
| **msoShadow15**    |
| **msoShadow16**    |
| **msoShadow17**    |
| **msoShadow18**    |
| **msoShadow19**    |
| **msoShadow2**     |
| **msoShadow20**    |
| **msoShadow3**     |
| **msoShadow4**     |
| **msoShadow5**     |
| **msoShadow6**     |
| **msoShadow7**     |
| **msoShadow8**     |
| **msoShadow9**     |
| **msoShadowMixed** |



## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片添加一个线条，并设置该线条阴影的样式、大小和前景色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shadowFormat = slide.Shapes.AddLine(10, 90, 200, 0).Shadow
    shadowFormat.Visible = msoTrue
    shadowFormat.Type = msoShadow21
    shadowFormat.Size = 90
    shadowFormat.ForeColor.RGB = RGB(0, 255, 255)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状阴影的类型是否为msoShadow24。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Shadow.Type == msoShadow24)
}
```
