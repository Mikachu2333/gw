# Range.CurrentArray

如果指定单元格属于数组，则返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示整个数组。只读。



## 语法

express.**CurrentArray**

express   一个代表 **Range** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*假定工作表 Sheet1 的活动单元格为 A1，且该单元格属于包含单元格区域 A1:A10 的数组，那么本示例将选定工作表 Sheet1 上的单元格区域 A1:A10。*/
function test() {
    ActiveCell.CurrentArray.Select()
}
```


```JavaScript
/*本示例给 A1:C3 单元格设置数组公式，并显示 B2 单元格所包含的数组的整个地址*/
function test() {
    Range("A1:C3").FormulaArray = "=C3"
    alert(Range("B2").CurrentArray.Address())
}
```
