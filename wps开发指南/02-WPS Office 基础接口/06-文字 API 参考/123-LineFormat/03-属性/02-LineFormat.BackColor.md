# LineFormat.BackColor

返回或设置一个 **ColorFormat** 对象，该对象代表图案线条的背景色。可读写。



## 语法

express.**BackColor**

express   一个代表 **LineFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例为活动文档添加一条带图案线条。*/
function test() {
    let lineFormat = Application.ActiveDocument.Shapes.AddLine(100, 100, 300, 0).Line
    lineFormat.Weight = 6
    lineFormat.Pattern = msoPatternDarkDownwardDiagonal
    lineFormat.BackColor.RGB = RGB(128, 0, 0)
    lineFormat.ForeColor.RGB = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例设置活动文档上第一个线条形状的图案和粗细，然后设置该线条的背景颜色和颜色的亮度。*/
function test() {
    let lineFormat = Application.ActiveDocument.Shapes.Item(1).Line
    lineFormat.Pattern = msoPatternDashedUpwardDiagonal
    lineFormat.Weight = 3
    lineFormat.BackColor.TintAndShade = 0.3
    lineFormat.BackColor.RGB = RGB(128, 128, 0)
}
```
