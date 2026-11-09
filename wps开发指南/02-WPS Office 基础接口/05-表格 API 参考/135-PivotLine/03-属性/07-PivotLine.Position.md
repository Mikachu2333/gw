# PivotLine.Position

返回 **PivotLine** 对象的位置。只读。



## 语法

express.**Position**

express   一个代表 **PivotLine** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表中列轴上第一条数据透视线的位置。*/
function test() {
    let pvtLine = ActiveSheet.Range("I1").PivotTable.PivotColumnAxis.PivotLines(1)
    alert(pvtLine.Position)
}
```


```JavaScript
/*本示例显示工作表 Sheet1 上第一张数据透视表中行轴上第一条数据透视线的位置。*/
function test() {
    let pvtLine = Worksheets.Item("Sheet1").PivotTables(1).PivotRowAxis.PivotLines(1)
    alert(pvtLine.Position)
}
```
