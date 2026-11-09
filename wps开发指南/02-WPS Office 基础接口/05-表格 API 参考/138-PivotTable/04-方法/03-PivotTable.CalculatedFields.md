# PivotTable.CalculatedFields

返回一个 **CalculatedFields** 集合，该集合表示指定数据透视表中的所有计算字段。只读。



## 语法

express.**CalculatedFields()**

express   一个代表 **PivotTable** 对象的变量。

## 返回值

CalculatedFields

## 示例


```JavaScript
/*本示例使计算结果字段不能被拖至行。*/
function test() {
    for (let i = 1; i <= Worksheets.Item(1).PivotTables("Pivot1").CalculatedFields().Count; i++) {
        Worksheets.Item(1).PivotTables("Pivot1").CalculatedFields().Item(i).DragToRow = false
    }
}
```


```JavaScript
/*本示例在数据透视表 Pivot1 中添加计算字段，并显示所有计算字段的数量*/
function test() {
    ActiveSheet.PivotTables("Pivot1").CalculatedFields().Add("y*z", "=y*z")
    alert("数据透视表Pivot1中计算字段的数量为" + ActiveSheet.PivotTables("Pivot1").CalculatedFields().Count)
}
```
