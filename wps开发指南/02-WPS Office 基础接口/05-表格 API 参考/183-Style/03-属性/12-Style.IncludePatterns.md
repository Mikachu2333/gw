# Style.IncludePatterns

如果指定样式中包含 **Color** 、 **ColorIndex** 、 **InvertIfNegative** 、 **Pattern** 、 **PatternColor** 和 **PatternColorIndex** 对象的内部属性，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IncludePatterns**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在 Sheet1 的 A1 单元格样式中加入图案格式。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1").Style.IncludePatterns = true
}
```


```JavaScript
/*本示例显示活动工作表中C3单元格样式是否加入图案格式。*/
function test() {
    let range = ActiveSheet.Range("C3")
    alert(range.Style.IncludePatterns)
}
```
