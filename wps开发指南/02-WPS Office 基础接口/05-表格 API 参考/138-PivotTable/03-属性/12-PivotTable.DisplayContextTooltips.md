# PivotTable.DisplayContextTooltips

控制是否显示数据透视表单元格的工具提示。可读写 **Boolean** 。



## 语法

express.**DisplayContextTooltips**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 说明


如果 **DisplayContextTooltips** 设置为 **False** ，将不显示数据透视表单元格的上下文工具提示。如果此属性设置为 **True** ，将显示行、列和数据区中数据透视表单元格的工具提示。



## 示例


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的上下文工具提示*/
function test() {
    ActiveSheet.PivotTables(1).DisplayContextTooltips = true
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中的第一张数据透视表 DisplayContextTooltips 属性的数据类型，并将其设置为false*/
function test() {
    alert(typeof Worksheets.Item("Sheet1").PivotTables(1).DisplayContextTooltips)
    Worksheets.Item("Sheet1").PivotTables(1).DisplayContextTooltips = false
}
```
