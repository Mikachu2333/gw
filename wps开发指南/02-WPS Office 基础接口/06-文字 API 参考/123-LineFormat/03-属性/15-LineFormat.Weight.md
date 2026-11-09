# LineFormat.Weight

返回或设置指定线条的粗细（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**Weight**

express   一个代表 **LineFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例在活动文档上新建一条直线，并设置该直线的虚线样式、前景填充色和线条粗细。*/
function test() {
    let lineFormat = ActiveDocument.Shapes.AddLine(10, 10, 260, 260).Line
    lineFormat.DashStyle = msoLineDashDotDot
    lineFormat.ForeColor.RGB = RGB(0, 255, 255)
    lineFormat.Weight = 2
}
```


```JavaScript
/*本示例将活动文档上第一个形状的边框线条的前景填充色设置为半透明的红色，然后设置该边框线条的粗细。*/
function test() {
    let lineFormat = ActiveDocument.Shapes.Item(1).Line
    lineFormat.ForeColor.RGB = RGB(255, 0, 0)
    lineFormat.Transparency = 0.5
    lineFormat.Weight = 3
}
```
