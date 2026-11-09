# ListObject.AutoFilter

使用“自动筛选”筛选一个列表。只读。



## 语法

express.**AutoFilter**

express   一个代表 **ListObject** 对象的变量。

## 类型

AutoFilter

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上第一张列表的自动筛选范围中的筛选器的数量。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    alert(listObj.AutoFilter.Filters.Count)
}
```


```JavaScript
/*本示例选中活动工作表上包含 A2 单元格的列表的自动筛选应用到的范围。*/
function test() {
    let listObj = Application.ActiveSheet.Range("A2").ListObject
    listObj.AutoFilter.Range.Select()
}
```
