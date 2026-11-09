# Slicer.Width

获取或设置指定切片器的宽度（以磅为单位）。可读/写。



## 语法

express.**Width**

express   一个代表 **Slicer** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例设置活动工作簿上第三个切片器缓存中“id”切片器的宽度。*/
function test() {
    let slicer = ActiveWorkbook.SlicerCaches(3).Slicers.Item("id")
    slicer.Width = (Range("F1").Width) * 3
}
```


```JavaScript
/*本示例显示活动工作表上第一张数据透视表的第二个切片器的宽度。*/
function test() {
    alert(ActiveSheet.PivotTables(1).Slicers.Item(2).Width)
}
```
