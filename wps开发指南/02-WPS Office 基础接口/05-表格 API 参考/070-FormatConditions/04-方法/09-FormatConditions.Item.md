# FormatConditions.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **FormatConditions** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

Object

## 示例


```JavaScript
/*此示例为第一张工作表上 E1:E10 单元格区域的现有条件格式设置格式属性。*/
function test() {
    let formatCondition = Application.Worksheets.Item(1).Range("E1:E10").FormatConditions.Item(1)
    let boders = formatCondition.Borders
    boders.LineStyle = xlContinuous
    boders.Weight = xlThin
    boders.ColorIndex = 6
}
```


```JavaScript
/*本示例选中工作表 Sheet1 上区域 B1:B10 中第二个条件格式应用到的单元格区域。*/
function test() {
    let formatCondition = Application.Worksheets.Item("Sheet1").Range("B1:B10").FormatConditions.Item(2)
    formatCondition.AppliesTo.Select()
}
```
