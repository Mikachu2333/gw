# Points 对象

图表中指定的系列内所有 **[Point](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/obj)** 对象的集合。

## 说明


使用 **[Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Points)** (index)（其中 index 是数据点索引号）可返回一个 **Point** 对象。系列中的数据点从左至右编号。`Points(1)` 是最左边的数据点，而 `Points(Points.Count)` 是最右边的数据点。


## 示例


```JavaScript
/*下例给工作表一上嵌入式图表一中系列一上的最后一个数据点添加数据标签。*/
function test() {
    let points = Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1).Points()
    points.Item(points.Count).ApplyDataLabels(xlShowValue)
}
```


```JavaScript
/*下例为工作表一上嵌入式图表一中系列一中的第三个数据点设置标志样式。指定的系列必须是 2D 线、散点或雷达系列。*/
function test() {
    Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1).Points(3).MarkerStyle = xlDiamond
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Points/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Points/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |