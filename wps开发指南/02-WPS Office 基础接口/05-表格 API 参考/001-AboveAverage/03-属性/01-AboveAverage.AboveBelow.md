# AboveAverage.AboveBelow

返回或设置 **[XlAboveBelow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlAboveBelow)** 枚举的常量之一，指定条件格式规则是否查找高于或低于区域的平均值或标准偏差的单元格值。



## 语法

express.**AboveBelow**

express   一个代表 **AboveAverage** 对象的变量。

## 类型

XlAboveBelow

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上区域 B1:B10 中第一个（AboveAverage）条件格式的AboveBelow属性是否为xlAboveAverage。*/
function test() {
    let aboveAverage = Application.Worksheets.Item("Sheet1").Range("B1:B10").FormatConditions.Item(1)
    alert(aboveAverage.AboveBelow == xlAboveAverage)
}
```


```JavaScript
/*本示例设置活动工作表上区域 B1:B10 中第一个（AboveAverage）条件格式的AboveBelow属性。*/
function test() {
    let aboveAverage = ActiveSheet.Range("B1:B10").FormatConditions.Item(1)
    aboveAverage.AboveBelow = xlEqualBelowAverage
}
```
