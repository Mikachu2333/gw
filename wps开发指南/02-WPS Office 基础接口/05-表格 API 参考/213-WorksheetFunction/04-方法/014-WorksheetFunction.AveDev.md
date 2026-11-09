# WorksheetFunction.AveDev

返回多个数据点与其平均值的绝对偏差的平均值。AveDev 是对数据集中可变性的度量。



## 语法

express.**AveDev(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 必选 | any | 要计算其绝对偏差平均值的 1 到 30 个参数。也可以不使用这种用逗号分隔参数的形式，而使用一个数组或一个对数组的引用。 |

## 返回值

Double

## 说明


* AveDev 受输入数据中的度量单位的影响。
* 参数要么是数字，要么是包含数字的名称、数组或引用。
* 直接键入参数列表的逻辑值和数字的文本表示也包括在内。
* 如果数组或引用参数包含文本、逻辑值或空单元格，则这些值将被忽略；但含有零值的单元格包括在内。
* 平均偏差的计算公式为：



## 示例


```JavaScript
/*本示例使用AveDev方法计算多个数据点与其平均值的绝对偏差的平均值，并将结果赋值于A5等单元格。*/
function test() {
    Range("A5").Value2 = Application.WorksheetFunction.AveDev(14, 37, 54, -20, 13)
    Range("B5").Value2 = Application.WorksheetFunction.AveDev(1, 3.5, 7.8, 9)
    Range("C5").Value2 = Application.WorksheetFunction.AveDev(2, 4, 6, 8.88, 10.1, 12.2, 14, 16)
}
```


```JavaScript
/*本示例为E3等单元格分别赋值，并使用AveDev方法计算多个数据点与其平均值的绝对偏差的平均值。*/
function test() {
    Range("E3").Value2 = 5
    Range("E4").Value2 = 25
    Range("E5").Value2 = -14.9
    Range("E6").Value2 = 43
    let avedev1 = Application.WorksheetFunction.AveDev(Range("E3:E6").Value2)
    alert(avedev1)
}
```
