# Style.IncludeNumber

如果样式中包含 **NumberFormat** 属性，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IncludeNumber**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在 Sheet1 的 A1 单元格样式中加入数字格式。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1").Style.IncludeNumber = true
}
```


```JavaScript
/*本示例显示活动工作表中D2单元格样式是否加入数字格式。*/
function test() {
    let range = ActiveSheet.Range("D2")
    alert(range.Style.IncludeNumber)
}
```
