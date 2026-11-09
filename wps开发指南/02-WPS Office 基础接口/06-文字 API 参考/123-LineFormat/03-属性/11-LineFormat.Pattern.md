# LineFormat.Pattern

设置或返回代表应用于指定线条的图案的值。可读写 **MsoPatternType** 类型。



## 语法

express.**Pattern**

express   一个代表 **LineFormat** 对象的变量。

## 类型

MsoPatternType

## 示例


```JavaScript
/*本示例在活动文档上创建一条带图案的线条。*/
function test() {
    let lineFormat = Application.ActiveDocument.Shapes.AddLine(10, 100, 250, 0).Line
    lineFormat.Pattern = msoPatternDarkDownwardDiagonal
    lineFormat.Weight = 6
    lineFormat.ForeColor.RGB = RGB(0, 0, 255)
    lineFormat.BackColor.RGB = RGB(128, 0, 0)
}
```


```JavaScript
/*本示例设置活动文档上第一个线条形状的图案和粗细。*/
function test() {
    let lineFormat = Application.ActiveDocument.Shapes.Item(1).Line
    lineFormat.Pattern = msoPatternDashedUpwardDiagonal
    lineFormat.Weight = 3
}
```
