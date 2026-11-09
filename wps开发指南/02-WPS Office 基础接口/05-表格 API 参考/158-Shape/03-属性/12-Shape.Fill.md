# Shape.Fill

返回指定形状的 [ **FillFormat** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/obj) 对象或指定图表的 [ **ChartFillFormat** ](#TODO) 对象，这些对象包含形状或图表的填充格式属性。只读。



## 语法

express.**Fill**

express   一个代表 **Shape** 对象的变量。

## 类型

FillFormat

## 示例


```JavaScript
/*本示例在活动工作表中添加一个矩形，然后设置矩形填充的前景色、背景色和渐变。*/
function test() {
    let shape = ActiveSheet.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 50)
    shape.Fill.ForeColor.RGB = RGB(128, 0, 0)
    shape.Fill.BackColor.RGB = RGB(170, 170, 170)
    shape.Fill.TwoColorGradient(msoGradientHorizontal, 1)
}
```


```JavaScript
/*本示例判断如果活动工作表中第二个形状前景色为红色，则前景色设置为蓝色。*/
function test() {
    let shapes = ActiveSheet.Shapes
    if (shapes.Item(2).Fill.ForeColor.RGB == RGB(255, 0, 0)) {
        shapes.Item(2).Fill.ForeColor.RGB = RGB(0, 0, 255)
    }
}
```
