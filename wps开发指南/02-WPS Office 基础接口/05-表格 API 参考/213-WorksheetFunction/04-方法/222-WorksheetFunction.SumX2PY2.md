# WorksheetFunction.SumX2PY2

返回两数组中对应数值的平方和之和，平方和之和在统计计算中经常使用。



## 语法

express.**SumX2PY2(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Array\_x - 第一个数值数组或区域。 |
| Arg2 | 必选 | any | Array\_y - 第二个数值数组或区域。 |

## 返回值

Double

## 说明


* 参数应为数字，或者是包含数字的名称、数组或引用。
* 如果数组或引用参数包含文本、逻辑值或空单元格，则这些值将被忽略；但含有零值的单元格包括在内。
* 如果 array\_x 和 array\_y 中值的数目不同，则 SUMX2PY2 将返回错误值 #N/A。



## 示例


```JavaScript
/*本示例使用 SumX2PY2 方法计算两个数组中相应值的平方和之和，并赋值给C1单元格。*/
function test() {
    let arr1 = [10, 20, 30.2]
    let arr2 = [10.3, -3.2, 6.2]
    Range("C1").Value2 = WorksheetFunction.SumX2PY2(arr1, arr2)
}
```


```JavaScript
/*本示例为D1等单元格分别赋值，使用 SumX2PY2 方法计算两个数组中相应值的平方和之和。*/
function test() {
    Range("D1").Value2 = 23.3
    Range("D2").Value2 = 20.03
    Range("D3").Value2 = 20.6
    Range("D4").Value2 = 21
    Range("E1").Value2 = -5
    Range("E2").Value2 = 2
    Range("E3").Value2 = 6
    Range("E4").Value2 = 3
    alert(WorksheetFunction.SumX2PY2(Range("D1:D4"), Range("E1:E4")))
}
```
