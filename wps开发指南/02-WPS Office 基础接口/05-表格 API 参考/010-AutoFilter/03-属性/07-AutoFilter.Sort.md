# AutoFilter.Sort

获取 **AutoFilter** 集合的排序列和排序次序。



## 语法

express.**Sort**

express   一个代表 **AutoFilter** 对象的变量。

## 类型

Sort

## 示例


```JavaScript
/*本示例显示活动工作表的 AutoFilter 集合排序方向是否为 xlSortColumns。*/
function test() {
    alert(ActiveSheet.AutoFilter.Sort.Orientation == xlSortColumns)
}
```


```JavaScript
/*本示例将第一张工作表的 AutoFilter 集合的排序方式设置为区分大小写的排序。*/
function test() {
    Worksheets.Item(1).AutoFilter.Sort.MatchCase = true
}
```
