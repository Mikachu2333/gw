# LegendEntries 对象

指定图表图例中所有 **[LegendEntry](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LegendEntry/obj)** 对象的集合。

## 说明


每个图例项都有两部分组成：

* 图例项的文本，它是与图例项关联的系列或趋势线的名称。
* 图例项的标记，它在视觉上将图例项与它在图表中关联的系列或趋势线链接起来。

图例项标记与其关联的系列或趋势线的格式属性包含在 **[LegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LegendKey/obj)** 对象中。

可以使用 **[LegendEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Legend/member/LegendEntries)** 方法返回 **LegendEntries** 集合。


## 示例


```JavaScript
/*本示例遍历活动演示文稿的第一张幻灯片中第一个图表的图例项集合，并更改这些图例项的字体颜色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let legend = shape.Chart.Legend
        for (let i = 1; i <= legend.LegendEntries().Count; i++) {
            legend.LegendEntries().Item(i).Font.Color = RGB(0, 0, 255)
        }
    }
}
```
可以使用 **[LegendEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Legend/member/LegendEntries)** (_index_)（其中 _index_ 是图例项的索引号）返回单个 **LegendEntry** 对象。不能按名称返回图例项。

图例项的索引号代表图例项在图例中的位置。`LegendEntries(1)` 位于图例的顶部；`LegendEntries(LegendEntries.Count)` 位于图例的底部。



```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的第一个图例项的文字字体样式设置为斜体。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Legend.LegendEntries().Item(1).Font.Italic = true
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LegendEntries/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LegendEntries/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |