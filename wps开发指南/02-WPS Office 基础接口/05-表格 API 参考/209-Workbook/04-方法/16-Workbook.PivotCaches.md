# Workbook.PivotCaches

返回一个 **[PivotCaches](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCaches/obj)** 集合，该集合表示指定工作簿中的所有数据透视表缓存。只读。



## 语法

express.**PivotCaches()**

express   一个代表 **Workbook** 对象的变量。

## 返回值

PivotCaches

## 示例


```JavaScript
/*本示例使工作簿每次打开时自动更新数据透视表缓存。*/
function test() {
    ActiveWorkbook.PivotCaches().Item(1).RefreshOnFileOpen = true
}
```


```JavaScript
/*以下示例演示活动工作簿中的数据透视表缓存的总数，并将PivotCaches集合的第一项的 EnableRefresh 属性设置为true，并告知用户最近一次刷新数据透视表缓存的人员的名字。*/
function test() {
    alert("PivotCaches集合的总数:" + ActiveWorkbook.PivotCaches().Count)
    ActiveWorkbook.PivotCaches().Item(1).EnableRefresh  = true
    alert(ActiveWorkbook.PivotCaches().Item(1).RefreshName)
}
```
