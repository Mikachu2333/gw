# SlicerItem.SourceName

返回切片器项的源名称。只读。



## 语法

express.**SourceName**

express   一个代表 **SlicerItem** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示第一张工作簿上名为“切片器_score”的切片器缓存中第六个切片器项的源名称。*/
function test() {
    let sliItem = Workbooks.Item(1).SlicerCaches("切片器_score").SlicerItems(6)
    alert(sliItem.SourceName)
}
```


```JavaScript
/*本示例显示活动工作表上第一张数据透视表的第一个切片器的缓存中第二个切片器项的源名称。*/
function test() {
    let sliItem = ActiveSheet.PivotTables(1).Slicers.Item(1).SlicerCache.SlicerItems(2)
    alert(sliItem.SourceName)
}
```
