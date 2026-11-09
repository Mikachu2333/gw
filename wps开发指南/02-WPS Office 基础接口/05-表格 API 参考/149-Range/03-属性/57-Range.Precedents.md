# Range.Precedents

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示单元格的所有引用单元格。如果有多个引用单元格，则可以是一个多重选择（ **Range** 对象的并集）。只读。



## 语法

express.**Precedents**

express   一个代表 **Range** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例选定 sheet1 中单元格 A1 的引用单元格。*/
function test() {
    Worksheets.Item("Sheet1").Range("A1").Precedents.Select()
}
```


```JavaScript
/*本示例将 C3 单元格的公式设置为 =SUM(E3:G5)，显示 C3 单元格引用区域的地址*/
function test() {
    Range("C3").Formula = "=SUM(E3:G5)"
    alert(Range("C3").Precedents.Address())
}
```
