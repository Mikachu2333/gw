# OMathFunctions.Item

返回 **OMathFunction** 对象，该对象表示集合中的指定项。



## 语法

express.**Item(Index)**

express   一个代表 **OMathFunctions** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 指定对象在集合中的序号位置。 |

## 返回值

OMathFunction

## 示例


```JavaScript
/*本示例判断如果第一个文档上第一个公式中函数的类型为wdOMathFunctionScrSup，则通知用户。*/
function test() {
    let oMathFunctions = Documents.Item(1).OMaths.Item(1).Functions
    for (let i = 1; i <= oMathFunctions.Count; i++) {
        if (oMathFunctions.Item(i).Type == wdOMathFunctionScrSup) {
            alert(`第${i}个函数的类型为wdOMathFunctionScrSup`)
        }
    }
}
```


```JavaScript
/*本示例将第一个文档上第二个公式中第一个函数上标部分的文本格式设置为加粗。*/
function test() {
    let oMath = Documents.Item(1).OMaths.Item(2)
    oMath.Functions.Item(1).ScrSup.Sup.Range.Bold = true
}
```
