# FullSeriesCollection 对象

代表所有图表系列，同时筛选和未筛选的完整集合。


## 示例


```JavaScript
/*本示例将活动文档上第一个图表的第二个系列删除。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes(1).Chart
    chart.FullSeriesCollection().Item(2).Delete()
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第三个系列的图表类型是否为簇状柱形图。*/
function test() {
    let chart = Documents.Item(1).Shapes.Item(1).Chart
    alert(chart.FullSeriesCollection().Item(3).ChartType == xlColumnClustered)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FullSeriesCollection/member/Item) | 从集合中返回单个完整系列项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FullSeriesCollection/member/Count) | 返回一个 **Long** 类型的值，表示集合中的完整序列的数目。只读。 |