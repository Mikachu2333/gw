# WorksheetFunction.Confidence

返回一个值，可使用该值构造总体平均值的置信区间。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 WPS表格 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [Confidence\_Norm](#TODO) 和 [Confidence\_T](#TODO) 方法。



## 语法

express.**Confidence(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | 用于计算置信度的显著性水平。置信度等于 100\*(1 - alpha)%，亦即，如果 alpha 为 0.05，则置信度为 95%。 |
| Arg2 | 必选 | number（double 精度） | 数据区域的总体标准偏差，假定为已知。 |
| Arg3 | 必选 | number（double 精度） | 样本大小。 |

## 返回值

Double

## 说明


 置信区间为一个值区域。样本平均值 x 位于此区域的中心，区域范围为 x ± Confidence。例如，如果通过邮件订购产品，其交付时间的样本平均值为 x，则总体平均值的区域范围为 x ± Confidence。对于任何包含在此区域中的总体平均值 μ0，从 μ0 到 x，获取样本平均值的概率大于 alpha；对于任何未在此区域中的总体平均值 μ0，从 μ0 到 x，获取样本平均值的概率小于 alpha。换句话说，假设使用 x、standard\_dev 和 size 构造一个双尾检验，假设的显著性水平为 alpha，总体平均值为 μ0。如果 μ0 在置信区间中，则将不会否决该假设；如果 μ0 不在置信区间中，则将否决该假设。置信区间不允许进行概率为 1 - alpha 的推断，此时下一份包裹的交付时间将肯定位于置信区间内。

* 如果任一参数为非数值型，则 Confidence 将生成一个错误。
* 如果 alpha ≤ 0 或 alpha ≥ 1，则 Confidence 将生成一个错误。
* 如果 standard\_dev ≤ 0，则 Confidence 将生成一个错误。
* 如果 size 不是整数，则将被截尾取整。
* 如果 size < 1，则 Confidence 将生成一个错误。



## 示例


```JavaScript
/*本示例使用Confidence方法计算总体平均值的置信区间，并将结果赋值于C3等单元格。*/
function test() {
    Range("C3").Value2 = Application.WorksheetFunction.Confidence(0.05, 2.5, 50)
    Range("C4").Value2 = Application.WorksheetFunction.Confidence(0.4, 3, 60)
    Range("C5").Value2 = Application.WorksheetFunction.Confidence(0.001, 1.5, 40)
}
```


```JavaScript
/*本示例为D2等单元格分别赋值，并使用Confidence方法计算总体平均值的置信区间。*/
function test() {
    Range("D2").Value2 = 0.1
    Range("D3").Value2 = 0.0005
    Range("D4").Value2 = 3.5
    Range("D5").Value2 = 1.4
    Range("D6").Value2 = 50
    Range("D7").Value2 = 30
    let confidence1 = Application.WorksheetFunction.Confidence(Range("D2").Value2, Range("D4").Value2, Range("D6").Value2)
    let confidence2 = Application.WorksheetFunction.Confidence(Range("D3").Value2, Range("D5").Value2, Range("D7").Value2)
    alert(confidence1)
    alert(confidence2)
}
```
