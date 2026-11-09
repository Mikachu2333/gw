# SlicerCache.OLAP

返回与指定的切片器缓存关联的切片器是否基于 OLAP 数据源。只读



## 语法

express.**OLAP**

express   一个代表 **SlicerCache** 对象的变量。

## 类型

boolean

## 说明


如果切片器是基于 OLAP 数据源，则为 **True** ；否则为 **False** 。



## 示例


```JavaScript
/*本示例显示活动工作簿第二个切片器缓存关联的切片器是否基于 OLAP 数据源。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches(2).OLAP)
}
```


```JavaScript
/*本示例判断如果第一张工作簿中名为“切片器_id”的切片器缓存关联的切片器未基于 OLAP 数据源，则删除该切片器缓存。*/
function test() {
    let slcCache = Workbooks.Item(1).SlicerCaches("切片器_id")
    if (slcCache.OLAP == false) {
        slcCache.Delete()
    }
}
```
