# Range.EntireRow

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示包含指定区域的整行（或多行）。只读。



## 语法

express.**EntireRow**

express   一个代表 **Range** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例对包含活动单元格的行中的第一个单元格赋值。本示例必须在工作表上运行。*/
function test() {
    Application.ActiveCell.EntireRow.Cells.Item(1, 1).Value2 = 5
}
```


```JavaScript
/*本示例将 B2 单元格的值设置为6，并删除 A1 单元格所在的行*/
function test() {
    Range("B2").Value2 = 6
    Range("A1").EntireRow.Delete()
}
```
