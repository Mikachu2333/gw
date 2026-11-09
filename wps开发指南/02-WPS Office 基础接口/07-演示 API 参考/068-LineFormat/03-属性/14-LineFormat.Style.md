# LineFormat.Style

返回或设置线条样式。可读/写 **MsoLineStyle** 类型。



## 语法

express.**Style**

express   一个代表 **LineFormat** 对象的变量。

## 类型

MsoLineStyle

## 说明


 **Style** 属性的值可以是下列 **MsoLineStyle** 常量之一：

| 常量 |
| ------------------------------------- |
| **msoLineSingle**                         |
| **msoLineStyleMixed**                     |
| **msoLineThickBetweenThin**               |
| **msoLineThickThin**                      |
| **msoLineThinThick**                      |
| **msoLineThinThin**                       |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加粗的蓝色复合线。该复合线由一根粗线及其两侧的各一细线组成。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let lineFormat = slide.Shapes.AddLine(10, 10, 250, 250).Line
    lineFormat.Style = msoLineThickBetweenThin
    lineFormat.Weight = 8
    lineFormat.ForeColor.RGB = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个线条样式是否为msoLineSingle。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Line.Style == msoLineSingle)
}
```
