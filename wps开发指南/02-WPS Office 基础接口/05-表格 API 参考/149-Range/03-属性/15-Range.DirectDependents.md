# Range.DirectDependents

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示包含一个单元格的所有直接从属单元格的区域。如果有多个从属单元格，这可能有多个选择（多个 **Range** 对象）。 **Range** 类型，只读。



## 语法

express.**DirectDependents**

express   一个代表 **Range** 对象的变量。

## 类型

Range

## 说明


 **Direct Dependents** 属性仅在活动工作表中有效，不能追踪远程引用。



## 示例


```JavaScript
/*本示例选定工作表 sheet1 中单元格 A1 的直接从属单元格。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    Range("A1").DirectDependents.Select()
}
```


```JavaScript
/*本示例将 B5 单元格的公式设置为 =SUM(D1:D3)，B9 单元格的公式设置为 =SUM(D3:D5)，显示 D3 单元格的直接从属单元格的地址*/
function test() {
    Range("B5").Formula = '=SUM(D1:D3)'
    Range("B9").Formula = '=SUM(D3:D5)'
    alert(Range("D3").DirectDependents.Address())
}
```
