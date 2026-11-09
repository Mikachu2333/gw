# PivotField.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **PivotField** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动工作表中第一个数据透视表的字段“学号”。*/
function test() {
    ActiveSheet.PivotTables(1).PivotFields("学号").Delete()
}
```


```JavaScript
/*本示例删除工作表 Sheet1 中第一个数据透视表的字段“期中成绩”。*/
function test() {
    let pvtField = Worksheets.Item("Sheet1").PivotTables(1).PivotFields("期中成绩")
    pvtField.Delete()
}
```
