# Slicer.RowHeight

返回或设置指定切片器中每一行的高度（单位为磅）。可读/写。



## 语法

express.**RowHeight**

express   一个代表 **Slicer** 对象的变量。

## 类型

number（double 精度）

## 说明


此属性不影响切片器控件的高度。使用 **[Slicer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/obj)** 对象的 **[Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Height)** 属性可返回或设置切片器的高度。



## 示例


```JavaScript
/*本示例显示活动工作表上第一张数据透视表的第二个切片器每一行的高度。*/
function test() {
    alert(ActiveSheet.PivotTables(1).Slicers.Item(2).RowHeight)
}
```


```JavaScript
/*本示例将活动工作簿上名为“切片器_name”的切片器缓存中第一个切片器每一行的高度设置为 25 磅。*/
function test() {
    let slicer = ActiveWorkbook.SlicerCaches("切片器_name").Slicers.Item(1)
    slicer.RowHeight = 25
}
```
