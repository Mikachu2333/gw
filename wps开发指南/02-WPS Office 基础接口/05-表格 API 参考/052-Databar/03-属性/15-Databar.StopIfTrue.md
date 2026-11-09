# Databar.StopIfTrue

返回一个 **Boolean** 值，该值确定在当前规则的计算结果为 **True** 时是否应计算单元格上的其他格式规则，只读。



## 语法

express.**StopIfTrue**

express   一个代表 **Databar** 对象的变量。

## 类型

boolean

## 说明


为了支持向后兼容性，此属性的默认值是 **False** ，而这与在用户界面中创建的格式规则的行为相反。



## 示例


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第一个条件格式（数据条）的计算结果为True时是否不计算单元格上的其他格式规则。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(databar.StopIfTrue)
}
```


```JavaScript
/*本示例判断工作表 Sheet1 上区域 A1:A8 中第一个条件格式（数据条）的计算结果为True时是否不计算单元格上的其他格式规则，并通知用户。*/
function test() {
    let databar = Worksheets.Item("Sheet1").Range("A1:A8").FormatConditions.Item(1)
    if (databar.StopIfTrue) {
        alert("数据条的计算结果为 True 时不计算单元格上的其他格式规则")
    } else {
        alert("数据条的计算结果为 True 时计算单元格上的其他格式规则")
    }
}
```
