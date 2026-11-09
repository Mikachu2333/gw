# SparklineGroups 对象

代表迷你图组的集合。

## 说明


 **SparklineGroups** 对象可包含多个 **[SparklineGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/obj)** 对象。

使用 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的 **[SparklineGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/SparklineGroups)** 属性可从现有 **SparklineGroups** 集合的父区域中返回该集合。

使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroups/member/Add)** 方法可创建一组新迷你图。

使用 **[Group](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroups/member/Group)** 方法可创建一组现有迷你图。


## 示例


```JavaScript
/*此示例选择区域 A1:A4 并组合该区域中的迷你图，然后将该区域中第一个迷你图组的正数据点设置为可见，并将其颜色设置为红色。*/
function test() {
    Range("A1:A4").Select()
    Selection.SparklineGroups.Group(Range("A1"))
    Selection.SparklineGroups.Item(1).Points.Markers.Visible = true
    Selection.SparklineGroups.Item(1).Points.Markers.Color.Color = RGB(255, 0, 0)
}
```


```JavaScript
/*此示例取消组合活动工作表上区域 A1:A4 上迷你图组，并删除 A1 单元格中迷你图组。*/
function test() {
    let sparklineGroups = ActiveSheet.Range("A1:A4").SparklineGroups
    sparklineGroups.Ungroup()
    Range("A1").SparklineGroups.ClearGroups()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroups/member/Add) | 创建一个新的迷你图组并返回一个 **[SparklineGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/obj)** 对象。 |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroups/member/Clear) | 清除选定的迷你图。 |
| [ClearGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroups/member/ClearGroups) | 清除选定的迷你图组。 |
| [Group](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroups/member/Group) | 组合选定的迷你图。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroups/member/Item) | 从集合中返回一个 **[SparklineGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/obj)** 对象。只读。 |
| [Ungroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroups/member/Ungroup) | 对选定迷你图组中的迷你图取消组合。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroups/member/Count) | 返回关联的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象中的迷你图组的计数。只读。 |