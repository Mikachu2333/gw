# LineFormat.ForeColor

返回或设置一个 **ColorFormat** 对象，该对象代表线条的前景色。可读写。



## 语法

express.**ForeColor**

express   一个代表 **LineFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例为活动文档添加一条带图案线条。*/
function test() {
    let lineFormat = Application.ActiveDocument.Shapes.AddLine(10, 100, 300, 0).Line
    lineFormat.Weight = 6
    lineFormat.Pattern = msoPatternDarkDownwardDiagonal
    lineFormat.BackColor.RGB = RGB(128, 0, 0)
    lineFormat.ForeColor.RGB = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例设置活动文档上第一个线条形状的前景颜色和颜色的亮度。*/
function test() {
    let lineFormat = Application.ActiveDocument.Shapes.Item(1).Line
    lineFormat.ForeColor.TintAndShade = 0.3
    lineFormat.ForeColor.RGB = RGB(255, 0, 0)
}
```
