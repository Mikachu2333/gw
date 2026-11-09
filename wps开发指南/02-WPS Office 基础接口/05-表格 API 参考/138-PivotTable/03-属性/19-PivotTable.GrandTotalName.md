# PivotTable.GrandTotalName

返回或设置显示在指定数据透视表的总计列或行标题中的文本串标志。默认值为字符串“Grand Total”。 **String** 类型，可读写。



## 语法

express.**GrandTotalName**

express   一个代表 **PivotTable** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将活动工作表的第二个数据透视表中总计标题的标志设置为“Regional Total”。*/
function test() {
    Application.ActiveSheet.PivotTables("PivotTable2").GrandTotalName = "Regional Total"
}
```


```JavaScript
/*本示例将第一张工作表中第二张数据透视表的汇总列标题设置为总和，并弹窗显示该属性。*/
function test() {
    Worksheets.Item(1).PivotTables(2).GrandTotalName = "总和"
    alert(Worksheets.Item(1).PivotTables(2).GrandTotalName)
}
```
