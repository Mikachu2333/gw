# QueryTable.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **QueryTable** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例判断如果第一张工作表上第一张查询表的名称为“ExternalData_1”，则删除该查询表。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    if (qyTable.Name == "ExternalData_1") {
        qyTable.Delete()
    }
}
```


```JavaScript
/*此示例删除第一张工作表上第一张查询表，然后显示该工作表上查询表的数量。*/
function test() {
    let qyTables = Application.Worksheets.Item(1).QueryTables
    qyTables.Item(1).Delete()
    alert(qyTables.Count)
}
```
