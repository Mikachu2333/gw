# Points 对象

图表中指定系列内所有 **[Point](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/obj)** 对象的集合。

## 说明


可以使用 **[Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/member/Points)** (_Index_)（其中_Index_是数据点的索引号）返回单个 **Point** 对象。系列中的数据点从左至右编号。`Points(1)` 为最左边的数据点，`Points(Points.Count)` 为最右边的数据点。

可以使用 **Points** 方法返回 **Points** 集合。


## 示例


```JavaScript
/*本示例向活动文档中第一个图表的第一个数据系列的最后一个数据点添加数据标签。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let points = inlineShape.Chart.SeriesCollection(1).Points()
        points.Item(points.Count).ApplyDataLabels(xlDataLabelsShowValue)
    }
}
```


```JavaScript
/*本示例为活动文档中第一个图表的第一个数据系列的第三个数据点设置标志样式。指定的系列必须是 2D 线、散点或雷达系列。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Points().Item(3).MarkerStyle = xlMarkerStyleDiamond
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Points/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Points/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |