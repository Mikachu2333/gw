# Errors.Item

返回 **Error** 对象的单个成员。



## 语法

express.**Item(Index)**

express   一个代表 **Errors** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 成员的索引。 |

## 返回值

Error

## 说明


*Index* 可以是以下常量之一。  

| **xlEvaluateToError** ：单元格计算为错误值。            |
| ------------------------------------------- |
| **xlTextDate** ：单元格包含用 2 位数表示年份的文本日期。        |
| **xlNumberAsText** ：单元格包含以文本形式存储的数字。         |
| **xlInconsistentFormula** ：单元格包含一个区域中不一致的公式。 |
| **xlOmittedCells** ：单元格包含一个忽略了区域中某个单元格的公式。   |
| **xlUnlockedFormulaCells** ：取消锁定的单元格包含一个公式。  |
| **xlEmptyCellReferences** ：单元格包含一个引用空单元格的公式。 |



## 示例


```JavaScript
/*下例使用 TextDate 属性启用对两位数年份文本日期的错误检查，并通知用户。*/
function test() {
    let range = Application.Range("B1")

    Range("B1").Formula = "'00/5/31"
    Application.ErrorCheckingOptions.TextDate = true

    //Perform check to see if 2 digit year TextDate check is on.
    if (range.Errors.Item(xlTextDate).Value) {
        alert("The text date error checking feature is enabled.")
    } else {
        alert("The text date error checking feature is not on.")
    }
}
```


```JavaScript
/*本示例为检查空单元格引用而禁用单元格 A1 中的忽略标记。*/
function test() {
    Range("A1").Select()
    if (Application.Range("A1").Errors.Item(xlEmptyCellReferences).Ignore) {
        Application.Range("A1").Errors.Item(xlEmptyCellReferences).Ignore = false
    }
}
```
