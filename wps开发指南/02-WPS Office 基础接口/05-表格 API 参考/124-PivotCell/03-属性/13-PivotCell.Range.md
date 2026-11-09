# PivotCell.Range

返回一个 **Range** 对象，它代表指定的 PivotCell 所应用的区域。



## 语法

express.**Range**

express   一个代表 **PivotCell** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例将包含“Sheet1”工作表单元格的数据透视项的地址保存在变量中并显示。*/
function test() {
    let address = Worksheets.Item("Sheet1").Range("I5").PivotCell.Range.Address()
    alert(address)
}
```


```JavaScript
/*此示例滚动工作表窗口，直至包含活动单元格的数据透视项区域位于活动窗口的左上角。*/
function test() {
    Worksheets.Item(1).Activate()
    let range = ActiveCell.PivotCell.Range
    ActiveWindow.ScrollRow = range.Row
    ActiveWindow.ScrollColumn = range.Column
}
```
