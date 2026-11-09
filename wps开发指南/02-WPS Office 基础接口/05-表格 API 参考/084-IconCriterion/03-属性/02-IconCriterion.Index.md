# IconCriterion.Index

返回一个 **Long** 值，该值表示条件代表的阈值。只读。



## 语法

express.**Index**

express   一个代表 **IconCriterion** 对象的变量。

## 类型

number（int4 精度）

## 说明


对于图标集，此属性将为最小阈值返回值“1”，为下一个阈值返回值“2”，依此类推。



## 示例


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第一个图标集条件格式的第二个图标的阈值。*/
function test() {
    let iconSet = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(iconSet.IconCriteria.Item(2).Index)
}
```


```JavaScript
/*本示例将第一张工作表上区域 A1:A10 中第一个图标集条件格式的所有图标的阈值赋值给活动工作表的单元格。*/
function test() {
    let iconSet = Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    for (let i = 1; i <= iconSet.IconCriteria.Count; i++) {
        ActiveSheet.Cells.Item(i, 3).Value2 = iconSet.IconCriteria.Item(i).Index
    }
}
```
