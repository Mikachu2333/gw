# Interior.PatternThemeColor

返回或设置 **Interior** 对象的主题颜色图案。可读/写 **Variant** 类型。



## 语法

express.**PatternThemeColor**

express   一个代表 **Interior** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例为活动工作表中 A1:B2 区域单元格添加网格图案，并将图案主题颜色设置为 xlThemeColorAccent1。*/
function test() {
    let interior = ActiveSheet.Range("A1:B2").Interior
    interior.Pattern = xlPatternGrid
    interior.PatternThemeColor = xlThemeColorAccent1
}
```


```JavaScript
/*本示例显示 Sheet1 中 C3 单元格中图案主题颜色是否为 xlThemeColorLight1。*/
function test() {
    let interior = Application.Worksheets.Item("Sheet1").Range("C3").Interior
    alert(interior.PatternThemeColor == xlThemeColorLight1)
}
```
