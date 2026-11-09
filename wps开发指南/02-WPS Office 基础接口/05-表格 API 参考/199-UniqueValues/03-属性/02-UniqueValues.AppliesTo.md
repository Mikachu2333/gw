# UniqueValues.AppliesTo

返回一个 **Range** 对象，指定格式规则将应用于的单元格区域。



## 语法

express.**AppliesTo**

express   一个代表 **UniqueValues** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例选中工作表 Sheet1 上区域 C1:C10 中第一个（UniqueValues）条件格式应用到的单元格区域。*/
function test() {
    let uniqueValues = Application.Worksheets.Item("Sheet1").Range("C1:C10").FormatConditions.Item(1)
    uniqueValues.AppliesTo.Select()
}
```


```JavaScript
/*本示例将活动工作表上区域 C1:C10 中第二个（UniqueValues）条件格式应用到的单元格区域的地址赋值给 A1 单元格。*/
function test() {
    let uniqueValues = ActiveSheet.Range("C1:C10").FormatConditions.Item(2)
    Range("A1").Value2 = uniqueValues.AppliesTo.Address()
}
```
