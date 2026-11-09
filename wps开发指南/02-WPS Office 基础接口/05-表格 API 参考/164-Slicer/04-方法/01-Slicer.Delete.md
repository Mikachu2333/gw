# Slicer.Delete

删除切片器并将其从关联的 **[Slicers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicers/obj)** 集合中删除。



## 语法

express.**Delete()**

express   一个代表 **Slicer** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动工作表上第一张数据透视表的第一个切片器。*/
function test() {
    let slicer = ActiveSheet.PivotTables(1).Slicers.Item(1)
    slicer.Delete()
}
```


```JavaScript
/*本示例判断如果活动工作簿上名为“切片器_date”的切片器缓存的第一个切片器的标题为“date”，则删除该切片器。*/
function test() {
    let slicer = ActiveWorkbook.SlicerCaches("切片器_date").Slicers.Item(1)
    if (slicer.Caption == "date") {
        slicer.Delete()
    }
}
```
