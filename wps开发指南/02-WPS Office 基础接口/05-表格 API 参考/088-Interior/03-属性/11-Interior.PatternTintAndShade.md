# Interior.PatternTintAndShade

返回或设置 **Interior** 对象的淡色和底纹图案。可读/写 **Variant** 类型。



## 语法

express.**PatternTintAndShade**

express   一个代表 **Interior** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例对 Sheet1 中 A1:E4 区域单元格添加十字线图案，并将图案主题颜色设置为40%深色 xlThemeColorAccent4。*/
function test() {
    let interior = Application.Worksheets.Item("Sheet1").Range("A1:E4").Interior
    interior.Pattern = xlPatternCrissCross
    interior.PatternThemeColor = xlThemeColorAccent4
    interior.PatternTintAndShade = -0.4
}
```


```JavaScript
/*本示例对活动工作表中 B3:C4 区域单元格添加棋盘图案，并将图案主题颜色设置为60%浅色 xlThemeColorAccent2*/
function test() {
    let interior = ActiveSheet.Range("B3:C4").Interior
    interior.Pattern = xlPatternChecker
    interior.PatternThemeColor = xlThemeColorAccent2
    interior.PatternTintAndShade = 0.6
}
```
