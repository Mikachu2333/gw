# Range.DirectPrecedents

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示包含一个单元格的所有直接引用单元格的区域。如果有多个引用单元格，这可能有多个选择（多个 **Range** 对象）。 **Range** 对象，只读。



## 语法

express.**DirectPrecedents**

express   一个代表 **Range** 对象的变量。

## 类型

Range

## 说明


 **DirectPrecedents** 属性仅在活动工作表中有效，不能追踪远程引用。



## 示例


```JavaScript
/*本示例选定工作表 sheet1 中单元格 A1 的直接引用单元格。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    Range("A1").DirectPrecedents.Select()
}
```


```JavaScript
/*本示例在 A2 单元格设置公式 =AVERAGE(C2:C5)，并显示 A2 单元格的直接引用单元格地址*/
function test() {
    Range("A2").Formula = "=AVERAGE(C2:C5)"
    alert(Range("A2").DirectPrecedents.Address())
}
```
