# PageSetup.PrintTitleRows

返回或设置那些包含在每一页顶部重复出现的单元格的行，用宏语言字符串以 A1 样式表示法表示。 **String** 类型，可读写。



## 语法

express.**PrintTitleRows**

express   一个代表 **PageSetup** 对象的变量。

## 类型

string

## 说明


如果仅指定行的一部分，ET 将把该区域扩展为整个行。

将该属性设置为 **False** 或空字符串 ("")，将会关闭标题行。

该属性仅适用于工作表页面。



## 示例


```JavaScript
/*本示例将第三行定义为标题行，将第一列到第三列定义为标题列。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    Application.ActiveSheet.PageSetup.PrintTitleRows = ActiveSheet.Rows.Item(3).Address()
    Application.ActiveSheet.PageSetup.PrintTitleColumns = ActiveSheet.Columns.Item("A:C").Address()
}
```


```JavaScript
/*本示例显示活动工作表标题行。*/
function test() {
    alert(`活动工作表标题行为 ${ActiveSheet.PageSetup.PrintTitleRows}`)
}
```
