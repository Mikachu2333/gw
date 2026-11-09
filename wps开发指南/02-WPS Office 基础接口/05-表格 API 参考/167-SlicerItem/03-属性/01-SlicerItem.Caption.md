# SlicerItem.Caption

返回切片器项的标签文本。只读。



## 语法

express.**Caption**

express   一个代表 **SlicerItem** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作簿上名为“切片器_date”的切片器缓存中第一项的标签文本。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_date").SlicerItems.Item(1).Caption)
}
```


```JavaScript
/*本示例将活动工作表上数据透视表第一个切片器的缓存中切片器项的标签文本逐个赋值到单元格中。*/
function test() {
    let sliItems = ActiveSheet.Range("I1").PivotTable.Slicers.Item(1).SlicerCache.SlicerItems
    for (let i = 1; i <= sliItems.Count; i++) {
        Cells.Item(i + 10, 1).Value2 = sliItems.Item(i).Caption
    }
}
```
