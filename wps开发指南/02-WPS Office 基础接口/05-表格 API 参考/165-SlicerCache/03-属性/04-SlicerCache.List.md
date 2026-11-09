# SlicerCache.List

如果切片器缓存适用于表上的切片器，则为 **True** ；否则为 **False** 。 只读 **Boolean** 类型。



## 语法

express.**List**

express   一个代表 **SlicerCache** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿上名为“切片器_name”的切片器缓存是否适用于表上的切片器。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_name").List)
}
```


```JavaScript
/*本示例判断第一张工作簿第二个切片器缓存是否适用于表上的切片器，并通知用户。*/
function test() {
    let slCache = Workbooks.Item(1).SlicerCaches(2)
    if (slCache.List) {
        alert("切片器缓存适用于表上的切片器")
    } else {
        alert("切片器缓存不适用于表上的切片器")
    }
}
```
