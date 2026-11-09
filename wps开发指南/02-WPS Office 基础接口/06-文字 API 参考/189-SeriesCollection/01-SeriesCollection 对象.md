# SeriesCollection 对象

代表指定图表或图表组中所有 **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/obj)** 对象的集合。

## 说明


可以使用 **[SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/SeriesCollection)** 方法返回 **SeriesCollection** 集合。

可以使用 **[Extend](#TODO)** 方法扩展现有系列。

可以使用 **[Add](#TODO)** 方法新建系列并将其添加到图表中。

使用 **SeriesCollection** (Index)（其中_Index_是系列索引号或名称）可返回一个 **Series** 对象。


## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的系列数目。*/
function test() {
    let chart = ActiveDocument.InlineShapes.Item(1).Chart
    alert("活动文档中第一个图表的系列数目为：" + chart.SeriesCollection().Count)
}
```


```JavaScript
/*本示例显示活动文档上第一张图表的第一个系列的边框粗细是否为 xlHairline。*/
function test() {
    let series = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1)
    alert(series.Border.Weight == xlHairline)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/SeriesCollection/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/SeriesCollection/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |