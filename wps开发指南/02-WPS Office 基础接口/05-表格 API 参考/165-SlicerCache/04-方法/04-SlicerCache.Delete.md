# SlicerCache.Delete

删除指定的切片器缓存及其关联的切片器。



## 语法

express.**Delete()**

express   一个代表 **SlicerCache** 对象的变量。

## 返回值

void

## 说明


若要脱离切片器缓存，而单独删除一个特定的切片器，那么应改用 **[Slicer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/obj)** 对象的 **[Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Delete)** 方法。



## 示例


```JavaScript
/*本示例删除活动工作簿“切片器_name”切片器缓存，以及与该切片器缓存关联的“name”切片器。*/
function test() {
    ActiveWorkbook.SlicerCaches("切片器_name").Delete()
}
```


```JavaScript
/*本示例判断如果第一张工作簿中第二个切片器缓存的名称为“切片器_date”，则删除该切片器缓存及关联的切片器。*/
function test() {
    let slcCache = Workbooks.Item(1).SlicerCaches(2)
    if (slcCache.Name == "切片器_date") {
        slcCache.Delete()
    }
}
```
