# SlicerItem.Value

返回切片器项的值。只读。



## 语法

express.**Value**

express   一个代表 **SlicerItem** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作簿上名为“切片器_name”的切片器缓存中第三个切片器项的值。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_name").SlicerItems(3).Value)
}
```


```JavaScript
/*本示例显示活动工作表上数据透视表的第一个切片器的缓存中第五个切片器项的值。*/
function test() {
    let sliItem = ActiveSheet.Range("I1").PivotTable.Slicers.Item(1).SlicerCache.SlicerItems(5)
    alert(`第五个切片器项的值：${sliItem.Value}`)
}
```
