# SlicerCache.Index

返回 **[SlicerCaches](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCaches/obj)** 集合中指定 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 对象的索引。只读



## 语法

express.**Index**

express   一个代表 **SlicerCache** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作簿“切片器_name”切片器缓存的索引号。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_name").Index)
}
```


```JavaScript
/*本示例判断如果第一张工作簿中切片器缓存“切片器_date”的索引号为2，则清除该切片器缓存的筛选器。*/
function test() {
    let slcCache = Workbooks.Item(1).SlicerCaches("切片器_date")
    if (slcCache.Index == 2) {
        slcCache.ClearManualFilter()
    }
}
```
