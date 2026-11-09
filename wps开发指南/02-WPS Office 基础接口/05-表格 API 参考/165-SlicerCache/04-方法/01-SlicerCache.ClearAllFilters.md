# SlicerCache.ClearAllFilters

清除切片器或时间线的筛选器，具体取决于切片器缓存类型。



## 语法

express.**ClearAllFilters()**

express   一个代表 **SlicerCache** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除活动工作簿上所有切片器缓存的筛选器。*/
function test() {
    for (let i = 1; i <= ActiveWorkbook.SlicerCaches.Count; i++) {
        ActiveWorkbook.SlicerCaches(i).ClearAllFilters()
    }
}
```


```JavaScript
/*本示例清除第一张工作簿中名为“切片器_id”的切片器缓存的筛选器。*/
function test() {
    Workbooks.Item(1).SlicerCaches("切片器_id").ClearAllFilters()
}
```
