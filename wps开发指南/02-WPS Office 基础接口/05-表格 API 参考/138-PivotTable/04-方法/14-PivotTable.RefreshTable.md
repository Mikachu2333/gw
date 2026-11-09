# PivotTable.RefreshTable

用源数据刷新数据透视表。如果成功，则返回 **True** 。



## 语法

express.**RefreshTable()**

express   一个代表 **PivotTable** 对象的变量。

## 返回值

Boolean

## 示例


```JavaScript
/*本示例刷新数据透视表。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").Range("F4").PivotTable
    pvtTable.RefreshTable()
}
```


```JavaScript
/*本示例刷新活动工作表中每一张数据透视表，并显示是否成功*/
function test() {
    for (let i = 1; i <= ActiveSheet.PivotTables().Count; i++) {
        if (ActiveSheet.PivotTables(i).RefreshTable()) {
            alert(`第${i}张数据透视表刷新成功`)
        }
    }
}
```
