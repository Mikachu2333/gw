# Interior.PatternColorIndex

返回或设置内部图案的颜色，表示为当前调色板中的颜色编号或下列 **[XlColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlColorIndex)** 常量之一： **xlColorIndexAutomatic** 或 **xlColorIndexNone** 。 **Long** 类型，可读写。



## 语法

express.**PatternColorIndex**

express   一个代表 **Interior** 对象的变量。

## 类型

any

## 说明


将本属性设置为 **xlColorIndexAutomatic** ，表示单元格使用自动图案或图形对象使用自动填充样式。将本属性设置为 **xlColorIndexNone** ，则表示不希望使用图案（等价于将 **Interior** 对象的 **Pattern** 属性设置为 **xlPatternNone** ）。



## 示例


```JavaScript
/*本示例对 Sheet1 中 A1:B2 区域单元格添加棋盘图案，并将图案设置为蓝色。*/
function test() {
    let interior = Worksheets.Item("Sheet1").Range("A1:B2").Interior
    interior.Pattern = xlChecker
    interior.PatternColorIndex = 5
}
```


```JavaScript
/*本示例对活动工作表中 D4 单元格添加网格图案，并将图案颜色设置为自动配色。*/
function test() {
    let interior = ActiveSheet.Range("D4").Interior
    interior.Pattern = xlPatternGrid
    interior.PatternColorIndex = xlColorIndexAutomatic
}
```
