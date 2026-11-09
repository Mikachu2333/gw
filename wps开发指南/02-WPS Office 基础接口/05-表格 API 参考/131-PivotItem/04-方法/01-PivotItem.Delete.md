# PivotItem.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **PivotItem** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动工作表中数据透视表的“name”字段中第九个数据项。*/
function test() {
    ActiveSheet.Range("I1").PivotTable.PivotFields("name").PivotItems(9).Delete()
}
```


```JavaScript
/*本示例删除工作表 Sheet1 中第一张数据透视表的第一个字段中名为“公式2”的数据项。*/
function test() {
    let pvtItem = Worksheets.Item("Sheet1").PivotTables(1).PivotFields(1).PivotItems("公式2")
    pvtItem.Delete()
}
```
