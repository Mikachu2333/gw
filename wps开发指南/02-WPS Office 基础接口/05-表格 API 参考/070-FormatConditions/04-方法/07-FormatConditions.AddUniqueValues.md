# FormatConditions.AddUniqueValues

返回一个代表指定区域条件格式规则的新 **UniqueValues** 对象。



## 语法

express.**AddUniqueValues()**

express   一个代表 **FormatConditions** 对象的变量。

## 返回值

Object

## 说明


可以使用 **UniqueValues** 对象快速显现包含唯一值或重复值的单元格。



## 示例


```JavaScript
/*本示例在活动工作表上单元格区域 A1:A10 新增UniqueValues条件格式。*/
function test() {
    let uniqueValues = ActiveSheet.Range("A1:A10").FormatConditions.AddUniqueValues()
    uniqueValues.Font.Bold = true
    uniqueValues.Font.ColorIndex = 3
}
```


```JavaScript
/*本示例在活动工作表上单元格区域 B1:B10 上新增UniqueValues条件格式。*/
function test() {
    let uniqueValues = ActiveSheet.Range("B1:B10").FormatConditions.AddUniqueValues()
    uniqueValues.Interior.Color = RGB(0, 255, 255)
}
```
