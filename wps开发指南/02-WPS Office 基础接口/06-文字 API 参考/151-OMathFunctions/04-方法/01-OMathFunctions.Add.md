# OMathFunctions.Add

在公式中的指定位置插入一个新结构（如分数），并且返回代表该结构的 **OMathFunction** 对象。



## 语法

express.**Add(Range, Type, NumArgs, NumCols)**

express   一个代表 **OMathFunctions** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 插入公式的位置。 |
| Type | 必选 | WdOMathFunctionType | 要插入的公式的类型。 |
| NumArgs | 可选 | any | 公式中的参数个数。 |
| NumCols | 可选 | any | 公式中的列数。 |

## 返回值

OMathFunction

## 示例


```JavaScript
/*本示例在活动文档上第一个公式中添加一个上标函数，并设置该函数的上标的文本。*/
function test() {
    let oMathfunction = ActiveDocument.OMaths.Item(1).Functions.Add(ActiveDocument.OMaths.Item(1).Range, wdOMathFunctionScrSup, 1, 1)
    oMathfunction.ScrSup.Sup.Range.Text = "3"
}
```


```JavaScript
/*本示例为第一个文档上第一个公式添加边框。*/
function test() {
    let oMath = Documents.Item(1).OMaths.Item(1)
    oMath.Functions.Add(oMath.Range, wdOMathFunctionBorderBox)
}
```
