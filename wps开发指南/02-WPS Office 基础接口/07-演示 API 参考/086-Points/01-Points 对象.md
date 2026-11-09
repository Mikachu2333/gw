# Points 对象

由图表中的指定系列的所有 **[Point](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Point/obj)** 对象组成的集合。

## 说明


使用 **[Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/Points)** (_Index_)（其中_Index_是数据点的索引号）可返回单个 **Point** 对象。系列中的数据点从左至右编号。`Points(1)` 为最左边的数据点，`Points(Points.Count)` 为最右边的数据点。

使用 **Points** 方法可返回 **Points** 集合。


## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中第一个图表的第一个数据系列的最后一个数据点添加数据标签。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let points = shape.Chart.SeriesCollection(1).Points()
        points.Item(points.Count).ApplyDataLabels(xlDataLabelsShowValue)
    }
}
```


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个图表的第一个数据系列的第三个数据点设置标志样式。指定的系列必须是 2D 线、散点或雷达系列。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Points().Item(3).MarkerStyle = xlMarkerStyleDiamond
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Points/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Points/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |