# Worksheet.PivotTables

返回一个对象，该对象表示工作表上的单个数据透视表（ **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象）或所有数据透视表的集合（ **[PivotTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTables/obj)** 对象）。只读。



## 语法

express.**PivotTables(Index)**

express   一个代表 **Worksheet** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 报表的名称或编号。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例将活动工作表中第一张数据透视表的字段“最大值项:grades”汇总时使用的函数设置为“xlSum”。*/
function test() {
    let pvtField = ActiveSheet.PivotTables(1).PivotFields("最大值项:grades")
    pvtField.Function = xlSum
}
```


```JavaScript
/*本示例向工作表 Sheet1 中添加数据透视表数据字段的名称列表。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").PivotTables(1)
    for (let i = 1; i <= pvtTable.DataFields().Count; i++) {
        Worksheets.Item("Sheet1").Cells.Item(i, 6).Value2 = pvtTable.DataFields(i).Name
    }
}
```
