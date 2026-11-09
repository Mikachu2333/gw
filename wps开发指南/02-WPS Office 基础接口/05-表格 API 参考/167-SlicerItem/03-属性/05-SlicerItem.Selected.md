# SlicerItem.Selected

返回或设置是否选择了切片器项。连接到非 OLAP 数据源的切片器，可读/写。连接到 OLAP 数据源的切片器，只读。



## 语法

express.**Selected**

express   一个代表 **SlicerItem** 对象的变量。

## 类型

boolean

## 说明


如果选择了切片器项，则为 **True** ；否则为 **False** 。



## 示例


```JavaScript
/*本示例选中活动工作簿上第二个切片器缓存中第一个切片器项。*/
function test() {
    ActiveWorkbook.SlicerCaches(2).SlicerItems(1).Selected = true
}
```


```JavaScript
/*本示例显示活动工作表上数据透视表第一个切片器的缓存中名为“张三”的切片器项是否被选中。*/
function test() {
    let sliItem = ActiveSheet.Range("I1").PivotTable.Slicers.Item(1).SlicerCache.SlicerItems("张三")
    alert(sliItem.Selected)
}
```
