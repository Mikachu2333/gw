# LineFormat.EndArrowheadLength

返回或设置指定线条末端箭头的长度。可读/写 **MsoArrowheadLength** 类型。



## 语法

express.**EndArrowheadLength**

express   一个代表 **LineFormat** 对象的变量。

## 类型

MsoArrowheadLength

## 说明


 **EndArrowheadLength** 属性的值可以是下列 **MsoArrowheadLength** 常量之一：

| 常量 |
| ------------------------------------------------- |
| **msoArrowheadLengthMedium**                          |
| **msoArrowheadLengthMixed**                           |
| **msoArrowheadLong**                                  |
| **msoArrowheadShort**                                 |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一条线。在该线条的起点处有一个短而窄的椭圆，在线条的终点处有一个长而宽的三角形。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let lineFormat = slide.Shapes.AddLine(100, 100, 200, 300).Line
    lineFormat.BeginArrowheadLength = msoArrowheadShort
    lineFormat.BeginArrowheadStyle = msoArrowheadOval
    lineFormat.BeginArrowheadWidth = msoArrowheadNarrow
    lineFormat.EndArrowheadLength = msoArrowheadLong
    lineFormat.EndArrowheadStyle = msoArrowheadTriangle
    lineFormat.EndArrowheadWidth = msoArrowheadWide
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个线条末端的箭头长度是否为msoArrowheadLengthMedium。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Line.EndArrowheadLength == msoArrowheadLengthMedium)
}
```
