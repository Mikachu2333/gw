# AboveAverage.NumStdDev

返回或设置 **AboveAverage** 对象的数字标准偏差。可读/写 **Long** 类型。



## 语法

express.**NumStdDev**

express   一个代表 **AboveAverage** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表上区域 C1:C10 中第一个（AboveAverage）条件格式的数字标准偏差。*/
function test() {
    let aboveAverage = ActiveSheet.Range("C1:C10").FormatConditions.Item(1)
    alert(aboveAverage.NumStdDev)
}
```


```JavaScript
/*本示例设置区域 C1:C10 中第一个（AboveAverage）条件格式的数字标准偏差。*/
function test() {
    let aboveAverage = Application.Range("C1:C10").FormatConditions.Item(1)
    aboveAverage.NumStdDev = 1
}
```
