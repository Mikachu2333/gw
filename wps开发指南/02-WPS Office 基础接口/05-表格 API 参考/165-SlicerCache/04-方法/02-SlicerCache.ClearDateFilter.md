# SlicerCache.ClearDateFilter

清除时间线的筛选器 (日期筛选器) 。



## 语法

express.**ClearDateFilter()**

express   一个代表 **SlicerCache** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除第一张工作簿中第二个切片器缓存的日期筛选器。*/
function test() {
    Workbooks.Item(1).SlicerCaches(2).ClearDateFilter()
}
```


```JavaScript
/*本示例清除活动工作簿中名为“切片器_id”切片器缓存的日期筛选器。*/
function test() {
    ActiveWorkbook.SlicerCaches("切片器_id").ClearDateFilter()
}
```
