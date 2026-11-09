# SlicerCaches 对象

表示与指定工作簿关联的切片器缓存的集合。

## 说明


使用 **SlicerCaches** 集合的 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCaches/member/Item)** 属性可返回与指定的 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象关联的 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 对象。可以使用 **[Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/Index)** 属性的值，或者指定对象的 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/Name)** 属性来检索 **SlicerCache** 对象。


## 示例


```JavaScript
/*本示例显示活动工作簿上名为“切片器_id”的切片器缓存所连接到的数据源的名称。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches.Item("切片器_id").SourceName)
}
```


```JavaScript
/*本示例在活动工作簿上添加新的切片器缓存，并显示该切片器缓存的名称。*/
function test() {
    let sliCache =  ActiveWorkbook.SlicerCaches.Add2(ActiveSheet.Range("I1").PivotTable, "date", "Slicer_date", xlSlicer)
    alert(sliCache.Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCaches/member/Add2) | 将新的 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 对象添加到集合。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCaches/member/Item) | 从集合中返回一个 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCaches/member/Count) | 返回集合中对象的数目。 |