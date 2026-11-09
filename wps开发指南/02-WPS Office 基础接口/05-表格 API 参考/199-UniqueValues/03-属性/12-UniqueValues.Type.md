# UniqueValues.Type

返回 **XlFormatConditionType** 枚举的常量之一，该常量指定条件格式的类型。只读。



## 语法

express.**Type**

express   一个代表 **UniqueValues** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性将始终返回 **Long** 值“8”，等价于 **xlUniqueValues** 。



## 示例


```JavaScript
/*本示例显示活动工作表上区域 B1:B10 中第二个条件格式的类型是否为xlUniqueValues。*/
function test() {
    let formatCondition = ActiveSheet.Range("B1:B10").FormatConditions.Item(2)
    alert(formatCondition.Type == xlUniqueValues)
}
```


```JavaScript
/*本示例判断活动工作表上区域 B1:B10 中第一个条件格式的类型是否为xlUniqueValues，并通知用户。*/
function test() {
    let formatCondition = ActiveSheet.Range("B1:B10").FormatConditions.Item(1)
    if (formatCondition.Type == xlUniqueValues) {
        alert("类型为 xlUniqueValues")
    } else {
        alert("类型不为 xlUniqueValues")
    }
}
```
