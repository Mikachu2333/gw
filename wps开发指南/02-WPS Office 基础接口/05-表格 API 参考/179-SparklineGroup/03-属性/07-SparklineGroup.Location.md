# SparklineGroup.Location

获取或设置代表迷你图组的位置的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。可读/写。



## 语法

express.**Location**

express   一个代表 **SparklineGroup** 对象的变量。

## 类型

Range

## 说明


迷你图组中所有迷你图的位置必须在同一个工作表上，但迷你图组的源数据可以在不同的工作表或工作簿上。

代表 **Location** 属性的区域大小必须等于 **SparklineGroup** 对象的 **[SourceData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/SourceData)** 属性中的行数或列数。

与迷你图组关联的连续区域只能是一维的。如果区域是不连续的，则必须分别指定每个单元格。

不要使用 **[Union](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Union)** 方法创建非连续区域，因为 **Union** 方法返回单个区域引用。



## 示例


```JavaScript
/*本示例显示活动工作表上单元格 I1 中第一个迷你图组的位置的地址。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I1").SparklineGroups.Item(1)
    alert(sparklineGroup.Location.Address())
}
```


```JavaScript
/*本示例选中活动工作表上单元格 I1 中第一个迷你图组的位置。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I1").SparklineGroups.Item(1)
    sparklineGroup.Location.Select()
}
```
