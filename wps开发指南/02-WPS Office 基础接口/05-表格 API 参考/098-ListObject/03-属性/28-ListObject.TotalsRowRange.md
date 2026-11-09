# ListObject.TotalsRowRange

返回一个 **Range** ，代表指定的 **ListObject** 对象的“汇总”行（如果有）。只读。



## 语法

express.**TotalsRowRange**

express   一个代表 **ListObject** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示活动工作簿的 Sheet1 中默认列表的“汇总”行的地址。该代码可在“汇总”行尚未显示的情况下显示该行。*/
function test() {
    let listObj = Application.ActiveWorkbook.Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.ShowTotals = true
    alert(listObj.TotalsRowRange.Address())
}
```


```JavaScript
/*本示例显示活动工作表上包含 A3 单元格的列表的汇总行的值。*/
function test() {
    let listObj = Application.ActiveSheet.Range("A3").ListObject
    alert(listObj.TotalsRowRange.Value2.toString())
}
```
