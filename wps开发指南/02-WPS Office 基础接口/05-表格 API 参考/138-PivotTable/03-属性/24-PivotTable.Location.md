# PivotTable.Location

获取或设置一个 **String** 类型的值，该值代表指定 **PivotTable** 主体中左上角的单元格地址。可读/写。



## 语法

express.**Location**

express   一个代表 **PivotTable** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将活动工作表中第一张数据透视表左上角移动到 A1 单元格*/
function test() {
    ActiveSheet.PivotTables(1).Location = "A1"
}
```


```JavaScript
/*本示例将数据透视表左上角移动到 C30 单元格*/
function test() {
    ActiveSheet.PivotTables(1).Location = Range("C30").Address()
}
```
