# GradientStop.Color

获取一个代表渐变光圈的颜色的值。只读。



## 语法

express.**Color**

express   一个代表 **GradientStop** 对象的变量。

## 类型

ColorFormat

## 说明


渐变是指从一种颜色状态到另一种颜色状态的平缓过渡。这些部分的端点称为光圈。



## 示例


```JavaScript
/*本示例运行于表格组件，设置活动工作表的第一个形状渐变填充的第一个渐变光圈的颜色。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(1).Fill
    fillFormat.GradientStops.Item(1).Color.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例运行于表格组件，设置第一个工作表的第二个形状渐变填充的第一个渐变光圈的主题颜色和亮度。*/
function test() {
    let fillFormat = Worksheets.Item(1).Shapes.Item(2).Fill
    let colorFormat = fillFormat.GradientStops.Item(1).Color
    colorFormat.ObjectThemeColor = msoThemeColorAccent5
    colorFormat.Brightness = 0.3
}
```
