# SlicerItem.SourceNameStandard

返回以标准英语（美国）格式设置表示的切片器项的源名称。只读。



## 语法

express.**SourceNameStandard**

express   一个代表 **SlicerItem** 对象的变量。

## 类型

string

## 说明


当切片器项有本地化版本且其 **SourceNameStandard** 属性值不同于 **[SourceName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/member/SourceName)** 属性值时，将使用此属性，例如对于日期格式。



## 示例


```JavaScript
/*本示例显示以标准英语（美国）格式表示的第一张工作簿上名为“切片器_date”的切片器缓存中第一个切片器项的源名称。*/
function test() {
    let sliItem = Workbooks.Item(1).SlicerCaches("切片器_date").SlicerItems(1)
    alert(sliItem.SourceNameStandard)
}
```


```JavaScript
/*本示例显示以标准英语（美国）格式表示的活动工作表上数据透视表的第一个切片器的缓存的第一个切片器项的源名称。*/
function test() {
    let sliItem = ActiveSheet.Range("I1").PivotTable.Slicers.Item(1).SlicerCache.SlicerItems(1)
    alert(sliItem.SourceNameStandard)
}
```
