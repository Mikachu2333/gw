# SlicerItem.HasData

返回切片器项是否包含与当前手动筛选状态相符的数据。只读。



## 语法

express.**HasData**

express   一个代表 **SlicerItem** 对象的变量。

## 类型

boolean

## 说明


如果切片器项中包含与当前手动筛选状态相符的数据，则为 **True** ；否则为 **False** 。

此属性只在启用了交叉筛选的情况下才受支持，否则将生成运行时错误。若要确定是否为与数据透视表关联的切片器启用了交叉筛选，请检查指定的 **SlicerItem** 对象的父 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 对象的 **[CrossFilterType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/CrossFilterType)** 属性值。若要确定是否为与 OLAP 数据源关联的切片器启用了交叉筛选，请检查对应于被筛选的 OLAP 层次结构的 **[SlicerCacheLevel](#TODO)** 对象的 **[CrossFilterType](#TODO)** 属性值。



## 示例


```JavaScript
/*本示例显示活动工作簿第二个切片器缓存中第二个切片器项是否包含与当前手动筛选状态相符的数据。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches(2).SlicerItems(2).HasData)
}
```


```JavaScript
/*本示例显示活动工作簿上名为“切片器_name”的切片器缓存中名为“张五”的切片器项是否包含与当前手动筛选状态相符的数据。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_name").SlicerItems("张五").HasData)
}
```
