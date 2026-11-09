# SlicerCache.FilterCleared

返回是否清除切片器或时间线筛选器状态。 **Boolean** 类型，只读。



## 语法

express.**FilterCleared**

express   一个代表 **SlicerCache** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿上名为“切片器_name”的切片器缓存是否清除切片器筛选器状态。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_name").FilterCleared)
}
```


```JavaScript
/*本示例显示第一张工作簿第三个切片器缓存是否清除切片器筛选器状态。*/
function test() {
    alert(Workbooks.Item(1).SlicerCaches(3).FilterCleared)
}
```
