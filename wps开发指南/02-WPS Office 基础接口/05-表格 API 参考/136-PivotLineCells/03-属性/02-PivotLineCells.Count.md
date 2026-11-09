# PivotLineCells.Count

返回 **PivotLineCells** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **PivotLineCells** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表中行轴上第一条数据透视线的PivotLineCells属性的PivotCell的数量。*/
function test() {
    let pvtLine = ActiveSheet.Range("I1").PivotTable.PivotRowAxis.PivotLines(1)
    alert(pvtLine.PivotLineCells.Count)
}
```
