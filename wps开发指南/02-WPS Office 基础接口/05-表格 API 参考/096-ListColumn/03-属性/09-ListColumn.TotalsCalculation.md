# ListColumn.TotalsCalculation

基于 **XlTotalsCalculation** 枚举的值，确定列表列的“总计”行中的计算类型。可读写。



## 语法

express.**TotalsCalculation**

express   一个代表 **ListColumn** 对象的变量。

## 类型

XlTotalsCalculation

## 说明


| **XlTotalsCalculation** 可为以下 **XlTotalsCalculation** 常量之一。 |
| ---------------------------------------------------------- |
| **xlTotalsCalculationNone**                                |
| **xlTotalsCalculationSum**                                 |
| **xlTotalsCalculationAverage**                             |
| **xlTotalsCalculationCount**                               |
| **xlTotalsCalculationCountNums**                           |
| **xlTotalsCalculationMin**                                 |
| **xlTotalsCalculationStdDev**                              |
| **xlTotalsCalculationVar**                                 |
| **xlTotalsCalculationMax**                                 |

无须显示“总计”行即可设置此属性。此属性没有固定的“默认”值。随着对其他列的添加或删除，ET 会更改该属性的状态。



## 示例


```JavaScript
/*本示例将活动工作表的第一个 ListObject 对象的第一列总计行的计算类型设置为xlTotalsCalculationSum。*/
function test() {
    Application.ActiveSheet.ListObjects.Item(1).ListColumns.Item(1).TotalsCalculation = xlTotalsCalculationSum
}
```


```JavaScript
/*本示例显示第一张工作表的第一个 ListObject 对象中第四列的总计行的计算类型是否为xlTotalsCalculationAverage。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.ListColumns.Item(4).TotalsCalculation == xlTotalsCalculationAverage)
}
```
