# FillFormat.BackColor

返回或设置一个 **ColorFormat** 对象，它代表指定的填充背景色。



## 语法

express.**BackColor**

express   一个代表 **FillFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例在活动工作表中添加一个矩形，然后将矩形填充的背景色设置为蓝色。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.AddShape(msoShapeRectangle, 100, 100, 100, 50).Fill
    fillFormat.BackColor.RGB = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例将第一张工作表中第二个形状的填充背景色的发光度设置为0.7。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(2).Fill
    fillFormat.BackColor.Brightness = 0.7
}
```
