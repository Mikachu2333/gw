# WorksheetFunction.NegBinomDist

返回负二项式分布。当成功概率为常量 probability\_s 时，函数 NEGBINOMDIST 返回在到达 number\_s 次成功之前，出现 number\_f 次失败的概率。此函数与二项式分布相似，只是它的成功次数固定，试验总数为变量。与二项式分布类似的是，试验次数被假设为自变量。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [NegBinom\_Dist](#TODO) 方法。



## 语法

express.**NegBinomDist(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | number\_f - 失败的次数。 |
| Arg2 | 必选 | number（double 精度） | number\_s - 成功次数阈值。 |
| Arg3 | 必选 | number（double 精度） | probability\_s - 成功的概率。 |

## 返回值

Double

## 说明


例如，如果要找 10 个反应敏捷的人，且已知具有这种特征的候选人的概率为 0.3。函数 NEGBINOMDIST 将计算出在找到 10 个合格候选人之前，需要对给定数目的不合格候选人进行面试的概率。

* number\_f 和 number\_s 都将被截尾取整。
* 如果任一参数为非数字型，则 NEGBINOMDIST 返回错误值 #VALUE!。
* 如果 probability\_s < 0 或 probability > 1，则 NEGBINOMDIST 返回错误值 #NUM!。
* 如果 number\_f < 0 或 number\_s < 1，函数 NEGBINOMDIST 返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例使用 NegBinomDist 方法计算负二项式分布，并分别赋值给A1和A2单元格。*/
function test() {
    Range("A1").Value2 = WorksheetFunction.NegBinomDist(1, 2, 0.3)
    Range("A2").Value2 = WorksheetFunction.NegBinomDist(30, 50, 0.23)
}
```


```JavaScript
/*本示例为B1等单元格分别赋值，使用 NegBinomDist 方法计算负二项式分布。*/
function test() {
    Range("B1").Value2 = 3
    Range("B2").Value2 = 5
    Range("B3").Value2 = 0.23
    alert(WorksheetFunction.NegBinomDist(Range("B1").Value2, Range("B2").Value2, Range("B3").Value2))
}
```
