# PageSetup.PrintTitleColumns

返回或设置包含在每一页的左边重复出现的单元格的列，用宏语言 A1-样式中的字符串表示。 **String** 类型，可读写。



## 语法

express.**PrintTitleColumns**

express   一个代表 **PageSetup** 对象的变量。

## 类型

string

## 说明


如果仅指定列的一部分，ET 将自动把该区域扩展为整个列。

将该属性设置为 **False** 或空字符串 ("")，将会关闭标题列。

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
/*本示例显示活动工作表标题列。*/
function test() {
    alert(`活动工作表标题列为 ${ActiveSheet.PageSetup.PrintTitleColumns}`)
}
```
