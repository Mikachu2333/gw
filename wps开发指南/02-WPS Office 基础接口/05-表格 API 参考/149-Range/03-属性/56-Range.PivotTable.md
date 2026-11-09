# Range.PivotTable

返回一个 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象，它代表指定区域左上角所在的数据透视表。



## 语法

express.**PivotTable**

express   一个代表 **Range** 对象的变量。

## 类型

PivotTable

## 示例


```JavaScript
/*此示例将 Sheet1 上的数据透视表的当前页设置为名为“Canada”的页。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").Range("C3").PivotTable
    pvtTable.PivotFields("Country").CurrentPage = "Canada"
}
```


```JavaScript
/*本示例显示 C3 单元格所属的数据透视表，并将其清除。*/
function test() {
    alert("C3单元格所属的数据透视表为：" + Range("C3").PivotTable.Name)
    Range("C3").PivotTable.ClearTable()
}
```
