# Slicer.Height

返回或设置指定切片器的高度（单位磅）。可读/写。



## 语法

express.**Height**

express   一个代表 **Slicer** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动工作簿上第四个切片器缓存中“age”切片器的高度。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches(4).Slicers.Item("age").Height)
}
```


```JavaScript
/*本示例将第一张工作表上第一张数据透视表的第一个切片器的高度设置为 200 磅。*/
function test() {
    let slicer = Worksheets.Item(1).PivotTables(1).Slicers.Item(1)
    slicer.Height = 200
}
```
