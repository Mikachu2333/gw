# FormatConditions.AddAboveAverage

返回一个代表指定区域条件格式规则的新 **AboveAverage** 对象。返回一个 **AboveAverage** 对象。



## 语法

express.**AddAboveAverage()**

express   一个代表 **FormatConditions** 对象的变量。

## 返回值

Object

## 说明


 **AboveAverage** 对象用于查找单元格区域中高于或低于平均或标准偏差的值。例如，可在年度业绩评估中查找高于平均业绩的人员，或者在质量评估中查找低于两个标准偏差的加工原料。



## 示例


```JavaScript
/*本示例在活动工作表上单元格区域 C1:C10 上新增AboveAverage条件格式，并设置该条件格式的字体样式。*/
function test() {
    let aboveAverage = ActiveSheet.Range("C1:C10").FormatConditions.AddAboveAverage()
    aboveAverage.Font.Bold = true
    aboveAverage.Font.Italic = true
}
```


```JavaScript
/*本示例在活动工作表上单元格区域 A1:A10 上新增AboveAverage条件格式，并设置该条件格式的数字格式。*/
function test() {
    let aboveAverage = ActiveSheet.Range("A1:A10").FormatConditions.AddAboveAverage()
    aboveAverage.NumberFormat = "0.00%"
}
```
