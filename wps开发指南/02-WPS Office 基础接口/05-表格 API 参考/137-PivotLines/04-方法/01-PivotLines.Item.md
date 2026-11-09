# PivotLines.Item

根据 **PivotLines** 集合对象特定元素在集合中的位置返回该特定元素。只读。



## 语法

express.**Item(Index)**

express   一个代表 **PivotLines** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定集合的元素的位置。 |

## 返回值

PivotLine

## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表中列轴上第二条数据透视线的PivotLineCells属性第一个PivotCell对应数据透视表项的值。*/
function test() {
    let pvtLine = ActiveSheet.Range("I1").PivotTable.PivotColumnAxis.PivotLines.Item(2)
    alert(pvtLine.PivotLineCells.Item(1).PivotItem.Value)
}
```


```JavaScript
/*本示例显示活动工作表上数据透视表中行轴上第一条数据透视线的类型是否为“xlPivotLineRegular”。*/
function test() {
    let pvtLine = ActiveSheet.Range("I1").PivotTable.PivotRowAxis.PivotLines.Item(1)
    alert(pvtLine.LineType == xlPivotLineRegular)
}
```
