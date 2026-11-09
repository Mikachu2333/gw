# ListObject.Sort

获取或设置 **ListObject** 集合的排序列和排序次序。



## 语法

express.**Sort**

express   一个代表 **ListObject** 对象的变量。

## 类型

Sort

## 示例


```JavaScript
/*本示例显示活动工作表上包含 C2 单元格的列表的排序方向是否为 xlSortColumns。*/
function test() {
    let listObj = Application.ActiveSheet.Range("C2").ListObject
    alert(listObj.Sort.Orientation == xlSortColumns)
}
```


```JavaScript
/*本示例将工作表 Sheet1 上第一张列表的排序方式设置为区分大小写的排序。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.Sort.MatchCase = true
}
```
