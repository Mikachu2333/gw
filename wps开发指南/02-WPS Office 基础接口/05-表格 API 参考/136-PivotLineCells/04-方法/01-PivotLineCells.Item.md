# PivotLineCells.Item

按 **PivotLineCells** 集合对象在集合中的位置返回特定元素。 此为只读属性。



## 语法

express.**Item(Index)**

express   一个代表 **PivotLineCells** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定集合的元素的位置。 |

## 返回值

PivotCell

## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表行轴上第一条数据透视线的PivotLineCells属性的第一个PivotCell的地址。*/
function test() {
    let pvtCell = ActiveSheet.Range("I1").PivotTable.PivotRowAxis.PivotLines(1).PivotLineCells.Item(1)
    alert(pvtCell.Range.Address())
}
```


```JavaScript
/*本示例显示工作表 Sheet1 上第一张数据透视表列轴上第一条数据透视线的PivotLineCells属性的第二个PivotCell对应的数据透视表字段的值。*/
function test() {
    let pvtLine = Worksheets.Item("Sheet1").PivotTables(1).PivotColumnAxis.PivotLines(1)
    alert(pvtLine.PivotLineCells.Item(2).DataField.Value)
}
```
