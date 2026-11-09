# Style.IncludeProtection

如果指定样式中包含 **FormulaHidden** 和 **Locked** 保护属性，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IncludeProtection**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在 Sheet1 的 A1 单元格样式中加入保护格式。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1").Style.IncludeProtection = true
}
```


```JavaScript
/*本示例显示活动工作表中B2单元格样式是否加入保护格式。*/
function test() {
    let range = ActiveSheet.Range("B2")
    alert(range.Style.IncludeProtection)
}
```
