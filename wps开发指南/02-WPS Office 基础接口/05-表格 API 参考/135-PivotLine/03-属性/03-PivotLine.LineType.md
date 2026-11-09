# PivotLine.LineType

返回一个表示 PivotLine 类型的 **XlPivotLineType** 常量。只读。



## 语法

express.**LineType**

express   一个代表 **PivotLine** 对象的变量。

## 类型

XlPivotLineType

## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表中列轴上第一条数据透视线的类型是否为“xlPivotLineRegular”。*/
function test() {
    let pvtLine = ActiveSheet.Range("I1").PivotTable.PivotColumnAxis.PivotLines(1)
    alert(pvtLine.LineType == xlPivotLineRegular)
}
```


```JavaScript
/*本示例判断工作表 Sheet1 中第一张数据透视表中行轴上第二条数据透视线的类型是否为“xlPivotLineGrandTotal”，并通知用户。*/
function test() {
    let pvtLine = Worksheets.Item("Sheet1").PivotTables(1).PivotRowAxis.PivotLines(2)
    if (pvtLine.LineType == xlPivotLineGrandTotal) {
        alert("数据透视线的类型是 xlPivotLineGrandTotal")
    } else {
        alert("数据透视线的类型不是 xlPivotLineGrandTotal")
    }
}
```
