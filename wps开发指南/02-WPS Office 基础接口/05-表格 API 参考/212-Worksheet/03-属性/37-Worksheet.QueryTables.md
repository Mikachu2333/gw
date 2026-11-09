# Worksheet.QueryTables

返回 **[QueryTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTables/obj)** 集合，该集合表示指定工作表上的所有查询表。只读。



## 语法

express.**QueryTables**

express   一个代表 **Worksheet** 对象的变量。

## 类型

QueryTables

## 示例


```JavaScript
/*本示例刷新第一张工作表上的所有查询表。*/
function test() {
    let queryTables = Worksheets.Item(1).QueryTables
    for (let i = 1; i <= queryTables.Count; i++) {
        queryTables.Item(i).Refresh()
    }
}
```


```JavaScript
/*本示例对第一张查询表进行设置，每当查询表刷新时就自动更新右侧的公式。*/
function test() {
    Sheets.Item("Sheet1").QueryTables(1).FillAdjacentFormulas = true
}
```
