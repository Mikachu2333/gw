# Range.EntireColumn

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示包含指定区域的整列（或多列）。只读。



## 语法

express.**EntireColumn**

express   一个代表 **Range** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例对包含活动单元格的列中的第一个单元格赋值。本示例必须在工作表上运行。*/
function test() {
    Application.ActiveCell.EntireColumn.Cells.Item(1, 1).Value2 = 5
}
```


```JavaScript
/*本示例设置 B2 的值为 b2，将 A1 单元格所在列删除*/
function test() {
    Range("B2").Value2 = 'b2'
    Range("A1").EntireColumn.Delete()
}
```
