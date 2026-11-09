# Range.SpecialCells

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象代表与指定类型和值匹配的所有单元格。



## 语法

express.**SpecialCells(Type, Value)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | XlCellType | 要包含的单元格。 |
| Value | 可选 | any | 如果 _Type_ 为 **xlCellTypeConstants** 或 **xlCellTypeFormulas** ，则该参数可用于确定结果中应包含哪几类单元格。将这些值相加可使此方法返回多种类型的单元格。默认情况下，将选择所有常量或公式，无论类型如何。 |

## 返回值

Range

## 说明


使用 XlSpecialCellsValue 枚举指定要包含在结果中的具有特定类型的值的单元格。



## 示例


```JavaScript
/*本示例选定工作表 Sheet1 中已用区域的最后一个单元格。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    ActiveSheet.Cells.SpecialCells(xlCellTypeLastCell).Activate()
}
```


```JavaScript
/*本示例给 C3 单元格添加批注 test，并显示 A1:C5 单元格区域含有批注的单元格地址*/
function test() {
    Range("C3").AddComment("test")
    alert(Range("A1:C5").SpecialCells(xlCellTypeComments).Address())
}
```
