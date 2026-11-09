# ColorScaleCriterion.Index

返回一个 **Long** 值，该值表示条件代表的阈值。只读。



## 语法

express.**Index**

express   一个代表 **ColorScaleCriterion** 对象的变量。

## 类型

number（int4 精度）

## 说明


对于双色色阶条件格式规则，此属性将为最小阈值返回值“1”，为最大阈值返回值“2”。在使用三色色阶规则时，最小、中点和最大阈值的值将分别为“1”、“2”和“3”。



## 示例


```JavaScript
/*本示例显示活动工作表上单元格区域 A1:A10 的第一个色阶条件格式的第一个阈值条件的索引。*/
function test() {
    let colorScale = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    let criterion = colorScale.ColorScaleCriteria.Item(1)
    alert(criterion.Index)
}
```


```JavaScript
/*本示例将第一张工作表上单元格区域 A1:A10 的第二个色阶条件格式的所有阈值条件的索引赋值到活动工作表的单元格中。*/
function test() {
    let colorScale = Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(2)
    for (let i = 1; i <= colorScale.ColorScaleCriteria.Count; i++) {
        ActiveSheet.Cells.Item(i, 2).Value2 = colorScale.ColorScaleCriteria.Item(i).Index
    }
}
```
