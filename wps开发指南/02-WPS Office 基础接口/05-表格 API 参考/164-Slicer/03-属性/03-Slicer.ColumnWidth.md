# Slicer.ColumnWidth

获取或设置切片器控件中每一列的宽度（以磅为单位）。可读/写。



## 语法

express.**ColumnWidth**

express   一个代表 **Slicer** 对象的变量。

## 类型

number（double 精度）

## 说明


 **[Slicer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/obj)** 对象的 **[Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Width)** 属性根据 **ColumnWidth** 属性和 **[NumberOfColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/NumberOfColumns)** 属性的值自动调整。



## 示例


```JavaScript
/*本示例显示活动工作簿上第二个切片器缓存中第一个切片器每一列的宽度。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches(2).Slicers.Item(1).ColumnWidth)
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上第一张数据透视表的第一个切片器每一列的宽度，并显示设置前后的该切片器每一列宽度。*/
function test() {
    let slicer = Worksheets.Item("Sheet1").PivotTables(1).Slicers.Item(1)
    alert(`设置前切片器每一列的宽度：${slicer.ColumnWidth} 磅`)
    slicer.ColumnWidth = 120
    alert(`设置后切片器每一列的宽度：${slicer.ColumnWidth} 磅`)
}
```
