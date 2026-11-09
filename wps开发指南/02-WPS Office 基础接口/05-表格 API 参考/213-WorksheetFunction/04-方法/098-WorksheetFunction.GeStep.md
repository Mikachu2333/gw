# WorksheetFunction.GeStep

如果 Number 大于等于 step，返回 1，否则返回 0（零）。使用此函数可对一组值进行筛选。例如，通过计算多个函数 GESTEP 的返回值，可以检测出数据集中超过某个临界值的数据个数。



## 语法

express.**GeStep(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Number - 要依据 step 检验的值。 |
| Arg2 | 可选 | any | Step - 阈值。如果省略 step 的值，则 GESTEP 将使用零。 |

## 返回值

Double

## 说明


如果任一参数为非数值型，则 GESTEP 将返回错误值 #VALUE!。



## 示例


```JavaScript
/*本示例使用 GeStep 方法判断 Number 参数是否大于等于 Step 参数，并分别赋值给B1等单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.GeStep(13, 15)
    Range("B2").Value2 = WorksheetFunction.GeStep(10)
}
```


```JavaScript
/*本示例为C1等单元格分别赋值，使用 GeStep 方法判断C1单元格的值是否大于等于D1单元格的值。*/
function test() {
    Range("C1").Value2 = 45
    Range("D1").Value2 = 36
    alert(WorksheetFunction.GeStep(Range("C1").Value2, Range("D1").Value2))
}
```
