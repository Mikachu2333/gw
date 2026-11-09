# WorksheetFunction.Frequency

计算数值在某个区域内的出现频率，然后返回一个垂直数组。例如，使用函数 FREQUENCY 可以在分数区域内计算测验分数的个数。由于函数 FREQUENCY 返回一个数组，所以它必须以数组公式的形式输入。



## 语法

express.**Frequency(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Data\_array - 包含一组值的一个数组或对一组值的引用，您要为其计算频率。如果 data\_array 中不包含任何值，则 FREQUENCY 将返回一个零数组。 |
| Arg2 | 必选 | any | Bins\_array - 一个区间数组或对区间的引用，该区间用于对 data\_array 中的值进行分组。如果 bins\_array 中不包含任何值，则 FREQUENCY 将返回 data\_array 中元素的个数。 |

## 返回值

Variant

## 说明


* 在选择了用于显示返回的分布结果的相邻单元格区域后，FREQUENCY 应以数组公式的形式输入。
* 返回的数组中的元素个数比 bins\_array 中的元素个数多 1 个。返回的数组中多出来的元素返回最高区间之上值的个数。例如，如果要为三个单元格中输入的三个值区域（区间）计数，则请务必在四个单元格中输入 FREQUENCY 以获得计算结果。多出来的单元格将返回 data\_array 中大于第三个区间值的值的个数。
* FREQUENCY 将忽略空白单元格和文本。
* 对于返回结果为数组的公式，必须以数组公式的形式输入。



## 示例


```JavaScript
/*本示例使用 Frequency 方法根据数组arr1、arr2计算数值的出现频率，并将结果赋值给arr。*/
function test() {
    let arr1 = [0, 10, 20, 30, 40]
    let arr2 = [9, 5, 40, 25, 100]
    let arr = WorksheetFunction.Frequency(arr2, arr1)
    alert(arr.toString())
}
```


```JavaScript
/*本示例使用 Frequency 方法根据参数计算出现频率，将返回的垂直数组赋值给D1:D4单元格区域。*/
function test() {
    Range("D1:D4").Value2  = WorksheetFunction.Frequency([-1,22,-9], [12,15,11])
}
```
