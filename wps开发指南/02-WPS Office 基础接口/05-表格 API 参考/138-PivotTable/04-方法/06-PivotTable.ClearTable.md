# PivotTable.ClearTable

 **ClearTable** 方法用于清除数据透视表。清除数据透视表包括删除所有字段以及删除应用于数据透视表的所有筛选和排序。此方法将数据透视表重置为该表刚创建而尚未添加任何字段时的状态。



## 语法

express.**ClearTable()**

express   一个代表 **PivotTable** 对象的变量。

## 返回值

void

## 说明


 **ClearTable** 函数不使用任何参数，可用于关系数据透视表和 OLAP 数据透视表。



## 示例


```JavaScript
/*以下示例清除活动工作表中的数据透视表。*/
function test() {
    ActiveSheet.PivotTables(1).ClearTable()
}
```


```JavaScript
/*本示例删除活动工作表中所有的数据透视表*/
function test() {
    for (let i = 1; i <= ActiveSheet.PivotTables().Count; i++) {
        ActiveSheet.PivotTables(i).ClearTable()
    }
}
```
