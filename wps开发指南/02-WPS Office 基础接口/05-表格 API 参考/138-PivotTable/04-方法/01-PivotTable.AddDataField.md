# PivotTable.AddDataField

将数据字段添加到数据透视表中。返回一个 **PivotField** 对象，该对象表示新的数据字段。



## 语法

express.**AddDataField(Field, Caption, Function)**

express   一个代表 **PivotTable** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Field | 必选 | Object | 服务器上的唯一字段。如果源数据是联机分析处理 (OLAP)（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。），则唯一字段是多维数据集字段。如果源数据不是 OLAP（非 OLAP 源数据（非 OLAP 源数据：非 OLAP 源数据是数据透视表或数据透视图使用的基本数据，该数据来自 OLAP 数据库之外的源。这些数据源包括关系数据库、 ET 工作表中的清单以及文本文件数据库。）），则唯一字段是数据透视表字段。 |
| Caption | 可选 | any | 数据透视表中使用的标签，用于识别该数据字段。 |
| Function | 可选 | any | 在已添加数据字段中执行的函数。 |

## 返回值

PivotField

## 示例


```JavaScript
/*本示例将标题为“Total Score”的数据字段添加到名为“PivotTable1”的数据透视表中，假定存在包含一个标题为“Score”列的表格。*/
function test() {
    let pTab = ActiveSheet.PivotTables("PivotTable1")
    pTab.AddDataField(ActiveSheet.PivotTables("PivotTable1").PivotFields("Score"), "Total Score")
}
```


```JavaScript
/*本示例为工作表中第一张数据透视表添加 y 数据字段计数项，假定存在包含一个标题为“y”列的表格。*/
function test() {
    let pTab = ActiveSheet.PivotTables(1)
    pTab.AddDataField(pTab.PivotFields("y"), undefined, xlCount)
}
```
