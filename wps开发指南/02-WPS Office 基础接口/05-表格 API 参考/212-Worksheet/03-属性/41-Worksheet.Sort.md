# Worksheet.Sort

返回 Sort 对象。只读属性。



## 语法

express.**Sort**

express   一个代表 **Worksheet** 对象的变量。

## 类型

Sort

## 示例


```JavaScript
/*此示例对第一张工作表中区域 C1:G1 的数据按行进行升序排序。*/
function test() {
    Application.Sheets.Item(1).Activate()
    let sort = Application.ActiveSheet.Sort
    sort.SortFields.Clear()
    sort.SortFields.Add(Range("C1:G1"), xlSortOnValues, xlAscending, xlSortNormal)
    sort.SetRange(Range("C1:G1"))
    sort.Header = xlNo
    sort.Orientation = xlSortRows
    sort.Apply()
}
```


```JavaScript
/*此示例在活动工作表中对A1等单元格赋值，并对A1:A5区域进行降序排序。*/
function test() {
    Range("A1").Value2 = 1
    Range("A1").AutoFill(Range("A1:A5"), xlFillValues)
    let sort = Application.ActiveSheet.Sort
    sort.SortFields.Clear()
    sort.SortFields.Add(Range("A1:A5"), xlSortOnValues, xlDescending, xlSortNormal)
    sort.SetRange(Range("A1:A5"))
    sort.Header = xlNo
    sort.Orientation = xlSortColumns
    sort.Apply()
}
```
