# Slicer.Top

返回或设置指定切片器在工作表上相对于单元格 A1 左上角的垂直位置（单位为磅）。可读/写。



## 语法

express.**Top**

express   一个代表 **Slicer** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例设置活动工作簿上第一个切片器缓存中“name”切片器相对于单元格 A1 左上角垂直位置和水平位置的距离。*/
function test() {
    let slicer = ActiveWorkbook.SlicerCaches(1).Slicers.Item("name")
    slicer.Top = 0
    slicer.Left = Range("A1:P1").Width
}
```


```JavaScript
/*本示例显示活动工作表上第一张数据透视表的“id”切片器相对于 A1 单元格左上角垂直位置的距离。*/
function test() {
    alert(ActiveSheet.PivotTables(1).Slicers.Item("id").Top)
}
```
