# PivotLines.Count

返回 **PivotLines** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **PivotLines** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表中行轴上数据透视线的数量。*/
function test() {
    let pvtLines = ActiveSheet.Range("I1").PivotTable.PivotRowAxis.PivotLines
    alert(pvtLines.Count)
}
```
