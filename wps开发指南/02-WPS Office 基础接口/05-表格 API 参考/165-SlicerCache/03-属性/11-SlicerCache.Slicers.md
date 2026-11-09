# SlicerCache.Slicers

返回一个 **[Slicers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicers/obj)** 集合，其中包含与指定的 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 关联的 **[Slicer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/obj)** 对象的集合。只读



## 语法

express.**Slicers**

express   一个代表 **SlicerCache** 对象的变量。

## 类型

Slicers

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个切片器缓存中第一个切片器的名称。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches(1).Slicers(1).Name)
}
```


```JavaScript
/*本示例显示活动工作簿上名为“切片器_id”的切片器缓存中第一个切片器的高度。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_id").Slicers(1).Height)
}
```
