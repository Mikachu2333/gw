# PivotAxis.PivotLines

返回附加到指定 **PivotAxis** 对象的 PivotLines。只读。



## 语法

express.**PivotLines**

express   一个代表 **PivotAxis** 对象的变量。

## 类型

PivotLines

## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表中行轴上数据透视线的数量。*/
function test() {
    let pvtLines = ActiveSheet.Range("I1").PivotTable.PivotRowAxis.PivotLines
    alert(pvtLines.Count)
}
```


```JavaScript
/*本示例显示活动工作表上数据透视表中行轴上第二条数据透视线的类型是否为“xlPivotLineRegular”。*/
function test() {
    let pvtLine = ActiveSheet.Range("I1").PivotTable.PivotRowAxis.PivotLines.Item(2)
    alert(pvtLine.LineType == xlPivotLineRegular)
}
```
