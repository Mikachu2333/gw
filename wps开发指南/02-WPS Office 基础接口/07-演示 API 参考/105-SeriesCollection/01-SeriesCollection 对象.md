# SeriesCollection 对象

代表指定图表或图表组中所有 **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/obj)** 对象的集合。

## 说明


使用 **[SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/SeriesCollection)** 方法可返回 **SeriesCollection** 集合。

使用 **[Extend](#TODO)** 方法可扩展现有系列。

使用 **[Add](#TODO)** 方法可创建新系列并将其添加到图表中。


## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个形状的第一个图表中系列的数量。*/
function test() {
    let seriesCollection = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection()
    alert(seriesCollection.Count)
}
```
使用 **SeriesCollection** (_Index_)（其中 _Index_ 是系列索引号或名称）可返回一个 **Series** 对象。



```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的第一个系列的前景填充色设置为红色。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let series = shape.Chart.SeriesCollection().Item(1)
    series.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SeriesCollection/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SeriesCollection/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |