# PivotItem.Formula

返回或设置一个 **String** 值，它代表 A1 样式表示法和宏语言中的对象的公式。



## 语法

express.**Formula**

express   一个代表 **PivotItem** 对象的变量。

## 类型

string

## 说明


此属性对于 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源无效。

如果单元格包含一个常量，此属性返回该常量。如果单元格为空，此属性返回空字符串。如果单元格包含公式， **Formula** 属性将该公式作为字符串返回，所用格式与在编辑栏（包括等号）中显示时的格式相同。

如果将单元格的值或者公式设置为日期类型，则 ET 将检查此单元格的数字格式是否符合日期或者时间格式。如果不符合，ET 将把数字格式设置为默认的短日期格式。

如果指定区域是一维或二维区域，则可将公式指定为 JavaScript 中相同维数的数组。同样，也可在 JavaScript 数组中使用公式。

如果为多单元格区域设置公式，则会用公式填充该区域所有的单元格。



## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上第一张数据透视表的字段“name”中名为“公式2”的数据项的公式。*/
function test() {
    let pvtItem = Worksheets.Item("Sheet1").PivotTables(1).PivotFields("name").PivotItems("公式2")
    alert(pvtItem.Formula)
}
```


```JavaScript
/*本示例设置活动工作表中数据透视表的字段“name”的第九个数据项的公式。*/
function test() {
    let pvtItem = ActiveSheet.Range("I1").PivotTable.PivotFields("name").PivotItems(9)
    pvtItem.Formula = "张三+1"
}
```
