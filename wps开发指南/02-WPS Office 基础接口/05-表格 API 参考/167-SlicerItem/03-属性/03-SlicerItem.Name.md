# SlicerItem.Name

返回切片器项的名称。只读。



## 语法

express.**Name**

express   一个代表 **SlicerItem** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作簿上名为“切片器_date”的切片器缓存中第三个切片器项的名称。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_date").SlicerItems.Item(3).Name)
}
```


```JavaScript
/*本示例显示活动工作表上第一张数据透视表的第一个切片器的缓存中第四个切片器项的名称。*/
function test() {
    let sliItem = ActiveSheet.PivotTables(1).Slicers.Item(1).SlicerCache.SlicerItems.Item(4)
    alert(`第四个切片器项的名称：${sliItem.Name}`)
}
```
